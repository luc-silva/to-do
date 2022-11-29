let user = (function () {
	let todoArray = [];
	let projectArray = [];

	return { todoArray, projectArray };
})();

class Project {
	constructor(title, projectTasks, deadline, description, dateCreated) {
		this.title = title;
		this.projectTasks = projectTasks;
		this.deadline = deadline;
		this.description = description;
		this.dateCreated = new Date();
		this.projectId = user.projectArray.length;
	}

	get title() {
		return this._title;
	}
	get projectTasks() {
		return this._projectTasks;
	}
	get deadline() {
		return this._deadline;
	}
	get description() {
		return this._description;
	}
	get projectId() {
		return this._projectId;
	}
}

class ProjectTask {
	constructor(title, priority) {
		this.title = title;
		this.priority = priority;
	}

	get title() {
		return this._title;
	}
	get priority() {
		return this._priority;
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
