/* const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function changeStatus(task, status) {
  list[task] = status;
}

function addTask(task) {
  list[task] = "To Do";
}

function deleteTask(task) {
  delete list[task];
}

let count = 0;

function sortTasks(status) {
  console.log(status);
  for (let task in list) {
    if (list[task] === status) {
      console.log(`"${task}"`);
      count++;
    }
  }
  if (count === 0) {
    console.log("-");
  }
  count = 0;
}

function showList() {
  sortTasks("To Do");
  sortTasks("In Progress");
  sortTasks("Done");
}

addTask("clean a room");
deleteTask("clean a room");
addTask("have a walk");
addTask("have a shower");
addTask("go to the shop");
changeStatus("go to the shop", "In Progress");
changeStatus("have a walk", "Done");

showList(); */


const list = [];
let count = 0;

function addTask(task, priority = 'low') {
  list.push({
    id: count++,
    name: task,
    status: "To Do",
    priority
  });
}

function deleteTask(id) {
  let taskIndex = list.findIndex(item => item.id === id);
  list.splice(taskIndex,1);
}
function changeStatus(id, status) {
  let taskIndex = list.findIndex((item) => item.id === id);
  list[taskIndex].status = status;
}
function changePriority(id, priority) {
  let taskIndex = list.findIndex((item) => item.id === id);
  list[taskIndex].priority = priority;
}



console.log(list);
addTask('do homework');
addTask("go to the shop");
addTask("read the book", "high");
console.log(list);
deleteTask(1);
console.log(list);
changeStatus(2, "In Progress");
console.log(list);
changePriority(0, 'high');
console.log(list);


