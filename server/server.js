const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

const DigitalArtDescriptions = require('./descriptions/DigitalArtDescriptions').default;
const PenOnPaperDescriptions = require('./descriptions/PenOnPaperDescriptions').default;
const AnimationDescriptions = require('./descriptions/AnimationDescriptions').default;

//app.use
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname,'/assets/DigitalArt')));
app.use(express.static(path.join(__dirname,'/assets/PenOnPaper')));
app.use(express.static(path.join(__dirname,'/assets/Animations')));
app.use(express.static(path.join(__dirname,'/assets/AnimationImages')));

const sortByDateDigitalArt = (a, b) => {
    try {
        const a_stats = fs.statSync('./assets/DigitalArt/' + a);
        const b_stats = fs.statSync('./assets/DigitalArt/' + b);
        // this should allow me to group things I don't care about at the end of the list, some images have 
        // inaccurate birthtimes due to being moved around and changed format, some of these are over a decade old at this point
        if(a.startsWith("_", 0)){
            return 1;
        }
        if(b.startsWith("_", 0)){
            return -1;
        }
        if(a.startsWith("_", 0) && b.startsWith("_", 0)){
            return b_stats.birthtimeMs - a_stats.birthtimeMs;
        }
        return b_stats.birthtimeMs - a_stats.birthtimeMs;
    } catch (err) {
        console.error(err);
    }
};

const sortByDatePenOnPaper = (a, b) => {
    try {
        const a_stats = fs.statSync('./assets/PenOnPaper/' + a);
        const b_stats = fs.statSync('./assets/PenOnPaper/' + b);
        // this should allow me to group things I don't care about at the end of the list, some images have 
        // inaccurate birthtimes due to being moved around and changed format, some of these are over a decade old at this point
        if(a.startsWith("_", 0)){
            return 1;
        }
        if(b.startsWith("_", 0)){
            return -1;
        }
        if(a.startsWith("_", 0) && b.startsWith("_", 0)){
            return b_stats.birthtimeMs - a_stats.birthtimeMs;
        }
        return b_stats.birthtimeMs - a_stats.birthtimeMs;
    } catch (err) {
        console.error(err);
    }
};

const sortByDateAnimations = (a, b) => {
    try {
        const a_stats = fs.statSync('./assets/Animations/' + a);
        const b_stats = fs.statSync('./assets/Animations/' + b);
        // this should allow me to group things I don't care about at the end of the list, some images have 
        // inaccurate birthtimes due to being moved around and changed format, some of these are over a decade old at this point
        if(a.startsWith("_", 0)){
            return 1;
        }
        if(b.startsWith("_", 0)){
            return -1;
        }
        if(a.startsWith("_", 0) && b.startsWith("_", 0)){
            return b_stats.birthtimeMs - a_stats.birthtimeMs;
        }
        return b_stats.birthtimeMs - a_stats.birthtimeMs;
    } catch (err) {
        console.error(err);
    }
};

app.get("/headerImage", (_, res) => {
    res.sendFile(path.join(__dirname,'/assets/DigitalArt/backofdoordrawing.png'));
});

// Digital Art
app.get('/getDigitalArtImageFileNames', async (_, res) => {
    const filenames = fs.readdirSync('./assets/DigitalArt/');
    filenames.sort(sortByDateDigitalArt);
    res.send(filenames);
});
app.get('/getDigitalArtImageDescription', async (req, res) => {
    const imageUrl = req.query.imageToGetDescriptionOf;
    res.send(DigitalArtDescriptions.get(imageUrl));
});

// Pen on Paper
app.get('/getPenOnPaperImageFileNames', async (_, res) => {
    const filenames = fs.readdirSync('./assets/PenOnPaper/');
    filenames.sort(sortByDatePenOnPaper);
    res.send(fs.readdirSync('./assets/PenonPaper/'));
});
app.get('/getPenOnPaperImageDescription', async (req, res) => {
    const imageUrl = req.query.imageToGetDescriptionOf;
    res.send(PenOnPaperDescriptions.get(imageUrl));
});

// Animation
app.get('/getAnimationFileNames', async (_, res) => {
    const filenames = fs.readdirSync('./assets/Animations/');
    filenames.sort(sortByDateAnimations);
    res.send(fs.readdirSync('./assets/Animations/'));
});
app.get('/getAnimationImageFileNames', async (_, res) => {
    res.send(fs.readdirSync('./assets/AnimationImages/'));
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