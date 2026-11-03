// Central registry for every guide page.
// Route generation, the hub listings, related-page links and the build checks
// all read from this single list, so a page cannot exist without being wired up.
import type { GuidePage, Family } from './types';
import { FAMILIES } from './types';

import boatingGuide from './boating-guide';
import boatingPrices from './boating-prices';
import boatingTimings from './boating-timings';
import boatingOnlineBooking from './boating-online-booking';
import boatingWithKids from './boating-with-kids';
import boatingWeekendQueues from './boating-weekend-queues';

import visitBestTime from './visit-best-time';
import visitLakesideWalk from './visit-lakeside-walk';
import visitPhotoSpots from './visit-photo-spots';
import visitLakeNatureHistory from './visit-lake-nature-history';

import transportFromSalem from './transport-from-salem';
import transportFromSalemJunction from './transport-from-salem-junction';
import transportFromYercaudBusStand from './transport-from-yercaud-bus-stand';
import transportParking from './transport-parking';
import transportGhatRoadDriving from './transport-ghat-road-driving';
import transportBusVsTaxi from './transport-bus-vs-taxi';
import transportFromBengaluru from './transport-from-bengaluru';

import foodRestaurantsNearLake from './food-restaurants-near-lake';
import foodCafesWithLakeViews from './food-cafes-with-lake-views';
import foodVegetarianNearLake from './food-vegetarian-near-lake';
import foodBreakfastBeforeBoating from './food-breakfast-before-boating';
import foodLunchAfterBoating from './food-lunch-after-boating';
import foodSnacksTeaAfterLake from './food-snacks-tea-after-lake';
import foodFamilyFriendlyMeals from './food-family-friendly-meals';

import nearbyAnnaPark from './nearby-anna-park';
import nearbyDeerPark from './nearby-deer-park';
import nearbyKiliyurFalls from './nearby-kiliyur-falls';
import nearbyLadysSeat from './nearby-ladys-seat';
import nearbyGentsChildrensSeat from './nearby-gents-childrens-seat';
import nearbyPagodaPoint from './nearby-pagoda-point';
import nearbyRoseGardenSilkFarm from './nearby-rose-garden-silk-farm';
import nearbyBotanicalGarden from './nearby-botanical-garden';
import nearbyShevaroyanTemple from './nearby-shevaroyan-temple';

import itinerariesLakeInOneHour from './itineraries-lake-in-one-hour';
import itinerariesLakeHalfDay from './itineraries-lake-half-day';
import itinerariesOneDayFromLake from './itineraries-one-day-from-lake';
import itinerariesTwoDaysFromLake from './itineraries-two-days-from-lake';
import itinerariesFamilyWithKids from './itineraries-family-with-kids';
import itinerariesLowWalking from './itineraries-low-walking';
import itinerariesRainyDay from './itineraries-rainy-day';
import itinerariesLakeViewpointsSunset from './itineraries-lake-viewpoints-sunset';
import itinerariesCarFree from './itineraries-car-free';

export const guides: GuidePage[] = [
  boatingGuide,
  boatingPrices,
  boatingTimings,
  boatingOnlineBooking,
  boatingWithKids,
  boatingWeekendQueues,
  visitBestTime,
  visitLakesideWalk,
  visitPhotoSpots,
  visitLakeNatureHistory,
  transportFromSalem,
  transportFromSalemJunction,
  transportFromYercaudBusStand,
  transportParking,
  transportGhatRoadDriving,
  transportBusVsTaxi,
  transportFromBengaluru,
  foodRestaurantsNearLake,
  foodCafesWithLakeViews,
  foodVegetarianNearLake,
  foodBreakfastBeforeBoating,
  foodLunchAfterBoating,
  foodSnacksTeaAfterLake,
  foodFamilyFriendlyMeals,
  nearbyAnnaPark,
  nearbyDeerPark,
  nearbyKiliyurFalls,
  nearbyLadysSeat,
  nearbyGentsChildrensSeat,
  nearbyPagodaPoint,
  nearbyRoseGardenSilkFarm,
  nearbyBotanicalGarden,
  nearbyShevaroyanTemple,
  itinerariesLakeInOneHour,
  itinerariesLakeHalfDay,
  itinerariesOneDayFromLake,
  itinerariesTwoDaysFromLake,
  itinerariesFamilyWithKids,
  itinerariesLowWalking,
  itinerariesRainyDay,
  itinerariesLakeViewpointsSunset,
  itinerariesCarFree
];

const bySlug = new Map(guides.map((page) => [page.slug, page]));

export function getGuide(slug: string): GuidePage | undefined {
  return bySlug.get(slug);
}

export function guidesByFamily(family: Family): GuidePage[] {
  return guides
    .filter((page) => page.family === family)
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

// Families in their intended reading order, each with its pages.
export const familyGroups = (Object.keys(FAMILIES) as Family[])
  .sort((a, b) => FAMILIES[a].order - FAMILIES[b].order)
  .map((family) => ({ family, pages: guidesByFamily(family) }));

// Resolve a page's `related` slugs to full pages, dropping any that have no page.
export function relatedGuides(page: GuidePage): GuidePage[] {
  return page.related
    .map((slug) => bySlug.get(slug))
    .filter((entry): entry is GuidePage => Boolean(entry));
}
