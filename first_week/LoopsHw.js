//Do this on Repl in case you write an infinite loop.

//Write a for loop that logs 0-15;
//Write a for loop that counts from 15-0
//Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.
//Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.
//Write a loop that logs all even numbers from 0-700.
//Write a loop that logs all odd numbers from 0-700.
//Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and always log ("happy new year! The year is now ????). You should also log if something was invented that year. For example when i = 1902 the code should log "happy new year! The year is now 1902." AND “the teddy bear is invented!”

//Write a for loop that logs 0-15;
//for (let i = 0; i < 16; i++) {
//    console.log(i);
//}

//Write a for loop that counts from 15-0
for (let i = 15; i >= 0; i--) {
    console.log(i);
}

//Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.
let laps = 0
for (let i = 1; i <= 10; i++) {
    laps = i
    console.log("That's another lap", i);
}

//Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.
let age = 0
for (let i = 0; i <= 100; i++) {
   age = i
   if (i == age) {
        console.log("Happy birthday!", "You are", i, "Years old")
    } else {
        console.log("Age doesn't match")
    }
}

//Write a loop that logs all even numbers from 0-700.
for (let i = 0; i <= 700; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}

//Write a loop that logs all odd numbers from 0-700.
for (let i = 0; i <= 700; i++) {
    if (i%2 === 1) {
        console.log(i);
    }
}

//Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and 
//always log ("happy new year! The year is now ????). You should also log if something was invented 
//that year. For example when i = 1902 the code should log "happy new year! The year is now 1902." 
//AND “the teddy bear is invented!”



for (let i = 1900; i <= 1949; i++) {
    if (i !== 1900 && i !== 1902 && i !== 1910 && i !== 1913 && i !== 1918 && i !== 1923 && i !== 1935 && i !== 1938 && i !== 1943) {
        console.log("Happy New Year! The year is now " + i + ".");
    } else if (i === 1900) {
        console.log("Happy New Year! The year is now 1900. The zepplin is invented!");
    } else if (i === 1902) {
        console.log("Happy New Year! The year is now 1902. The teddy bear is invented!");
    } else if (i === 1910) {
        console.log("Happy New Year! The year is now 1910. The talking motion picture is invented!");
    } else if (i === 1913) {
        console.log("Happy New Year! The year is now 1913. The bra is invented!");
    } else if (i === 1918) {
        console.log("Happy New Year! The year is now 1918. The fortune cookie is invented!");
    } else if (i === 1923) {
        console.log("Happy New Year! The year is now 1923. The traffic signal is invented!");
    } else if (i === 1935) {
        console.log("Happy New Year! The year is now 1935. The radar is invented!");
    } else if (i === 1938) {
        console.log("Happy New Year! The year is now 1938. The ballpoint pen is invented!");
    } else if (i === 1943) {
        console.log("Happy New Year! The year is now 1943. The slinky is invented!");
    }
}