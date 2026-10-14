# Real2Code project website

This site uses the shared research-project template at
`/Users/mandizhao/project-website-template`, version 1.2.0.

Edit `content.js` for the paper text, authors, links, section order, media, and
theme colors. Set `paper.titleLines` to choose title line breaks, or omit it for
automatic wrapping. Open `index.html` directly to preview. Before publishing, run:

```sh
node build-index.mjs
node build-index.mjs --check
```

The layout, renderer, behavior, font, and metadata builder are managed by the
template. Make shared design changes there, then update this repository with:

```sh
node /Users/mandizhao/project-website-template/scripts/update-project.mjs "$PWD" --dry-run
node /Users/mandizhao/project-website-template/scripts/update-project.mjs "$PWD"
node /Users/mandizhao/project-website-template/scripts/update-project.mjs "$PWD" --check
```

`template-version.json` records the installed release and managed files. The
updater preserves project content and media, and stops if shared files have
local edits. Review and commit changes here before using the existing GitHub
Pages publishing workflow; the updater does not push or publish.

This repository keeps only the project media referenced in `content.js`, including
a 2400-pixel web copy of the real-object figure and a video poster. Shared files
are copied from the template because GitHub Pages cannot load files from a
sibling repository. Inline paper links use structured text/link segments in
`content.js`; figure and video captions remain blank.
