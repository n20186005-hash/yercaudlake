# Build and release checks

The source uses the pinned package manager and runtime in package.json. Run the normal frozen install, type check, static build, source audit and build verification. Default Wrangler configuration must match the existing project and contain the reviewed Worker entry and ASSETS binding.

A successful local bundle does not establish production routing, domain bindings, provider availability or visual behavior. Keep those acceptance gates distinct and verify the actual deployed version.
