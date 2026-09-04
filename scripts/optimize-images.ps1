# Yercaud Lake — public/images JPEG 优化脚本
# 使用 Windows GDI+ (System.Drawing) 离线压缩，无新增 npm 依赖。
# 目标：最长边 <= 1600px、JPEG quality 82，EXIF 方向已修正后原位覆盖。
# 用法: powershell -NoProfile -ExecutionPolicy Bypass -File scripts/optimize-images.ps1 [-Only yercaud-xxx.jpg]
param([string]$Only)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Drawing.Common -ErrorAction SilentlyContinue

$srcDir = Join-Path (Get-Location) 'public\images'
$targetLong = 1600
$quality = 82

$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality, [long]$quality)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }

function Get-Orientation {
  param($img)
  try {
    $item = $img.GetPropertyItem(0x0112)
    if ($item) { return [BitConverter]::ToUInt16($item.Value, 0) }
  } catch {}
  return 1
}

Get-ChildItem -Path $srcDir -Filter *.jpg | Where-Object { -not $Only -or $_.Name -eq $Only } | ForEach-Object {
  $path = $_.FullName
  $before = [math]::Round($_.Length / 1KB)
  $img = [System.Drawing.Image]::FromFile($path)
  try {
    $orient = Get-Orientation $img
    switch ($orient) {
      3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
      6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
      8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
    }
    $w = $img.Width; $h = $img.Height
    $scale = [math]::Min(1.0, $targetLong / [math]::Max($w, $h))
    $nw = [int][math]::Round($w * $scale); $nh = [int][math]::Round($h * $scale)
    if ($nw -lt 1) { $nw = 1 }; if ($nh -lt 1) { $nh = 1 }
    $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    try {
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $g.DrawImage($img, 0, 0, $nw, $nh)
      $tmp = [System.IO.Path]::GetTempFileName()
      $bmp.Save($tmp, $jpegCodec, $encParams)
      $img.Dispose()
      Move-Item -Force $tmp $path
      $after = [math]::Round((Get-Item $path).Length / 1KB)
      Write-Host ("OK {0}  {1}x{2}  {3}KB -> {4}KB  (-{5}%)" -f $_.Name, $nw, $nh, $before, $after, [math]::Round(100 * (1 - $after / $before)))
    } finally { $g.Dispose(); $bmp.Dispose() }
  } finally { if (-not $img.IsDisposed) { $img.Dispose() } }
}
Write-Host 'IMAGE_OPTIMIZE: DONE'
