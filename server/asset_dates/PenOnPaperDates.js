const PenOnPaperDatesArray = [
    {name : '_archer.JPG', date : new Date("")},
    {name : '_arrowineye.jpg', date : new Date("")},
    {name : '_assortment.JPG', date : new Date("")},
    {name : '_astronaut.JPG', date : new Date("")},
    {name : '_automailarm.jpg', date : new Date("")},
    {name : '_bighead.JPG', date : new Date("")},
    {name : '_birdwithfeet.jpg', date : new Date("")},
    {name : '_cryinghands.JPG', date : new Date("")},
    {name : '_deepsea.JPG', date : new Date("")},
    {name : '_dog.JPG', date : new Date("")},
    {name : '_downthedrain.jpg', date : new Date("")},
    {name : '_dragin6.JPG', date : new Date("")},
    {name : '_dragon1.JPG', date : new Date("")},
    {name : '_dragon2.JPG', date : new Date("")},
    {name : '_dragon3.JPG', date : new Date("")},
    {name : '_dragon4.JPG', date : new Date("")},
    {name : '_dragon5.JPG', date : new Date("")},
    {name : '_dragonfin.JPG', date : new Date("")},
    {name : '_holdingskull.jpg', date : new Date("")},
    {name : '_holeinchest.JPG', date : new Date("")},
    {name : '_jellyfish.JPG', date : new Date("")},
    {name : '_manyhandswithfins.JPG', date : new Date("")},
    {name : '_moose.JPG', date : new Date("")},
    {name : '_noeyesmanyhands.JPG', date : new Date("")},
    {name : '_octopushands.JPG', date : new Date("")},
    {name : '_octopusmall.JPG', date : new Date("")},
    {name : '_ouroborus.JPG', date : new Date("")},
    {name : '_riderthreeheads.jpg', date : new Date("")},
    {name : '_seaserpent.JPG', date : new Date("")},
    {name : '_seaserpent2.jpg', date : new Date("")},
    {name : '_sharphands.jpg', date : new Date("")},
    {name : '_skulloctopus.JPG', date : new Date("")},
    {name : '_slicedhead.JPG', date : new Date("")},
    {name : '_swordgirl.jpg', date : new Date("")},
    {name : '_tentacle.JPG', date : new Date("")},
    {name : '_threeeyeshorns.JPG', date : new Date("")},
    {name : '_tvhead.JPG', date : new Date("")},
    {name : '_wiseowl.JPG', date : new Date("")},
    {name : 'bird_eggs.jpg', date : new Date("2019-01-01")},
    {name : 'computer_head.jpg', date : new Date("2024-02-17")},
    {name : 'fairy.jpg', date : new Date("2013-01-01")},
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