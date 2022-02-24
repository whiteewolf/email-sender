const fs = require("fs")
const rawdata = fs.readFileSync('./accounts.json')
const data = JSON.parse(rawdata)

console.log(data)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your email? : ', function(sender) {
    rl.question('Who do you want to send this to ? (Please provide email) : ', function (email) {
        rl.question('Input your message : ', function (msg) {
            let obj = [];
            data.push({
              email: email,
              sender: sender,
              message: msg,
              date: new Date()
                      })
            fs.writeFile('./accounts.json', JSON.stringify(data), (err) => {})
            rl.close();
        });
    });
});
rl.on('close', function () {
  process.exit(0);
});
