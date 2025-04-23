const DigitalArtDatesArray = [
    {name : 'backofdoordrawing.png', date : new Date("2023-10-07")},
    {name : 'bestbug.png', date : new Date("2023-04-06")},
    {name : 'bug.png', date : new Date("2017-08-20")},
    {name : 'castlebuilders.png', date : new Date("2022-02-23")},
    {name : 'castleofrats.png', date : new Date("2023-08-13")},
    {name : 'CLUE_final.png', date : new Date("2019-04-23")},
    {name : 'deer.png', date : new Date("2023-04-22")},
    {name : 'deermonster.png', date: new Date("2017-09-20")},
    {name : 'deermonsterthing.png', date: new Date("2017-08-20")},
    {name : 'despite_everything.png', date: new Date("2024-08-22")},
    {name : 'dias_architects.png', date : new Date("2022-12-05")},
    {name : 'ELEMENTAL_final.png', date : new Date("2019-04-23")},
    {name : 'emotionalwellbeing.png', date : new Date("2023-04-08")},
    {name : 'eyeman.png', date : new Date("2024-02-25")},
    {name : 'frontofdoordrawing.png', date : new Date("2023-10-06")},
    {name : 'GERM_final.png', date : new Date("2019-04-20")},
    {name : 'guitarman.png', date : new Date("2023-07-08")},
    {name : 'handman.png', date : new Date("2022-06-13")},
    {name : 'hawk_and_hare.png', date : new Date("2024-08-21")},
    {name : 'IMG_4925.png', date : new Date("2018-10-13")},
    {name : 'IMG_7860.png', date : new Date("2018-08-15")},
    {name : 'IMG_7971.png', date : new Date("2018-08-29")},
    {name : 'ink_first_art.png', date : new Date("2022-03-09")},
    {name : 'janitor.png', date : new Date("2019-07-04")},
    {name : 'landscape.png', date : new Date("2023-07-07")},
    {name : 'long_pig.png', date : new Date("2022-09-03")},
    {name : 'reindeer.png', date : new Date("2022-12-20")},
    {name : 'SPIRIT_final.png', date : new Date("2019-04-25")},
    {name : 'spookycommission.png', date : new Date("2022-05-28")},
    {name : 'sundragon.png', date : new Date("2022-02-20")},
    {name : 'TheLibrary.png', date : new Date("2022-05-21")},
    {name : 'torture.png', date : new Date("2021-05-27")},
    {name : 'to_print_tllc_art.png', date : new Date("2020-09-15")},
    {name : 'warrior.png', date : new Date("2019-06-26")},
    {name : 'wholeheartshrinks.png', date : new Date("2022-06-13")},
    {name : 'youascendant.png', date: new Date("2022-02-23")}
];

// sort the array of objects by date so that new images are first
const sortByDate = (a, b) => {
    return b.date - a.date;
};
DigitalArtDatesArray.sort(sortByDate);

// make new array of just image names
const DigitalArtNames = DigitalArtDatesArray.map((x) => x.name);

export default DigitalArtNames;

