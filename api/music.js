const fs = require('fs');
const path = require('path');

const MUSIC_DIR = path.join(__dirname, '..', 'src', 'assets', 'music');

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=120');
  res.setHeader('Content-Type', 'application/json');

  const configPath = path.join(MUSIC_DIR, 'playlist.json');
  let config = [];
  try {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  } catch (e) {
    config = [];
  }

  const audioExts = new Set(['.mp3', '.wav', '.ogg', '.flac', '.m4a', '.aac']);
  let files;
  try {
    files = fs.readdirSync(MUSIC_DIR).filter(f => audioExts.has(path.extname(f).toLowerCase()));
  } catch (e) {
    return res.status(500).json({ error: 'Cannot read music directory' });
  }

  const result = files.map(f => {
    const cfg = config.find(c => c.file === f);
    const basename = path.basename(f, path.extname(f));
    const coverFile = cfg && cfg.cover ? cfg.cover : null;
    const coverExt = coverFile ? path.extname(coverFile).toLowerCase() : '';
    const validCover = ['.jpg', '.jpeg', '.png'].includes(coverExt);
    return {
      name: cfg && cfg.title ? cfg.title : basename,
      file: f,
      path: `assets/music/${encodeURIComponent(f)}`,
      cover: coverFile && validCover ? `assets/music/${encodeURIComponent(coverFile)}` : null,
    };
  });

  res.json(result);
};
