// I know this is ugly, but sorting them using file properties might not work on linux
const AnimationDatesArray = [
    {name : 'backyard.mp4', date : new Date("2023-10-07")},
    {name : 'ink_second_art.mp4', date : new Date("2022-04-23")}
];

// sort the array of objects by date so that new images are first
const sortByDate = (a, b) => {
    return b.date - a.date;
};
AnimationDatesArray.sort(sortByDate);

// make new array of just image names
const AnimationNames = AnimationDatesArray.map((x) => x.name);

export default AnimationNames;