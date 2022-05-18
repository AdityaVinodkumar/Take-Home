const express = require('express');
const bodyParser= require('body-parser')
const { TeamMember } = require('./model');
const cors = require("cors");

const app = express();

app.use(express.static('public'));
app.use('images', express.static(__dirname + '/images'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post("/team", async (req, res) => {
  await TeamMember.create(req.body)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Payment."
    });
  });
});

//------------------------- image Upload -----------------------------
const multer = require('multer');
const _storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("destination->file:", file)
        cb(null, 'public/images/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.split(".")[0] + '-' + Date.now() + "." + file.originalname.split(".")[1]);
    }
})
const upload = multer({ storage: _storage });
app.post('/upload', upload.single('file'), function (req, res) {
    console.log("2----->", req.file);
    res.send(req.file.filename);
});

module.exports = app;
