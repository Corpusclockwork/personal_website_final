const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

const digitalArtFolderName = path.join(__dirname,'/assets/DigitalArt');
const penOnPaperFolderName = path.join(__dirname,'/assets/PenOnPaper');
const animationsFolderName = path.join(__dirname,'/assets/Animations');

const DigitalArtDescriptions = require('./descriptions/DigitalArtDescriptions').default;
const PenOnPaperDescriptions = require('./descriptions/PenOnPaperDescriptions').default;
const AnimationDescriptions = require('./descriptions/AnimationDescriptions').default;

const DigitalArtNames = require('./asset_dates/DigitalArtDates').default;
const PenOnPaperNames = require('./asset_dates/PenOnPaperDates').default;
const AnimationNames = require('./asset_dates/AnimationDates').default;

//app.use
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(digitalArtFolderName));
app.use(express.static(penOnPaperFolderName));
app.use(express.static(animationsFolderName));

app.get("/headerImage", (req, res) => {
    res.sendFile(path.join(__dirname,'/assets/DigitalArt/backofdoordrawing.png'));
});

app.get('/getDigitalArtImageFileNames', async (req, res) => {
    res.send(DigitalArtNames);
});
app.get('/getDigitalArtImageDescription', async (req, res) => {
    const imageUrl = req.query.imageToGetDescriptionOf;
    res.send(DigitalArtDescriptions.get(imageUrl));
});

app.get('/getPenOnPaperImageFileNames', async (req, res) => {
    res.send(PenOnPaperNames);
});
app.get('/getPenOnPaperImageDescription', async (req, res) => {
    const imageUrl = req.query.imageToGetDescriptionOf;
    res.send(PenOnPaperDescriptions.get(imageUrl));
});

app.get('/getAnimationFileNames', async (req, res) => {
    res.send(AnimationNames);
});
app.get('/getAnimationDescription', async (req, res) => {
    const imageUrl = req.query.imageToGetDescriptionOf;
    res.send(AnimationDescriptions.get(imageUrl));
});

//app.listen
app.listen(8080, () =>{
    console.log("Server started on port 8080");
});

// just redirect 404 errors to the homepage
app.get('/*', (req, res) => {
    res.redirect('/');
});