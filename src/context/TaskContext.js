import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]); // copiamos todos los elementos de tasks mediante [...tasks] y le agregamos el nuevo task
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks, // tasks: tasks,
        deleteTask, // deleteTask: deleteTask,     si tienen el mismo nombre podemos ponerlo solo
        createTask, // createTask: createTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
