import React, { useState } from "react";
import CreateTaskInput from "./CreateTaskInput";
import tasks from "../tasks";
import TaskList from "../TaskList/TaskList";

const Form = () => {
  const [taskValue, getTaskValue] = useState("");
  let tasks2 = tasks;
  const [tasksArray, newTasks] = useState(tasks2);
  const handleInputTaskChange = (event) => {
    getTaskValue(event.target.value);
  };
  const [idCount, updateIdCount] = useState(1);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateIdCount(idCount + 1);
      tasks.push({ task: taskValue, id: idCount });
      getTaskValue("")
      console.log(tasks)
    }
  };
  const handleDelete = (taskId) => {
    newTasks(
      tasks.splice(
        tasks.findIndex((task) => task.id == taskId.target.id),
        1
      )
    );
  };


  const handleEdit = (taskId) => {
    newTasks(
      tasks.findIndex((task) => task.id == taskId.target.id)
      console.log("🚀 ~ file: Form.js:36 ~ handleEdit ~ task", taskId.target.id);
    )
  }
  
  
  return (
    <div>
      <CreateTaskInput
        className="task-input "
        type="text"
        placeholder="What do you plan to do?"
        value={taskValue}
        onChange={handleInputTaskChange}
        onKeyDown={handleKeyDown}
        id={idCount}
      />
      <TaskList className="task-box" tasks={tasks} onDelete={handleDelete} onEdit={handleEdit}></TaskList>
    </div>
  );
};

export default Form;
