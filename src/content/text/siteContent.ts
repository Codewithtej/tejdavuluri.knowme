export type Scene = "square-center" | "portrait-left" | "portrait-right" | "square-edge" | "full-height" | "panorama" | "poster-center" | "wide-inset" | "night-full";

export type Photo = { file: string; alt: string; location: string; story: string; position?: string; scene?: Scene; };

export const siteText = {
  name: "Tej Davuluri",
  interests: ["Photography", "Travel", "Music"],
  intro: [
    "Somewhere between unfamiliar roads and familiar songs, I usually find the moments worth remembering.",
    "A camera simply gives me an excuse to slow down and keep them a little longer.",
  ],
  interludes: [
    ["I love movies, and I am very capable of turning ‘one episode’ into an accidental weekend binge.", "A great story, a comfortable couch, and good company are difficult to beat."],
    ["I am drawn to places with a view and people with a story.", "The best days usually involve both, plus enough laughter to forget checking the time."],
  ],
  instagramUrl: "https://www.instagram.com/tejdavuluri/",
  instagramLabel: "A little more of life, on Instagram",
  closing: "Thanks for stopping by.",
};

export const openingPhoto: Photo = {
  file: "hero-fishermans-wharf.webp",
  alt: "Tej standing in front of a Ferris wheel",
  location: "Fisherman's Wharf, San Francisco",
  story: "Curious by nature, grounded by family, happiest around good conversations, and guided by kindness.",
  position: "center 76%",
};

export const featuredPhotos: Photo[] = [
  { file: "california-mountain-sunrise.webp", alt: "Tej overlooking a mountain valley in golden light", location: "California Mountains", story: "Golden light, a long view, and the rare morning when waking up early felt completely reasonable.", position: "center 44%" },
  { file: "lake-tahoe-kayaking.webp", alt: "Tej kayaking on a mountain lake", location: "Lake Tahoe, California", story: "The best kind of quiet, a paddle, cold water, and mountains in every direction.", position: "center" },
];

export const galleryPhotos: Photo[] = [
  { file: "golden-gate-portrait.webp", alt: "Tej at the Golden Gate Bridge", location: "Golden Gate Bridge, San Francisco", story: "A familiar landmark that still earns another photograph every time.", scene: "square-edge" },
  { file: "san-francisco-bay-ferry.webp", alt: "Tej enjoying a ship ride across San Francisco Bay", location: "San Francisco Bay, California", story: "Cold ocean air, a windy deck, and a view worth staying outside for.", scene: "square-center" },
  { file: "yosemite-winter.webp", alt: "Tej walking through Yosemite after fresh snow", location: "Yosemite National Park", story: "Cold morning, bright hoodie, zero regrets.", scene: "poster-center" },
  { file: "hollywood-hills.webp", alt: "Tej walking below the Hollywood sign", location: "Hollywood Hills, Los Angeles", story: "The shortcut became a climb, but the view made a convincing argument for it.", position: "center 58%", scene: "portrait-left" },
  { file: "downtown-los-angeles-rain.webp", alt: "Tej on a rainy night in downtown Los Angeles", location: "Downtown Los Angeles", story: "Rain changed the plan, then turned every city light into part of the photograph.", scene: "night-full" },
  { file: "big-sur-coast.webp", alt: "Tej overlooking the California coast", location: "Big Sur, California", story: "A quick road trip stop that quietly became the best part of the day.", scene: "panorama" },
  { file: "pottery-bay-area.webp", alt: "Tej learning pottery", location: "Bay Area, California", story: "A lesson in patience, with a very messy pair of hands as proof.", position: "center 42%", scene: "portrait-left" },
  { file: "mission-peak-climb.webp", alt: "Tej at a mountain viewpoint", location: "Mission Peak, Fremont", story: "The climb was serious. The victory pose was slightly less serious.", scene: "poster-center" },
  { file: "palace-fine-arts-skating.webp", alt: "Tej skating near the Palace of Fine Arts", location: "Palace of Fine Arts, San Francisco", story: "Still learning the graceful part, already enjoying the movement.", scene: "wide-inset" },
];

export const albumSpreads = [
  { kind: "opening", photos: [0] },
  { kind: "duet", photos: [1, 2] },
  { kind: "open-book", photos: [3, 4] },
  { kind: "panorama", photos: [5] },
  { kind: "overlap", photos: [6, 7] },
  { kind: "finale", photos: [8] },
] as const;

export const allPhotos = [openingPhoto, ...featuredPhotos, ...galleryPhotos];
export const imageUrl = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;
