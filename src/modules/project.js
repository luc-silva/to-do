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
		document.querySelector("#error-popup").style.display = "none";
		hideProjectCreator();
	}

	let createProjectBtn = document.querySelector("#create-project-btn");
	let projectTaskAddBtn = document.querySelector("#project-taskcard-btn");

	function hideProjectCreator() {
		let projectCreator = document.querySelector("#project-creator");
		projectCreator.style.display = "none";

		createProjectBtn.removeEventListener("click", validateProjectInput);

		projectTaskAddBtn.removeEventListener(
			"click",
			validateProjectTasksInput
		);
	}

	//
	function clearProjectInputs() {
		document.querySelector("#project-title-input").value = "";
		document.querySelector("#project-deadline-input").value = "";
		document.querySelector("#already-added-tasks").textContent = "";
		document.querySelector("#project-description-textarea").value = "";
		document.querySelector("#project-task-card-creator-inpt").value = "";
		temporaryArray = [];
	}

	function createProjectTabAddButton() {
		let addProject = document.createElement("button");
		addProject.addEventListener("click", showProjectCreator);
		addProject.id = "add-project-btn";
		addProject.textContent = "Add Project";
		addProject.classList.add("action-button");

		let projectBtnPanel = createDivElement();
		projectBtnPanel.id = "project-button-panel";
		projectBtnPanel.append(addProject);

		return projectBtnPanel;
	}

	let temporaryArray = [];
	function showProjectCreator() {
		let projectCreator = document.querySelector("#project-creator");
		projectCreator.style.display = "flex";
		backgroundPopup.style.display = "block";

		clearProjectInputs();

		projectTaskAddBtn.addEventListener("click", validateProjectTasksInput);

		createProjectBtn.addEventListener("click", validateProjectInput);
	}

	function validateProjectTasksInput() {
		let projectTaskTitleInput = document.querySelector(
			"#project-task-card-creator-inpt"
		).value;
		let projectTaskDeadlineInput = document.querySelector(
			"#project-task-card-creator-select"
		).value;

		if (
			projectTaskTitleInput != "" &&
			projectTaskDeadlineInput != "" &&
			!checkDuplicated(temporaryArray, projectTaskTitleInput)
		) {
			temporaryArray.push(
				new ProjectTask(
					projectTaskTitleInput,
					projectTaskDeadlineInput,
					false
				)
			);
			renderProjectTasks(temporaryArray);
		}
	}

	function renderProjectTasks(array) {
		let alreadyAddedTasksContainer = document.querySelector(
			"#already-added-tasks"
		);
		alreadyAddedTasksContainer.textContent = "";
		array.forEach((task, index) => {
			let div = createDivElement();
			div.setAttribute("data-project-task-index", index);
			div.innerHTML = `
			<strong>${task.title}</strong>
			<div class="project-taskcard-container">
				<div>Priority: <strong>${task.priority}</strong></div>
				<button class="project-taskcard-delete-btn">Delete</button>
			</div>
			`;
			div.classList.add("already-added-taskcard", "reveal-animation");

			div.addEventListener("click", (event) => {
				if (event.target.classList == "project-taskcard-delete-btn") {
					let newArray = [];
					let cardIndex = div.dataset.projectTaskIndex;

					temporaryArray.forEach((task) => {
						if (task != temporaryArray[cardIndex]) {
							newArray.push(task);
						}
					});
					temporaryArray = [...newArray];
				}
				renderProjectTasks(temporaryArray);
			});

			alreadyAddedTasksContainer.append(div);
		});
	}

	//Structures
	function createProjectContainer(
		projectTitle,
		projectTasks,
		projectDeadline,
		projectDetails,
		projectId,
		projectStatus
	) {
		let projectContainer = createDivElement();
		projectContainer.classList.add("project-container", "reveal-animation");
		projectContainer.setAttribute("data-project", projectId);

		let projectNameElement = createDivElement();
		projectNameElement.classList.add("project-name");
		projectNameElement.innerHTML = `Project: <strong>${projectTitle}</strong>`;

		let projectInfoElement = createDivElement();
		projectInfoElement.classList.add("project-info");
		projectInfoElement.innerHTML = `                    
		<div>
			Tasks completed: <strong>${user.completedTasks(projectId)}/${
			projectTasks.length
		}</strong>
		</div>
		<div>
			Deadline: <strong>${projectDeadline}</strong> Status: <strong>${projectStatus}</strong>
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

		projectTasks.forEach((task, index) => {
			projectTasksContainer.append(
				projectTasksCreator(
					task.title,
					task.priority,
					task.checked,
					index
				)
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

	function projectTasksCreator(task, priority, checked, index) {
		let card = createDivElement();
		card.classList.add("project-task-card");
		card.setAttribute("data-project-task-index", index);

		let mainInfoElement = createDivElement();
		mainInfoElement.classList.add("project-task-maininfo");
		if (checked) {
			mainInfoElement.innerHTML = `
			<input type="checkbox" checked>
			<div>
				<strong>#1:</strong>
				<span>${task}</span>
			</div>
			`;
		} else {
			mainInfoElement.innerHTML = `
			<input type="checkbox">
			<div>
				<strong>#1:</strong>
				<span>${task}</span>
			</div>
			`;
		}

		let taskPriorityElement = createDivElement();
		taskPriorityElement.classList.add("project-task-priority");
		taskPriorityElement.innerHTML = `
		<strong>Priority</strong>
		<span>${priority}</span>
		`;

		card.append(mainInfoElement, taskPriorityElement);
		return card;
	}

	function checkDuplicated(array, value) {
		let duplicated = false;
		array.forEach((item) => {
			if (item.title == value) {
				duplicated = true;
			}
		});
		return duplicated;
	}

	function validateProjectInput() {
		let projectTitleInpt = document.querySelector(
			"#project-title-input"
		).value;
		let projectDeadlineInpt = document.querySelector(
			"#project-deadline-input"
		).value;
		let projectDescriptionInpt = document.querySelector(
			"#project-description-textarea"
		).value;

		if (
			projectDeadlineInpt != "" &&
			projectTitleInpt != "" &&
			temporaryArray.length > 0 &&
			!checkDuplicated(user.projectArray, projectTitleInpt)
		) {
			user.projectArray.push(
				new Project(
					projectTitleInpt,
					[...temporaryArray],
					projectDeadlineInpt,
					projectDescriptionInpt
				)
			);
			initializeProjectTab();
			removeBackgroundPopup();
		} else {
			showErrorPopup();
		}

		function showErrorPopup() {
			document.querySelector("#error-popup").style.display = "flex";
		}
	}

	return {
		createProjectContainer,
		createProjectTabAddButton,
		createDivElement,
	};
})();

function checkTaskStatus(project) {
	let projectTasks = user.projectArray[project].projectTasks;
	let total = 0;
	projectTasks.forEach((task) => {
		if (task.checked) {
			total++;
		}
	});
	if (total == projectTasks.length) {
		user.projectArray[project].status = "Completed";
	}
}

function initializeProjectTab() {
	let dashboardBtns = document.querySelectorAll(".dashboard-button");
	let thisTabBtn = document.querySelector("#projects-btn");

	dashboardBtns.forEach((button) => {
		button.style.backgroundColor = "whitesmoke";
		button.style.padding = "0.5rem 2rem";
		button.style.color = "rgb(50, 50, 50)";
	});
	thisTabBtn.style.backgroundColor = "white";
	thisTabBtn.style.padding = "0.5rem 3rem";
	thisTabBtn.style.color = "rgb(100, 175, 225)";

	let projectTab = document.querySelector("#todo-display");
	projectTab.textContent = "";

	let addProject = projectTabDomManipulator.createProjectTabAddButton();

	let projectDisplay = projectTabDomManipulator.createDivElement();
	projectDisplay.id = "project-display";
	projectDisplay.textContent = "";

	user.projectArray.forEach((project) => {
		projectDisplay.append(
			projectTabDomManipulator.createProjectContainer(
				project.title,
				project.projectTasks,
				project.deadline,
				project.description,
				project.projectId,
				project.status
			)
		);
	});

	projectTab.append(addProject, projectDisplay);

	let projects = document.querySelectorAll(".project-container");
	projects.forEach((project) => {
		let thisProject = project.dataset.project;
		let taskCard = project.querySelectorAll(".project-task-card");
		taskCard.forEach((card) => {
			card.addEventListener("click", () => {
				let cardIndex = card.dataset.projectTaskIndex;

				let checkbox = card.querySelector("input[type='checkbox']");
				if (checkbox.checked == true) {
					checkbox.checked = false;
					user.projectArray[thisProject].projectTasks[
						cardIndex
					].checked = false;
				} else {
					checkbox.checked = true;
					user.projectArray[thisProject].projectTasks[
						cardIndex
					].checked = true;
				}
				checkTaskStatus(thisProject);
				initializeProjectTab();
			});
		});
	});
}

export default initializeProjectTab;
