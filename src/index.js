import initializeDashboard from "./modules/dashboard.js";
import initializeProjectTab from "./modules/project.js";
import initializeTaskTab from "./modules/tasktab.js";

let todoPanel = (function () {
	initializeDashboard();

	let dashboardBtn = document.querySelector("#dashboard-btn");
	dashboardBtn.addEventListener("click", initializeDashboard);

	let projectsBtn = document.querySelector("#projects-btn");
	projectsBtn.addEventListener("click", initializeProjectTab);

	let tasksBtn = document.querySelector("#tasks-btn");
	tasksBtn.addEventListener("click", initializeTaskTab);


})();
