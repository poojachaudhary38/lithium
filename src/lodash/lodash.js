const _ = require("lodash"); 
function lodash() {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    console.log(_.chunk(months, 4));

    const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(_.tail(oddNum, 9));

    const Num = [2, 5, 6, 2, 3];
    console.log(_.union(Num));

    const keyValue = [
        ["horror", "the shining"],
        ["drama", "titanic"],
        ["thriller", "shutter island"],
        ["fantacy", "pans labyrinth"],
    ];
    console.log(_.fromPairs(keyValue));
}

module.exports.lodash = lodash;
