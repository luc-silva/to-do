import user from "../index";

class ProjectTask{
	constructor(title){
		this.title = title
	}
}

let projectTabDomManipulator = (function () {

	let createDivElement = () => document.createElement("div")

	let createStrongElement = () => document.createElement("strong")

	function createProjectContainer(){
		let projectContainer = createDivElement()
		projectContainer.id = "project-container"

		let projectNameElement = createDivElement()
		projectNameElement.classList.add("project-name")
		projectNameElement.textContent = `Project: <strong>Polar Hunting</strong>`

		let projectInfoElement = createDivElement()
		projectInfoElement.classList.add("project-info")
		projectInfoElement.textContent = `                    
		<div>
			Tasks completed: <strong>1/30</strong>
		</div>
		<div>
			Deadline: <strong>12-32-4124</strong> (<em>45 days</em>)
		</div>`

		let projectDetailsElement = createDivElement()
		projectDetailsElement.classList.add("project-details")
		projectDetailsElement.textContent = `Lorem. `

		//
		let projectTasksElement = createDivElement()
		projectTasksElement.classList.add("project-tasks")
		projectTasksElement.append(createStrongElement().textContent = "text")

		let projectTasksContainer = createDivElement()
		projectTasksContainer.classList.add("project-tasks-container")

		//user.projectArray.projectTaskArray.foreEach((task, index )=>{
			//projectTasksContainer.append(projectTasksCreator(task.title, task.priority, index))
		//})

		//
	}
	function projectTasksCreator(task, priority, index){
		let card = createDivElement()
		card.classList.add("project-task-card")
		card.setAttribute("data-project-index", index)

		let mainInfoElement = createDivElement()
		mainInfo.classList.add("project-task-maininfo")
		mainInfoElement.textContent = `
		<input type="checkbox">
		<div>
			<strong>Task #${index + 1}:</strong>
			<span>${task}</span>
		</div>
		`

		let taskPriorityElement = createDivElement()
		taskPriorityElement.classList.add("project-task-priority")
		taskPriorityElement.textContent = `
		<strong>Priority</strong>
		<span>${priority}</span>
		`
	}


	return { createProjectContainer };
})();

function initializeProjectTab() {
	let projectTab = document.querySelector("#todo-display");
	projectTab.textContent = "";

	projectTab.append(projectTabDomManipulator.createProjectContainer());
}

export default initializeProjectTab;
