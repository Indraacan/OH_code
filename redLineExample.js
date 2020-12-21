    const readline = require('readline');

        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout

        });



console.log("Goverment Registry\n")
    rl.question('What is your name?', (name) => {
        rl.question('Which city do you live?', (address) => {
            rl.question('When was your birthday year?', (birthday) => {
                
            console.log(`Hello, ${name} Looks like you're ${birthday}!.  years old, and you lived in ${address} !`);
     rl.close();
    });
        });
            });