import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import"./App.css";
function App() {
  const [tasks, setTasks] = useState([]);

  // Function to handle adding new tasks
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to handle deleting tasks
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to handle marking tasks as completed
  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
