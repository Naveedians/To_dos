#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? ",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo? ",
            default: false,
        },
    ]);
    const { TODO, addmore } = answers;
    // console.log(answers)
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
        console.log(todos);
    }
    else {
        console.log("Your todo list is ready");
    }
}
;
if (todos.length > 0) {
    console.log("Your todo List:");
    todos.forEach((todo) => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
;
