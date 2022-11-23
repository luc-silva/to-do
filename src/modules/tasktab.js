let tasktabDomManipulator = (function(){
    let createDiv = function(){
        return document.createElement("div")
    }
    
    let createTodoElement = function(){
        let todoCard = document.createElement("span")
        todoCard.classList.add("todo-card")

        let cardTask = createDiv()
        cardTask.classList.add("card-task")
        cardTask.innerHTML = 'Task:<h3>Brush my Tooth</h3>'

        let todoCardDetails = createDiv()
        todoCardDetails.classList.add("todo-card-details")
        todoCardDetails.innerHTML = `
        <div class="card-dealine"><strong>Deadline</strong>: 21/32/3213</div>
        <div class="card-details-btn">Details</div>`

        todoCard.append(cardTask, todoCardDetails)

        return todoCard

    }
    showTaskCreatorScreen = function(){
        
    }

    return {createTodoElement}
})()

let createTab = (function (){
    let background = document.querySelector("#popup-background")
    background.addEventListener("click", () => {
        background.style.display = "none"
    })

    let addTaskBtn = document.querySelector("#add-task-btn")
    addTaskBtn.addEventListener("click",() => {
        background.style.display = "block"
        showTaskCreatorScreen()
    })

    //jogar no dom mani
    let todoDisplay = document.querySelector("#todo-display")
    let todosArray = [1, 2, 3, 4, 5, 6]
    todosArray.forEach(todo => {
        console.log(todo)
        todoDisplay.appendChild(tasktabDomManipulator.createTodoElement())
    })

})()



function initializeTaskTab(){
    let mainScreen = document.querySelector("todo-display")
    mainScreen.appendChild()
}

export default initializeTaskTab;