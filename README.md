# The Lost Libraries
### A Visual Chronicle of Erased Knowledge — 1761 BC to 2024 AD

An interactive data visualization project documenting 108 libraries destroyed across 3,785 years of human history. Originally inspired by [Sudhanshu Sharma's Medium article](https://medium.com/@sudhanshu.harsh/the-lost-libraries-visualizing-damage-done-to-99-libraries-throughout-history-e3355f85e10b) visualizing 99 libraries — this project expands the dataset, adds geographic coordinates, and builds upon interactive experiences.

---

## Live Demo

> `https://deniselkruse.github.io/lost-libraries/`

---

## The Three Files

| File | Description |
|------|-------------|
| `index.html` | Main catalogue — filterable grid of all 108 libraries with cause breakdowns, century chart, and detail modals |
| `map.html` | Geographic atlas — interactive Leaflet map with cause filters, era slider, and detail sidebar |
| `timeline.html` | Animated timeline — year-by-year sweep from 1761 BC to 2024 AD, each library igniting on the map at its year of destruction |

---

## Dataset

The dataset extends the original 99-entry blog dataset with 9 additional entries:

| # | Addition | Year | Cause |
|---|----------|------|-------|
| 100 | Library of Pergamon | 133 BC | War |
| 101 | Library of York (Eboracum) | 867 AD | War |
| 102 | Royal Library of Lisbon | 1755 | Fire (earthquake) |
| 103 | Mughal Imperial Library, Delhi | 1857 | War |
| 104 | Library of Banu Ammar, Tripoli | 1109 | War |
| 105 | Bibliotheca Corviniana, Hungary | 1526 | War |
| 106 | Gaza Libraries | 2023–24 | War |
| 107 | Occupy Wall Street People's Library | 2011 | Government |
| 108 | Library of York (Alcuin dispersal) | 782 | Neglect |

### Cause Categories

| Cause | Count | Description |
|-------|-------|-------------|
| War & Conquest | 46 | Military campaigns, sieges, foreign invasions |
| Religious Purge | 20 | Books deemed heretical or ideologically dangerous |
| State Censorship | 16 | Deliberate erasure ordered by governments |
| Accidental Fire | 18 | Earthquakes, electrical faults, accidental flames |
| Civil Conflict | 16 | Revolutions, uprisings, civil wars |
| Neglect & Decay | 2 | Gradual dispersal and abandonment |

### Primary Sources

- [Wikipedia — List of Destroyed Libraries](https://en.wikipedia.org/wiki/List_of_destroyed_libraries)
- Polastron, Lucien X. *Books on Fire: The Destruction of Libraries Throughout History.* Inner Traditions, 2007.
- Ovenden, Richard. *Burning the Books.* John Murray, 2020.
- UNESCO. *Lost Memory — Libraries and Archives Destroyed in the Twentieth Century.*

---

## Technical Details

### Dependencies

| File | External Dependencies |
|------|-----------------------|
| `index.html` | Bootstrap 5.3 (CDN), Google Fonts |
| `map.html` | Leaflet 1.9.4 (CDN), Bootstrap 5.3 (CDN), Google Fonts |
| `timeline.html` | Google Fonts only — fully self-contained SVG map |

All CDN dependencies are loaded from `cdnjs.cloudflare.com` and `fonts.googleapis.com`. No API keys required. No build step required.

### Accessibility

All three files implement:
- Skip navigation links
- ARIA landmarks, roles, and live regions
- `aria-pressed` state on all toggle buttons
- `aria-label` on all interactive map elements
- Minimum 44×44px touch targets (WCAG 2.5.5)
- Minimum font sizes: 14px mono, 15px small, 17px body
- `prefers-reduced-motion` support — all animations disabled for users who need it
- `forced-colors` / Windows High Contrast mode support
- WCAG AA contrast ratios throughout

### Browser Support

Tested in current versions of Chrome, Firefox, Safari, and Edge. The timeline SVG animation uses `requestAnimationFrame` and CSS animations — both universally supported. The map uses Leaflet 1.9.4 which supports IE11+, though the dark tile filter may degrade on older browsers.

---

## Local Development

No build tools required. Open any file directly in a browser, or serve locally:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .

# VS Code
# Install the "Live Server" extension, right-click index.html → Open with Live Server
```

---

## Deployment (GitHub Pages)

```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial commit: Lost Libraries visualization"

# 2. Create a repo on github.com, then push
git remote add origin https://github.com/deniselkruse/lost-libraries.git
git branch -M main
git push -u origin main
```

Then go to your repository → **Settings** → **Pages** → Source: **Deploy from branch** → Branch: `main` → Folder: `/ (root)` → **Save**.

Your site will be live at `https://deniselkruse.github.io/lost-libraries/` within 1–2 minutes.

---

## Recommended Further Reading

- **Polastron, Lucien X.** *Books on Fire: The Destruction of Libraries Throughout History.* Inner Traditions, 2007. — The most comprehensive single-volume treatment of this subject.
- **Ovenden, Richard.** *Burning the Books.* John Murray, 2020. — Shortlisted for the Baillie Gifford Prize; written by the director of the Bodleian Library.
- **Knuth, Rebecca.** *Libricide: The Regime-Sponsored Destruction of Books and Libraries in the Twentieth Century.* Praeger, 2003.
- **Battles, Matthew.** *Library: An Unquiet History.* W.W. Norton, 2003.

---

## License

Data is compiled from public sources (see Primary Sources above). Code is MIT licensed — free to use, adapt, and redistribute with attribution.

---

*"Every book that burns takes with it a world that will never be reconstructed."*
