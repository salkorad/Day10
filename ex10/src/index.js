function myFunction() {
    var myMusic = {
      001: {  artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: {
            1: "CD",
            2: "8T",
            3: "LP"
        },
        gold: true
    },
      002: {
        1: "MP",
        2: "EP",
        3: "DAT"
    }
};
return myMusic;
}
console.log(myFunction()[1]);
module.exports = myFunction;