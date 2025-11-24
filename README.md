# English-Exercise — Homepage for GitHub Pages

This repository contains simple static HTML exercises. The `index.html` added here provides a small homepage that lists weeks and lessons and links to your existing exercise pages under `Week 1/`.

How to test locally (from repository root):

```bash
# start a simple local server (works on Windows bash)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

How to publish with GitHub Pages:

- Push these files to your `main` branch (or `gh-pages` branch if you prefer).
- In the repository Settings -> Pages, choose the branch and folder (`/ (root)`), then Save.
- Your site will be available at `https://<username>.github.io/<repo>/`.

Customizing:

- Edit `script.js` and change the `data` array to add more weeks or lessons.
- Keep lesson `path` values as relative paths to your HTML files (e.g., `Week 1/bai-tap-1.html`).

If you want, I can:
- Auto-generate the `data` array by scanning directories (requires a small build step), or
- Add a small navigation UI improvement or icons.
