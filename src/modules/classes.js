let user = (function () {
	let todoArray = [];
	let projectArray = [];

	return { todoArray };
})();

class Project {
	constructor(title, description, dateCreated) {
		this.title = title;
		this.description = description;
		this.dateCreated = new Date();
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
