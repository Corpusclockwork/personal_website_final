// I know this is ugly, but sorting them using file properties might not work on linux
const PenOnPaperDatesArray = [
    {name : '_archer.JPG', date : new Date("2018-05-05")},
    {name : '_arrowineye.jpg', date : new Date("2024-07-11")},
    {name : '_assortment.JPG', date : new Date("2018-04-03")},
    {name : '_astronaut.JPG', date : new Date("2017-06-03")},
    {name : '_automailarm.jpg', date : new Date("2024-02-13")},
    {name : '_bighead.JPG', date : new Date("2018-04-29")},
    {name : '_birdwithfeet.jpg', date : new Date("2024-01-08")},
    {name : '_cryinghands.JPG', date : new Date("2017-05-21")},
    {name : '_deepsea.JPG', date : new Date("2018-07-27")},
    {name : '_dog.JPG', date : new Date("2018-04-18")},
    {name : '_downthedrain.jpg', date : new Date("2023-06-25")},
    {name : '_dragin6.JPG', date : new Date("2018-06-17")},
    {name : '_dragon1.JPG', date : new Date("2017-07-17")},
    {name : '_dragon2.JPG', date : new Date("2015-01-01")},
    {name : '_dragon3.JPG', date : new Date("2017-10-18")},
    {name : '_dragon4.JPG', date : new Date("2018-04-18")},
    {name : '_dragon5.JPG', date : new Date("2018-04-18")},
    {name : '_dragonfin.JPG', date : new Date("2018-04-03")},
    {name : '_holdingskull.jpg', date : new Date("2024-02-13")},
    {name : '_holeinchest.JPG', date : new Date("2017-06-02")},
    {name : '_jellyfish.JPG', date : new Date("2017-12-02")},
    {name : '_manyhandswithfins.JPG', date : new Date("2017-06-02")},
    {name : '_moose.JPG', date : new Date("2018-05-21")},
    {name : '_noeyesmanyhands.JPG', date : new Date("2017-06-30")},
    {name : '_octopushands.JPG', date : new Date("2017-07-17")},
    {name : '_octopusmall.JPG', date : new Date("2018-05-07")},
    {name : '_ouroborus.JPG', date : new Date("2017-06-17")},
    {name : '_riderthreeheads.jpg', date : new Date("2023-02-24")},
    {name : '_seaserpent.JPG', date : new Date("2018-05-02")},
    {name : '_seaserpent2.jpg', date : new Date("2023-02-26")},
    {name : '_sharphands.jpg', date : new Date("2023-02-22")},
    {name : '_skulloctopus.JPG', date : new Date("2018-09-09")},
    {name : '_slicedhead.JPG', date : new Date("2017-06-30")},
    {name : '_swordgirl.jpg', date : new Date("2023-02-26")},
    {name : '_tentacle.JPG', date : new Date("2018-06-29")},
    {name : '_threeeyeshorns.JPG', date : new Date("2018-05-26")},
    {name : '_tvhead.JPG', date : new Date("2017-10-28")},
    {name : '_wiseowl.JPG', date : new Date("2018-06-29")},
    {name : 'bird_eggs.jpg', date : new Date("2019-01-01")},
    {name : 'computer_head.jpg', date : new Date("2024-02-17")},
    {name : 'fairy.jpg', date : new Date("2023-01-01")},
    {name : 'father.jpg', date : new Date("2024-07-11")},
    {name : 'forest_creature.jpg', date : new Date("2023-07-21")},
    {name : 'good_parent.jpg', date : new Date("2024-01-01")},
    {name : 'heavenly.jpg', date : new Date("2024-02-22")},
    {name : 'jellyfish_octopus.JPG', date : new Date("2018-08-02")},
    {name : 'manyfaces_doodle.jpg', date : new Date("2024-04-03")},
    {name : 'mertyl.jpg', date : new Date("2024-02-17")},
    {name : 'oldsketchbook_back.JPG', date : new Date("2018-03-01")},
    {name : 'oldsketchbook_front.JPG', date : new Date("2018-03-01")},
    {name : 'reference_drawing.jpg', date : new Date("2024-07-11")},
    {name : 'sketchbook.jpg', date : new Date("2024-05-01")}
];

// sort the array of objects by date so that new images are first
const sortByDate = (a, b) => {
    return b.date - a.date;
};
PenOnPaperDatesArray.sort(sortByDate);

// make new array of just image names
const PenOnPaperNames = PenOnPaperDatesArray.map((x) => x.name);

export default PenOnPaperNames;