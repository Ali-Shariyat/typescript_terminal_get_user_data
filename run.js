var readline = require("readline");
var fs = require("node:fs");
var userData = {
    name: null,
    phoneNumber: null,
};
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var getUserData = function (message, callBack) {
    rl.question(message, function (answer) {
        callBack(answer);
    });
};
getUserData("Enter your name:", function (res) {
    userData.name = res;
    getUserData("Enter your phone number:", function (phoneNumber) {
        userData.phoneNumber = phoneNumber;
        fs.writeFile("user.json", JSON.stringify(userData, null, 2), function (err) {
            if (err) {
                console.error("Error writing to file", err);
            }
        });
        console.log("your data save on user.json");
        rl.close();
    });
});
