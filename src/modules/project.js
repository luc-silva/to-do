import { user, Project, ProjectTask } from "./classes.js";

let projectTabDomManipulator = (function () {
	let createDivElement = () => document.createElement("div");

	let createStrongElement = (text = "") => {
		let element = document.createElement("strong");
		element.textContent = text;
		return element;
	};

	//popups
	let backgroundPopup = document.querySelector("#popup-background");
	backgroundPopup.addEventListener("click", removeBackgroundPopup);

	function removeBackgroundPopup() {
		backgroundPopup.style.display = "none";
		hideProjectCreator();
	}

	let createProjectBtn = document.querySelector("#create-project-btn");

	function hideProjectCreator() {
		let projectCreator = document.querySelector("#project-creator");
		projectCreator.style.display = "none";
		createProjectBtn.removeEventListener("click", validateProjectInput);
	}

	function showProjectCreator() {
		let projectCreator = document.querySelector("#project-creator");
		projectCreator.style.display = "flex";
		backgroundPopup.style.display = "block";
		createProjectBtn.addEventListener("click", validateProjectInput);
	}

	let addProjectBtn = document.querySelector("#add-project-btn");
	addProjectBtn.addEventListener("click", showProjectCreator);

	//Structures
	function createProjectContainer(
		projectTitle,
		projectTasks,
		projectDeadline,
		projectDetails,
		projectId
	) {
		let projectContainer = createDivElement();
		projectContainer.classList.add("project-container");
		projectContainer.setAttribute("data-project", projectId);

		let projectNameElement = createDivElement();
		projectNameElement.classList.add("project-name");
		projectNameElement.innerHTML = `Project: <strong>${projectTitle}</strong>`;

		let projectInfoElement = createDivElement();
		projectInfoElement.classList.add("project-info");
		projectInfoElement.innerHTML = `                    
		<div>
			Tasks completed: <strong>1/${projectTasks.length}</strong>
		</div>
		<div>
			Deadline: <strong>${projectDeadline}</strong> (<em>45 days</em>)
		</div>`;

		let holder = createDivElement();
		holder.append(projectNameElement, projectInfoElement);

		let projectDetailsElement = createDivElement();
		projectDetailsElement.classList.add("project-details");
		projectDetailsElement.innerHTML = `
		<strong>Details:</strong> 
		${projectDetails}
		`;

		//
		let projectTasksElement = createDivElement();
		projectTasksElement.classList.add("project-tasks");
		projectTasksElement.append(createStrongElement("Tasks:"));

		let projectTasksContainer = createDivElement();
		projectTasksContainer.classList.add("project-tasks-container");

		projectTasks.forEach((task) => {
			projectTasksContainer.append(
				projectTasksCreator(task.title, task.priority)
			);
		});

		projectTasksElement.append(projectTasksContainer);

		projectContainer.append(
			holder,
			projectDetailsElement,
			projectTasksElement
		);

		return projectContainer;
	}

	function projectTasksCreator(task, priority) {
		let card = createDivElement();
		card.classList.add("project-task-card");
		// card.setAttribute("data-project-index", index);

		let mainInfoElement = createDivElement();
		mainInfoElement.classList.add("project-task-maininfo");
		mainInfoElement.innerHTML = `
		<input type="checkbox">
		<div>
			<strong>#1:</strong>
			<span>${task}</span>
		</div>
		`;

		let taskPriorityElement = createDivElement();
		taskPriorityElement.classList.add("project-task-priority");
		taskPriorityElement.innerHTML = `
		<strong>Priority</strong>
		<span>${priority}</span>
		`;

		card.append(mainInfoElement, taskPriorityElement);
		return card;
	}

	return { createProjectContainer };
})();

function validateProjectInput() {
	console.log("hi");
	let projectDescriptionInpt = document.querySelector(
		"#project-description-textarea"
	);
	let projectDeadlineInpt = document.querySelector("#project-deadline-input");
	let projectTitleInpt = document.querySelector("#project-title-input");

	user.projectArray.push(
		new Project(
			projectTitleInpt.value,
			[{ title: "teste", priority: "URGENT" }],
			projectDeadlineInpt.value,
			projectDescriptionInpt.value
		)
	);
	console.log(user);
}

function initializeProjectTab() {
	let projectTab = document.querySelector("#todo-display");
	projectTab.textContent = "";

	user.projectArray.forEach((project) => {
		projectTab.append(
			projectTabDomManipulator.createProjectContainer(
				project.title,
				project.projectTasks,
				project.deadline,
				project.description,
				project.projectId
			)
		);
	});
}

export default initializeProjectTab;
