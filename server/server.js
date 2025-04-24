const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

const digitalArtFolderName = path.join(__dirname,'/assets/DigitalArt');
const penOnPaperFolderName = path.join(__dirname,'/assets/PenOnPaper');

const Descriptions = require('./descriptions/DigitalArtDescriptions').default;
const DigitalArtNames = require('./asset_dates/DigitalArtDates').default;

//app.use
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(digitalArtFolderName));
app.use(express.static(penOnPaperFolderName))

//app.get
app.get("/headerImage", (req, res) => {
    res.sendFile(path.join(__dirname,'/assets/DigitalArt/backofdoordrawing.png'));
});

app.get('/getDigitalArtImageFileNames', async (req, res) => {
    res.send(DigitalArtNames);
});
app.get('/getDigitalArtImageDescription', async (req, res) => {
    const imageUrl = req.query.imageToGetDescriptionOf;
    res.send(Descriptions.get(imageUrl));
});

app.get('/getPenOnPaperImageFileNames', async (req, res) => {
    fs.readdir(penOnPaperFolderName, (err, files) => {
        res.send(files);
    });
});

//app.listen
app.listen(8080, () =>{
    console.log("Server started on port 8080");
});