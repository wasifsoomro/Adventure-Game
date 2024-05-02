#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Create a classs with three property and a constructor for reusable
class Player {
    name;
    hp = 100;
    drinks = 3;
    constructor(name) {
        this.name = name;
    }
    // create a method of hpdecrease for player
    hpDecrease() {
        let hp = this.hp - 25;
        this.hp = hp;
    }
    // create a method of hpdecrease for player
    hpIncease() {
        let drinks = this.drinks - 1;
        this.drinks = drinks;
        this.hp = 100;
    }
}
class Oponent {
    name;
    hp = 100;
    constructor(name) {
        this.name = name;
    }
    // create a method of hpdecrease for oponent
    hpDecrease() {
        let hp = this.hp - 25;
        this.hp = hp;
    }
}
//use inquirer to get input from player
let player = await inquirer.prompt({
    type: "input",
    name: "Name",
    message: "Write Your Name"
});
// use inquirer to get input from user to select their oponent
let oponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Oponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// now declare a two varaible for both classes and store class to start working
let newPlayer = new Player(player.Name);
let newOponent = new Oponent(oponent.select);
console.log(`${player.Name} VS ${oponent.select}`);
//write my all functionality in do while loop it make my game user freindly it works untill one the player win
do {
    //create condition if player select skeleton as their oponent then functionalities works according it
    if (oponent.select === "Skeleton") {
        let feature = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Oponent",
            choices: ["Attack", "Drink Portion", "Run for your life"]
        });
        /*create a random number and apply condition on the basis of number generate this decides the result of game
        and this built in function and make my game more interesting */
        let number = Math.floor(Math.random() * 2);
        if (feature.option === "Attack") {
            // create a condition if generated number > 0 it decreae player hp
            if (number > 0) {
                newPlayer.hpDecrease();
                console.log(chalk.red.bold(`${newPlayer.name} Your hp is ${newPlayer.hp}`));
                console.log(chalk.green.bold(`${newOponent.name} Your hp is ${newOponent.hp}`));
                //create a condition that when hp become 0 of palyer then oponent win
                if (newPlayer.hp === 0) {
                    console.log(chalk.bold.red(`${newOponent.name} Win`));
                    process.exit();
                }
            }
            // create a condition if generated number <= 0 it decreae oponent hp
            if (number <= 0) {
                newOponent.hpDecrease();
                console.log(chalk.red.bold(`${newOponent.name} Your hp is ${newOponent.hp}`));
                console.log(chalk.green.bold(`${newPlayer.name} Your hp is ${newPlayer.hp}`));
                //create a condition that when hp become 0 of oponent then player win
                if (newOponent.hp === 0) {
                    console.log(chalk.bold.cyan(`${newPlayer.name} Win`));
                    process.exit();
                }
            }
        }
        //create a condition on drink portion when user drinks it refilled my hp 
        if (feature.option === "Drink Portion") {
            if (newPlayer.drinks === newPlayer.drinks && newPlayer.drinks != 0) {
                newPlayer.hpIncease();
                console.log(chalk.green.bold(`You take a drink portion now your hp is ${newPlayer.hp}`));
                console.log(`Remainings Drinks portion are ${newPlayer.drinks}`);
            }
            else if (newPlayer.drinks === 0) {
                console.log("You have no drink portion");
            }
        }
        //if player runs away then oponent win
        if (feature.option === "Run for your life") {
            console.log("You loose a game");
            process.exit();
        }
    }
    // All above condition & functionalities i apply on the other oponent so it works on skeleton as assassin and zombie
    if (oponent.select === "Assassin") {
        let feature = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Oponent",
            choices: ["Atack", "Drink Portion", "Run for your life"]
        });
        let number = Math.floor(Math.random() * 2);
        if (feature.option === "Atack") {
            if (number > 0) {
                newPlayer.hpDecrease();
                console.log(chalk.red.bold(`${newPlayer.name} Your hp is ${newPlayer.hp}`));
                console.log(chalk.green.bold(`${newOponent.name} Your hp is ${newOponent.hp}`));
                if (newPlayer.hp === 0) {
                    console.log(chalk.bold.red(`${newOponent.name} Win`));
                    process.exit();
                }
            }
            if (number <= 0) {
                newOponent.hpDecrease();
                console.log(chalk.red.bold(`${newOponent.name} Your hp is ${newOponent.hp}`));
                console.log(chalk.green.bold(`${newPlayer.name} Your hp is ${newPlayer.hp}`));
                if (newOponent.hp === 0) {
                    console.log(chalk.bold.cyan(`${newPlayer.name} Win`));
                    process.exit();
                }
            }
        }
        if (feature.option === "Drink Portion") {
            if (newPlayer.drinks === newPlayer.drinks && newPlayer.drinks != 0) {
                newPlayer.hpIncease();
                console.log(chalk.green.bold(`You take a drink portion now your hp is ${newPlayer.hp}`));
                console.log(`Remainings Drinks portion are ${newPlayer.drinks}`);
            }
            else if (newPlayer.drinks === 0) {
                console.log("You have no drink portion");
            }
        }
        if (feature.option === "Run for your life") {
            console.log("You loose a game");
            process.exit();
        }
    }
    if (oponent.select === "Zombie") {
        let feature = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Select your Oponent",
            choices: ["Atack", "Drink Portion", "Run for your life"]
        });
        let number = Math.floor(Math.random() * 2);
        if (feature.option === "Atack") {
            if (number > 0) {
                newPlayer.hpDecrease();
                console.log(chalk.red.bold(`${newPlayer.name} Your hp is ${newPlayer.hp}`));
                console.log(chalk.green.bold(`${newOponent.name} Your hp is ${newOponent.hp}`));
                if (newPlayer.hp === 0) {
                    console.log(chalk.bold.red(`${newOponent.name} Win`));
                    process.exit();
                }
            }
            if (number <= 0) {
                newOponent.hpDecrease();
                console.log(chalk.red.bold(`${newOponent.name} Your hp is ${newOponent.hp}`));
                console.log(chalk.green.bold(`${newPlayer.name} Your hp is ${newPlayer.hp}`));
                if (newOponent.hp === 0) {
                    console.log(chalk.bold.cyan(`${newPlayer.name} Win`));
                    process.exit();
                }
            }
        }
        if (feature.option === "Drink Portion") {
            if (newPlayer.drinks === newPlayer.drinks && newPlayer.drinks != 0) {
                newPlayer.hpIncease();
                console.log(chalk.green.bold(`You take a drink portion now your hp is ${newPlayer.hp}`));
                console.log(`Remainings Drinks portion are ${newPlayer.drinks}`);
            }
            else if (newPlayer.drinks === 0) {
                console.log("You have no drink portion");
            }
        }
        if (feature.option === "Run for your life") {
            console.log("You loose a game");
            process.exit();
        }
    }
} while (true);
