#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    hp = 100;
    drinks = 3;
    constructor(name) {
        this.name = name;
    }
    hpDecrease() {
        let hp = this.hp - 25;
        this.hp = hp;
    }
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
    hpDecrease() {
        let hp = this.hp - 25;
        this.hp = hp;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "Name",
    message: "Write Your Name"
});
let oponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your Oponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let newPlayer = new Player(player.Name);
let newOponent = new Oponent(oponent.select);
console.log(`${player.Name} VS ${oponent.select}`);
do {
    if (oponent.select === "Skeleton") {
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
