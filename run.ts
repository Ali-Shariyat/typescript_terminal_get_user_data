const readline = require("readline");
const fs = require("node:fs");

let userData: { name?: string | null; phoneNumber?: string | null } = {
  name: null,
  phoneNumber: null,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const getUserData = (message: string, callBack: Function) => {
  rl.question(message, function (answer) {
    callBack(answer);
  });
};

getUserData("Enter your name:", (res) => {
  userData.name = res;
  getUserData("Enter your phone number:", (phoneNumber) => {
    userData.phoneNumber = phoneNumber;

    fs.writeFile("user.json", JSON.stringify(userData, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file", err);
      }
    });
    console.log("your data save on user.json");
    rl.close();
  });
});
