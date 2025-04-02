import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./todo.css";
import { Navbar5 } from "../../public-com/Navbar5";
import { Footer5 } from "../../public-com/Footer5";
import { Button, useMediaQuery } from "@relume_io/relume-ui";

function Todo() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Learn React" },
    { id: "2", text: "Build a To-Do App" },
    { id: "3", text: "Implement Drag and Drop" },
  ]);
  const [newTask, setNewTask] = useState("");

  // Handle task addition
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: newTask }]);
      setNewTask("");
    }
  };

  // Handle drag & drop reordering
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(tasks);
    const [movedItem] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedItem);

    setTasks(reorderedTasks);
  };

  // Handle task removal
  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
        <Navbar5></Navbar5>
        <div className="todo-app">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
                        <div className="input-container">
                            <textarea
                                className="h-80 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black-600"
                                name="" 
                                onChange={(e) => setNewTask(e.target.value)} 
                                value={newTask} 
                                id=""
                                placeholder="Enter a new task..."
                            >
                            </textarea>
                            <Button onClick={handleAddTask} title="Subscribe" size="sm" className="block w-full rounded-md px-3.5 py-2.5 my-2 text-center text-sm font-semibold shadow-xs">
                                Add Todo
                            </Button>
                        </div>
                        <DragDropContext onDragEnd={handleDragEnd}>
                            <Droppable droppableId="tasks">
                            {(provided) => (
                                <ul className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
                                {tasks.map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div 
                                            className="relative text-sm/6 text-gray-600 ring-1 ring-gray-900/10"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <button className="absolute right-0 p-3" onClick={() => handleRemoveTask(task.id)}>❌</button>
                                            <p className="py-10 px-5 mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{task.text}</p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                            
                                            </p>
                                        </div>
                                        
                                    )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                                </ul>
                            )}
                            </Droppable>
                        </DragDropContext>
                    </dl>
                </div>
            </div>
        </div>
        <Footer5></Footer5>
    </>
  );
}

export default Todo;
