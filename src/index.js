import initializeProjectTab from "./modules/project.js"
import initializeTaskTab from "./modules/tasktab.js"

let todoPanel = (function(){
    let dashboardBtn = document.querySelector("#dashboard-btn")
    
    let projectsBtn = document.querySelector("#projects-btn")
    projectsBtn.addEventListener("click", initializeProjectTab)


    let tasksBtn = document.querySelector("#tasks-btn")
    tasksBtn.addEventListener("click", initializeTaskTab)

})()