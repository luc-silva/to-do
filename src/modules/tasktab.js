let user = (function () {
	let todoArray = [];

	return { todoArray };
})();

class Todo {
	constructor(task, description, deadline) {
		this.task = task;
		this.description = description;
		this.deadline = deadline;
	}

	get deadline() {
		return this._deadline;
	}
	set deadline(date) {
		this._deadline = date;
	}
}

const validateInput = function () {
	let taskValue = document.querySelector("#task-title-input");
	let deadlineValue = document.querySelector("#task-deadline-input");
	let descriptionValue = document.querySelector("#task-description-textarea");

	if (taskValue.value != "" && deadlineValue.value != "") {
		if (descriptionValue.value == "") {
			user.todoArray.push(
				new Todo(taskValue.value, "None", deadlineValue.value)
			);
			console.log(taskValue.value.toString());
		} else {
			user.todoArray.push(
				new Todo(
					taskValue.value,
					descriptionValue.value,
					deadlineValue.value
				)
			);
		}
		console.log("ok");
		tasktabDomManipulator.removeTaskCreatorPopup();
	} else {
		console.log("not ok");
		tasktabDomManipulator.showRequiredFields();
	}
	
	initializeTaskTab()
	descriptionValue.value = "";
	deadlineValue.value = "";
	taskValue.value = "";
};

let tasktabDomManipulator = (function () {
	let taskCreatorScreen = document.querySelector("#task-creator-screen");

	let createDiv = function () {
		return document.createElement("div");
	};
	let createBtn = function () {
		return document.createElement("button");
	};

	//Add task popups
	let backgroundPopup = document.querySelector("#popup-background");
	backgroundPopup.addEventListener("click", () => {
		removeTaskCreatorPopup();
	});

	let showTaskCreatorPopup = function () {
		let addCardBtn = document.querySelector("#add-btn");
		let closeCardBtn = document.querySelector("#close-btn");

		backgroundPopup.style.display = "block";
		taskCreatorScreen.style.display = "flex";

		addCardBtn.addEventListener("click", validateInput);

		closeCardBtn.addEventListener("click", () => {
			removeTaskCreatorPopup();
			addCardBtn.removeEventListener("click", validateInput);
		});
	};

	let removeTaskCreatorPopup = function () {
		backgroundPopup.style.display = "none";
		taskCreatorScreen.style.display = "none";
	};
	let showRequiredFields = function () {
		let deadlineInputDiv = document.querySelector("#task-deadline-input");
		let taskInputDiv = document.querySelector("#task-title-input");

		taskInputDiv.style.backgroundColor = "rgb(245, 213, 213)";
		taskInputDiv.style.outline = "red solid 1px";
		taskInputDiv.style.color = "red";

		deadlineInputDiv.style.backgroundColor = "rgb(245, 213, 213)";
		deadlineInputDiv.style.outline = "red solid 1px";
		deadlineInputDiv.style.color = "red";
	};

	//structure functions
	let createTaskAddBtn = function () {
		let div = createDiv();
		div.id = "tasks-button-panel";

		let button = createBtn();
		button.id = "add-task-btn";
		button.textContent = "Add task";

		button.addEventListener("click", () => {
			showTaskCreatorPopup();
		});

		div.append(button);
		return div;
	};

	let createTaskContainer = function () {
		let tasksContainer = document.createElement("div");
		tasksContainer.id = "tasks-container";

		return tasksContainer;
	};

	let createTodoElement = function (task, deadline) {
		let todoCard = document.createElement("span");
		todoCard.classList.add("todo-card");

		let cardTask = createDiv();
		cardTask.classList.add("card-task");
		cardTask.innerHTML = `Task:<h3>${task}</h3>`;

		let todoCardDetails = createDiv();
		todoCardDetails.classList.add("todo-card-details");
		todoCardDetails.innerHTML = `
        <div class="card-dealine"><strong>Deadline</strong>: ${deadline}</div>
        <div class="card-details-btn">Details</div>`;

		todoCard.append(cardTask, todoCardDetails);

		return todoCard;
	};

	return {
		createTodoElement,
		createTaskContainer,
		createTaskAddBtn,
		removeTaskCreatorPopup,
		showRequiredFields,
	};
})();

function initializeTaskTab() {
	let tasktab = document.querySelector("#todo-display");
	tasktab.textContent = "";
	//func para criar botoes

	tasktab.append(tasktabDomManipulator.createTaskAddBtn());

	let tasksContainer = tasktabDomManipulator.createTaskContainer();
	tasktab.append(tasksContainer);

	user.todoArray.forEach((todo) => {
		tasksContainer.append(
			tasktabDomManipulator.createTodoElement(todo.task, todo.deadline)
		);
	});
}

export default initializeTaskTab;
