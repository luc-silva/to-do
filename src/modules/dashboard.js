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
            <div class="completed-value">40</div>
            <div class="total-value">of 42</div>
        </div>`;

		let completedProjectDisplay = createDivElement();
		completedProjectDisplay.id = "dashboard-projects-completed-display";
		completedProjectDisplay.innerHTML = `
        Project Completed:
        <div class="completed-value-container">
            <div class="completed-value">40</div>
            <div class="total-value">of 42</div>
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
	let dashboardTab = document.querySelector("#todo-display");
	dashboardTab.textContent = "";

	dashboardTab.append(dashboardTabDomManipuladtor.createDashboard());
}

export default initializeDashboard;
