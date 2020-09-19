import { default as appDI } from "../../AppDI"

class TodoComponent {
    constructor(parent) {
        this.todoInteractor = appDI.todoInteractor();
        this.createView(parent);
    }

    createView(parent) {
        const container = document.createElement("div");
        parent.appendChild(container)
        
        this.todoInput = document.createElement("input");
        container.appendChild(this.todoInput)

        this.addTodoButton = document.createElement("button")
        this.addTodoButton.innerHTML = "Add"
    }
}