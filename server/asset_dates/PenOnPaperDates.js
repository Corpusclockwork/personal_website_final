const PenOnPaperDatesArray = [
    {name : 'bird_eggs.jpg', date : new Date("2019-01-01")},
    {name : 'computer_head.jpg', date : new Date("2024-02-17")},
    {name : 'fairy.jpg', date : new Date("2013-01-01")},
    {name : 'father.jpg', date : new Date("2024-07-11")},
    {name : 'forest_creature.jpg', date : new Date("2023-07-21")},
    {name : 'good_parent.jpg', date : new Date("2024-01-01")},
    {name : 'heavenly.jpg', date : new Date("2024-02-22")},
    {name : 'IMG-20250213-WA0009.jpg', date : new Date("")},
    {name : 'IMG-20250213-WA0012.jpg', date : new Date("")},
    {name : 'IMG-20250213-WA0013.jpg', date : new Date("")},
    {name : 'IMG-20250213-WA0015.jpg', date : new Date("")},
    {name : 'IMG-20250213-WA0017.jpg', date : new Date("")},
    {name : 'IMG-20250213-WA0018.jpg', date : new Date("")},
    {name : 'IMG-20250213-WA0019.jpg', date : new Date("")},
    {name : 'IMG-20250213-WA0025.jpg', date : new Date("")},
    {name : 'IMG-20250213-WA0026.jpg', date : new Date("")},
    {name : 'IMG_3156.JPG', date : new Date("")},
    {name : 'IMG_3198.JPG', date : new Date("")},
    {name : 'IMG_3200.JPG', date : new Date("")},
    {name : 'IMG_3218.JPG', date : new Date("")},
    {name : 'IMG_3280.JPG', date : new Date("")},
    {name : 'IMG_3323.JPG', date : new Date("")},
    {name : 'IMG_3325.JPG', date : new Date("")},
    {name : 'IMG_3405.JPG', date : new Date("")},
    {name : 'IMG_3428.JPG', date : new Date("")},
    {name : 'IMG_3645.JPG', date : new Date("")},
    {name : 'IMG_4716.JPG', date : new Date("")},
    {name : 'IMG_4816.JPG', date : new Date("")},
    {name : 'IMG_5011.JPG', date : new Date("")},
    {name : 'IMG_6381.JPG', date : new Date("")},
    {name : 'IMG_6392.JPG', date : new Date("")},
    {name : 'IMG_6547.JPG', date : new Date("")},
    {name : 'IMG_6549.JPG', date : new Date("")},
    {name : 'IMG_6551.JPG', date : new Date("")},
    {name : 'IMG_6641.JPG', date : new Date("")},
    {name : 'IMG_6663.JPG', date : new Date("")},
    {name : 'IMG_6693.JPG', date : new Date("")},
    {name : 'IMG_6732.JPG', date : new Date("")},
    {name : 'IMG_6868.JPG', date : new Date("")},
    {name : 'IMG_6912.JPG', date : new Date("")},
    {name : 'IMG_7056.JPG', date : new Date("")},
    {name : 'IMG_7156.JPG', date : new Date("")},
    {name : 'IMG_7161.JPG', date : new Date("")},
    {name : 'IMG_7263.JPG', date : new Date("")},
    {name : 'IMG_7482.JPG', date : new Date("")},
    {name : 'IMG_8081.JPG', date : new Date("")},
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