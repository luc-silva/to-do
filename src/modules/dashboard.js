import { user } from "./classes.js";

let dashboardTabDomManipuladtor = (function () {
	let createDivElement = () => document.createElement("div");

	function createDashboard() {
		let dashboard = createDivElement();
		dashboard.id = "dashboard-display";

		let dashboardGreetings = createDivElement();
		dashboardGreetings.id = "dashboard-greetings";
		dashboardGreetings.innerHTML = `
        <h2>Hello there, user</h2>
        <p>Currently, you have...</p>`;

		let dashboardStatusDisplay = createDivElement();
		dashboardStatusDisplay.id = "dashboard-status-display";

		let completedTaskDisplay = createDivElement();
		completedTaskDisplay.id = "dashboard-tasks-completed-display";
		completedTaskDisplay.innerHTML = `                     
        Tasks Completed:
        <div class="completed-value-container">
            <div class="completed-value">${user.completedTodo()}</div>
            <div class="total-value">of ${user.todoArray.length}</div>
        </div>`;

		let completedProjectDisplay = createDivElement();
		completedProjectDisplay.id = "dashboard-projects-completed-display";
		completedProjectDisplay.innerHTML = `
        Project Completed:
        <div class="completed-value-container">
            <div class="completed-value">${user.completedProjects()}</div>
            <div class="total-value">of ${user.projectArray.length}</div>
        </div>`;

		dashboardStatusDisplay.append(
			completedTaskDisplay,
			completedProjectDisplay
		);
		dashboard.append(dashboardGreetings, dashboardStatusDisplay);

		return dashboard;
	}

	return { createDivElement, createDashboard };
})();

function initializeDashboard() {
	let dashboardBtns = document.querySelectorAll(".dashboard-button");
	let thisTabBtn = document.querySelector("#dashboard-btn");

	dashboardBtns.forEach((button) => {
		button.style.backgroundColor = "whitesmoke";
		button.style.padding = "0.5rem 2rem";
		button.style.color = "rgb(50, 50, 50)"
	});
	thisTabBtn.style.backgroundColor = "white";
	thisTabBtn.style.padding = "0.5rem 3rem";
	thisTabBtn.style.color = "rgb(100, 175, 225)"

	let dashboardTab = document.querySelector("#todo-display");
	dashboardTab.textContent = "";

	dashboardTab.append(dashboardTabDomManipuladtor.createDashboard());
}

export default initializeDashboard;
