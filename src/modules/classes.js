let user = (function () {
	let todoArray = [];
	let projectArray = [];

	function completedTasks(index) {
		let tasks = projectArray[index].projectTasks;
		let total = 0;
		tasks.forEach((task) => {
			if (task.checked) {
				total++;
			}
		});
		return total;
	}
	function completedTodo() {
		let total = 0;
		todoArray.forEach((todo) => {
			if (todo.check) {
				total++;
			}
		});
		return total;
	}

	function completedProjects() {
		let total = 0;
		projectArray.forEach((project) => {
			if (project.status == "Completed") {
				total++;
			}
		});
		return total;
	}
	return { todoArray, projectArray, completedTasks, completedProjects };
})();

class Project {
	constructor(title, projectTasks, deadline, description) {
		this.title = title;
		this.projectTasks = projectTasks;
		this.deadline = deadline;
		this.description = description;
		this.dateCreated = new Date();
		this.projectId = user.projectArray.length;
		this.status = "Unfinished";
	}
}

class ProjectTask {
	constructor(title, priority, checked) {
		this.title = title;
		this.priority = priority;
		this.checked = checked;
	}

	get checked() {
		return this._checked;
	}
	set checked(value) {
		this._checked = value;
	}

	get title() {
		return this._title;
	}
	set title(title) {
		this._title = title;
	}

	get priority() {
		return this._priority;
	}
	set priority(priority) {
		this._priority = priority;
	}
}

class Todo {
	constructor(task, description, deadline, priority, check) {
		this.task = task;
		this.description = description;
		this.deadline = deadline;
		this.priority = priority;
		this.check = check;
	}
	dateCreated = new Date();

	get dateCreated() {
		return this._dateCreated;
	}

	get deadline() {
		return this._deadline;
	}
	set deadline(newDate) {
		this._deadline = newDate;
	}

	get priority() {
		return this._priority;
	}
	set priority(newPriority) {
		this._priority = newPriority;
	}

	get check() {
		return this._check;
	}
	set check(value) {
		this._check = value;
	}
}

export { user, Project, ProjectTask, Todo };
