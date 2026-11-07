# profile-site source

Generator for `profile-site/` (static HTML built from the GA Company Profile).

    python3 build3.py out && copy out/* into ../profile-site/   # never touch ../profile-site/3d/

- `build3.py` — page templates and content
- `site.css`, `site.js` — shared styles and scripts (bump `?v=` in build3.py on change)
- `img/` — images copied to `assets/img/`

The home iframe must stay `src="3d/"` with background `url(3d/assets/poster.webp)`.
