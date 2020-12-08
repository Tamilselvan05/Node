const express = require("express");
const tModels = require("../Model/mModels");
const router = express.Router();

const tamil = require("../models/mModels");


router.post("/createCompanyLevel1", function (req, res) {
  console.log("------");
  console.log(req.body);
  let tam = new tModels();
  tam.userName = req.body.userName;
  tam.userEmail = req.body.userEmail;
  tam.save((err, docs) => {
    if (err) {
      console.log("errre save db");
      res.send(err);
    } else {
      console.log("success save db");
      res.send(docs);
    }
  });
});





module.exports = router;