const getInfo = {
    name: "Lithium",
    week: "W3D5",
    topic: "todays node js topic -- How to create module and export it",
};

function getBatchInfo() {
    console.log(
        `Batch Name ${getInfo.name} , Current Day ${getInfo.week} , ${getInfo.topic}`
    );
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    console.log(day);
    console.log(month);
    console.log(year);
}
module.exports.getBatchInfo = getBatchInfo;