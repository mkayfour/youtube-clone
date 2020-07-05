const express = require('express');
const router = express.Router();
// const { User } = require('../models/User');

const { auth } = require('../middleware/auth');

const multer = require('multer');

//=================================
//             Video
//=================================

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.mp4') {
      return cb(res.status(400).end('only mp4 file is allowed'), false);
    }
    cb(null, true);
  }
});

let upload = multer({ storage }).single('file');

router.post('/uploadfiles', auth, (req, res) => {
  upload((req, res, err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: req.res.file.path,
      fileName: res.req.file.filename
    });
  });
});

module.exports = router;
