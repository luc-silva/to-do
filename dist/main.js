(()=>{"use strict";let t={todoArray:[],projectArray:[]};class e{constructor(e,n,r,c,o){this.title=e,this.projectTasks=n,this.deadline=r,this.description=c,this.dateCreated=new Date,this.projectId=t.projectArray.length}}class n{constructor(t,e){this.title=t,this.priority=e}get title(){return this._title}set title(t){this._title=t}get priority(){return this._priority}set priority(t){this._priority=t}}class r{constructor(t,e,n,r,c){this.task=t,this.description=e,this.deadline=n,this.priority=r,this.check=c}dateCreated=new Date;get dateCreated(){return this._dateCreated}get deadline(){return this._deadline}set deadline(t){this._deadline=t}get priority(){return this._priority}set priority(t){this._priority=t}get check(){return this._check}set check(t){this._check=t}}let c=function(){let r=()=>document.createElement("div"),c=document.querySelector("#popup-background");function d(){c.style.display="none",document.querySelector("#project-creator").style.display="none",a.removeEventListener("click",y),i.removeEventListener("click",u)}c.addEventListener("click",d);let a=document.querySelector("#create-project-btn"),i=document.querySelector("#project-taskcard-btn"),s=[];function l(){document.querySelector("#project-creator").style.display="flex",c.style.display="block",console.log(s),document.querySelector("#project-title-input").value="",document.querySelector("#project-deadline-input").value="",document.querySelector("#already-added-tasks").textContent="",document.querySelector("#project-description-textarea").value="",document.querySelector("#project-task-card-creator-inpt").value="",s=[],i.addEventListener("click",u),a.addEventListener("click",y)}function u(){let t=document.querySelector("#project-task-card-creator-inpt").value,e=document.querySelector("#project-task-card-creator-select").value;""!=t&&""!=e&&(s.push(new n(t,e)),p(s))}function p(t){let e=document.querySelector("#already-added-tasks");e.textContent="",t.forEach(((t,n)=>{let c=r();c.setAttribute("data-project-task-index",n),c.innerHTML=`\n\t\t\t<strong>${t.title}</strong>\n\t\t\t<div class="project-taskcard-container">\n\t\t\t\t<div>Priority: <strong>${t.priority}</strong></div>\n\t\t\t\t<button class="project-taskcard-delete-btn">Delete</button>\n\t\t\t</div>\n\t\t\t`,c.classList.add("already-added-taskcard"),c.addEventListener("click",(t=>{if("project-taskcard-delete-btn"==t.target.classList){let t=[],e=c.dataset.projectTaskIndex;s.forEach((n=>{n!=s[e]&&t.push(n)})),s=[...t]}p(s)})),e.append(c)}))}function y(){let n=document.querySelector("#project-title-input").value,r=document.querySelector("#project-deadline-input").value,c=document.querySelector("#project-description-textarea").value;""!=r&&""!=n&&s.length>0&&(t.projectArray.push(new e(n,[...s],r,c)),o(),d())}return{createProjectContainer:function(t,e,n,c,o){let d=r();d.classList.add("project-container"),d.setAttribute("data-project",o);let a=r();a.classList.add("project-name"),a.innerHTML=`Project: <strong>${t}</strong>`;let i=r();i.classList.add("project-info"),i.innerHTML=`                    \n\t\t<div>\n\t\t\tTasks completed: <strong>1/${e.length}</strong>\n\t\t</div>\n\t\t<div>\n\t\t\tDeadline: <strong>${n}</strong> (<em>45 days</em>)\n\t\t</div>`;let s=r();s.append(a,i);let l=r();l.classList.add("project-details"),l.innerHTML=`\n\t\t<strong>Details:</strong> \n\t\t${c}\n\t\t`;let u=r();u.classList.add("project-tasks"),u.append(((t="")=>{let e=document.createElement("strong");return e.textContent=t,e})("Tasks:"));let p=r();return p.classList.add("project-tasks-container"),e.forEach((t=>{p.append(function(t,e){let n=r();n.classList.add("project-task-card");let c=r();c.classList.add("project-task-maininfo"),c.innerHTML=`\n\t\t<input type="checkbox">\n\t\t<div>\n\t\t\t<strong>#1:</strong>\n\t\t\t<span>${t}</span>\n\t\t</div>\n\t\t`;let o=r();return o.classList.add("project-task-priority"),o.innerHTML=`\n\t\t<strong>Priority</strong>\n\t\t<span>${e}</span>\n\t\t`,n.append(c,o),n}(t.title,t.priority))})),u.append(p),d.append(s,l,u),d},createProjectTabAddButton:function(){let t=document.createElement("button");t.id="add-project-btn",t.addEventListener("click",l),t.textContent="Add Project";let e=r();return e.id="project-button-panel",e.append(t),e},createDivElement:r}}();function o(){let e=document.querySelector("#todo-display");e.textContent="";let n=c.createProjectTabAddButton(),r=c.createDivElement();r.id="project-display",r.textContent="",t.projectArray.forEach((t=>{r.append(c.createProjectContainer(t.title,t.projectTasks,t.deadline,t.description,t.projectId))})),e.append(n,r)}const d=o,a=function(){let e=document.querySelector("#task-title-input"),n=document.querySelector("#task-deadline-input"),c=document.querySelector("#task-description-textarea"),o=document.querySelector("#priority-input");""!=e.value&&""!=n.value?(""==c.value?t.todoArray.push(new r(e.value,"None",n.value,o.value,!1)):t.todoArray.push(new r(e.value,c.value,n.value,o.value,!1)),i.removeTaskCreatorPopup()):i.showRequiredFields(),s(),c.value="",n.value="",e.value=""};let i=function(){let t=document.querySelector("#task-creator-screen"),e=function(){return document.createElement("div")},n=document.querySelector("#popup-background");n.addEventListener("click",(()=>{r()}));let r=function(){n.style.display="none",t.style.display="none"};return{createTodoElement:function(t,n,r,c){let o=document.createElement("span");o.classList.add("todo-card"),o.setAttribute("data-index",c);let d=e();d.classList.add("card-task"),d.innerHTML=r?`\n\t\t\t<div class="card-task-container">\n\t\t\t\t<input type="checkbox" class="todo-checkbox" checked>\n\t\t\t\n\t\t\t\t<div>\n\t\t\t\t\tTask:<h3>${t}</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`:`\n\t\t\t<div class="card-task-container">\n\t\t\t\t<input type="checkbox" class="todo-checkbox">\n\t\n\t\t\t\t<div>\n\t\t\t\t\tTask:<h3>${t}</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`;let a=e();return a.classList.add("todo-card-details"),a.innerHTML=`\n        <div class="right-part">\n\t\t\t<div class="card-dealine">\n\t\t\t\t<strong>Deadline</strong>: ${n}\n\t\t\t</div>\n\n\t\t\t<div class="todo-delete-btn">\n\t\t\t\tDelete\n\t\t\t</div>\n\t\t</div>\n\t\t`,o.append(d,a),o},createTaskContainer:function(){let t=document.createElement("div");return t.id="tasks-container",t},createTaskAddBtn:function(){let c=e();c.id="tasks-button-panel";let o=document.createElement("button");return o.id="add-task-btn",o.textContent="Add task",o.addEventListener("click",(()=>{!function(){let e=document.querySelector("#add-btn"),c=document.querySelector("#close-btn");n.style.display="block",t.style.display="flex",e.addEventListener("click",a),c.addEventListener("click",(()=>{r(),e.removeEventListener("click",a)}))}()})),c.append(o),c},removeTaskCreatorPopup:r,showRequiredFields:function(){let t=document.querySelector("#task-deadline-input"),e=document.querySelector("#task-title-input");e.style.backgroundColor="rgb(245, 213, 213)",e.style.outline="red solid 1px",e.style.color="red",t.style.backgroundColor="rgb(245, 213, 213)",t.style.outline="red solid 1px",t.style.color="red"}}}();function s(){let e=document.querySelector("#todo-display");e.textContent="",e.append(i.createTaskAddBtn());let n=i.createTaskContainer();e.append(n),t.todoArray.forEach(((t,e)=>{n.append(i.createTodoElement(t.task,t.deadline,t.check,e))})),document.querySelectorAll(".todo-card").forEach((e=>{let n=e.querySelector(".todo-checkbox");e.addEventListener("click",(r=>{let c=e.dataset.index;if("todo-delete-btn"==r.target.classList){let e=t.todoArray,n=[];e.forEach(((t,r)=>{e[r]!=e[c]&&n.push(t)})),t.todoArray=[...n],s()}else 1==n.checked?n.checked=!1:n.checked=!0,console.log(n.checked),t.todoArray[c].check!=n.checked&&(t.todoArray[c].check=n.checked)}))}))}const l=s;document.querySelector("#dashboard-btn"),document.querySelector("#projects-btn").addEventListener("click",d),document.querySelector("#tasks-btn").addEventListener("click",l)})();