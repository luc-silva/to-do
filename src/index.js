import initializeTasksTab from "./modules/tasktab.js"

let todoPanel = function(){
    let dashboardBtn = document.querySelector("dashboard-btn")
    let projectsBtn = document.querySelector("projects-btn")


    let tasksBtn = document.querySelector("tasks-btn")
    tasksBtn.addEventListener("click", initializeTasksTab)
}