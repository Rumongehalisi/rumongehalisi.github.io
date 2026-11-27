# Site de l'Association de Rumonge Halisi

- Pages françaises : `index.html`, `about.html`, …
- Pages anglaises : `en-index.html`, `en-about.html`, … (générées automatiquement).
- Après toute modification d'une page française : `python3 tools/build_en.py`
  (nécessite `pip install beautifulsoup4`), puis publier aussi les fichiers `en-*.html` et `sitemap.xml`.
