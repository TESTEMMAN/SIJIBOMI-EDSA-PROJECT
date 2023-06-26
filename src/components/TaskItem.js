import React from 'react';

function TaskItem({ task, deleteTask, completeTask }) {
  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      {!task.completed && (
        <button onClick={() => completeTask(task.id)}>Complete</button>
      )}
    </li>
  );
}

export default TaskItem;
