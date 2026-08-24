# Image catalog

The production gallery contains exactly 12 photographs. All image paths, locations, captions, and display order are managed from `src/content/text/siteContent.ts`.

| Order | File | Location | Display role |
| ---: | --- | --- | --- |
| 1 | `hero-fishermans-wharf.webp` | Fisherman's Wharf, San Francisco | Opening portrait |
| 2 | `california-mountain-sunrise.webp` | California Mountains | Featured portrait |
| 3 | `lake-tahoe-kayaking.webp` | Lake Tahoe, California | Featured landscape |
| 4 | `golden-gate-portrait.webp` | Golden Gate Bridge, San Francisco | Album opening |
| 5 | `san-francisco-bay-ferry.webp` | San Francisco Bay, California | Album duet |
| 6 | `yosemite-winter.webp` | Yosemite National Park | Album duet |
| 7 | `hollywood-hills.webp` | Hollywood Hills, Los Angeles | Open book |
| 8 | `downtown-los-angeles-rain.webp` | Downtown Los Angeles | Open book |
| 9 | `big-sur-coast.webp` | Big Sur, California | Panorama |
| 10 | `pottery-bay-area.webp` | Bay Area, California | Album overlap |
| 11 | `mission-peak-climb.webp` | Mission Peak, Fremont | Album overlap |
| 12 | `palace-fine-arts-skating.webp` | Palace of Fine Arts, San Francisco | Finale |

## Image replacement rules

1. Keep the existing filename when replacing a photograph in place.
2. Export as WebP using an sRGB color profile.
3. Preserve the portrait or landscape orientation expected by the album spread.
4. Compress carefully, visual quality matters more than aggressive file reduction.
5. Update alt text, location, story, and optional crop position in `siteContent.ts` when the subject changes.

