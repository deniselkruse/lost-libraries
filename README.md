# The Lost Libraries
### A Visual Chronicle of Erased Knowledge — 1761 BC to 2026 AD

An interactive record of **114 libraries destroyed across 3,787 years**, from the palace archives of Bronze Age Mari to libraries burning in Gaza, Sudan and Ukraine today.

Originally inspired by [Sudhanshu Sharma's Medium article](https://medium.com/@sudhanshu.harsh/the-lost-libraries-visualizing-damage-done-to-99-libraries-throughout-history-e3355f85e10b) on 99 libraries. This project re-verified that dataset, merged duplicate records, corrected several factual errors, added geographic coordinates, and extended it to cover three ongoing conflicts.

---

## Live site

> `https://deniselkruse.github.io/lost-libraries/`

---

## Files

| File | What it is |
|------|-----------|
| `index.html` | Main page — causes, a stacked century chart, a map preview, the full catalogue, further reading |
| `map.html` | Interactive atlas — pan, pinch-zoom, filter by cause, filter by era, detail panel |
| `timeline.html` | Animated sweep — 1761 BC to 2026, each library igniting on the map at its year |

All three are self-contained. No build step, no API keys, no tile server.

---

## The dataset

**114 records.** Distribution by cause:

| Cause | Records | Share |
|-------|--------:|------:|
| Armed conflict | 66 | 58% |
| Accidental fire | 24 | 21% |
| Religious purge | 13 | 11% |
| State censorship | 11 | 10% |

Armed conflict covers foreign invasion and civil war together, since the two were not meaningfully separable in the records. Accidental fire has claimed as many libraries as religious purges and state censorship combined.

The 20th century holds the most records (35). The 21st is already at 34 and is not yet half over.

### Corrections made to the source data

- **Five duplicate records merged.** The original set reached its total partly by counting the same library twice (Lisbon, Banu Ammar, Corviniana, the OWS People's Library, and York). Their detail was folded into the surviving record.
- **Timbuktu corrected.** The entry implied 20,000+ manuscripts were destroyed. Roughly 2,000 of some 30,000 burned; residents had already smuggled the rest to safety. The rescue is the story.
- **Legends labelled as legends.** The Tigris "running black with ink" and a horse crossing the river on books are traditional accounts, not documented fact, and are now presented as such.
- **Unsourced precision removed.** Claims like "set science back two centuries" were editorial and have been replaced with verifiable detail.
- **Inflated medieval figures flagged.** Banu Ammar's "three million volumes" is a chronicler's claim, not a count.

### Records added for ongoing conflicts

**Gaza** — Islamic University library (1.5m volumes), Great Omari Mosque library, Central Archives of Gaza City, EBAF archives. Reporting puts the wider total at more than 87 libraries and archives damaged or destroyed.

**Ukraine** — Kharkiv, Mariupol and Kherson individually, plus a regional record. UNESCO has verified 24 libraries and 5 archives among 563 damaged cultural sites.

**Sudan** — the Mohamed Omer Bashir Centre library, the National Records Office and National Library, and the Sudan University College of Forestry library.

### Sources

- [Wikipedia: List of destroyed libraries](https://en.wikipedia.org/wiki/List_of_destroyed_libraries)
- [UNESCO: Damaged cultural sites in Ukraine](https://www.unesco.org/en/ukraine-war/damaged-cultural-sites)
- [Wikipedia: Destruction of cultural heritage during the Gaza war](https://en.wikipedia.org/wiki/Destruction_of_cultural_heritage_during_the_Gaza_war)
- [Wikipedia: Destruction of cultural heritage during the Sudanese civil war](https://en.wikipedia.org/wiki/Destruction_of_cultural_heritage_during_the_Sudanese_civil_war)
- Polastron, *Books on Fire* (2007); Ovenden, *Burning the Books* (2020); Knuth, *Libricide* (2003); Battles, *Library: An Unquiet History* (2003)

---

## Technical notes

**Dependencies.** `index.html` uses Bootstrap 5.3.8 and Google Fonts from CDN. `map.html` and `timeline.html` use Google Fonts only — their geography is inline SVG drawn from Natural Earth coastlines, so they work with no network at all.

**Why not map tiles.** Earlier versions used a raster tile server and then a CDN-hosted geometry script. Both were blocked by sandboxed viewers, leaving markers floating on an empty background. The coastlines are now written into the files as SVG paths.

**Accessibility**
- Skip link, landmark roles, labelled sections
- `aria-pressed` on every filter; `aria-live` on result counts
- The century chart has a full data table equivalent, not just a label
- All interactive targets at least 44×44px
- Body text 20px on mobile, nothing below 16px
- Contrast: body 17.2:1, secondary 12.1:1, muted 7.5:1, accent 5.8:1
- `prefers-reduced-motion`, `prefers-contrast`, and forced-colors support
- Safe-area insets for notched devices

**Mobile.** Pinch-zoom, drag-pan and double-tap zoom on the map, verified at iPhone, iPad and desktop viewports. Tall screens open the map zoomed into the dense region rather than showing a letterboxed world.

---

## Local development

```bash
python3 -m http.server 8000     # then open http://localhost:8000
```

Or use the Live Server extension in VS Code.

## Deploying

```bash
git add .
git commit -m "Update Lost Libraries"
git push
```

GitHub Pages redeploys automatically from `main`.

---


*"Every book that burns takes with it a world that will never be reconstructed."*
