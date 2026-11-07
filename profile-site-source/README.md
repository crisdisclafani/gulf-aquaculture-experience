# profile-site source

Generator for `profile-site/` (static HTML built from the GA Company Profile).

    python3 build3.py out && copy out/* into ../profile-site/   # never touch ../profile-site/3d/

- `build3.py` — page templates and content
- `site.css`, `site.js` — shared styles and scripts (bump `?v=` in build3.py on change)
- `img/` — images copied to `assets/img/`

The home iframe must stay `src="3d/"` with background `url(3d/assets/poster.webp)`.

## Species
Species data and pages live in `species_data.py` (`SPECIES` list). Add a species by adding a dict; a page `species-<k>.html` is generated automatically.
Each species page has a video section. By default it uses `DEFAULT_VIDEO`; to give a species its own video, put the mp4 in `video/`, a poster in `img/`, and add `video=("file.mp4","poster.webp")` to that species.

## Facilities
Facility pages (`asset-<k>.html`) are generated from `facilities_data.py` (`FACILITIES`). `assets.html` is the overview that links to them. Add Delma or Khorfakkan by adding a dict.
