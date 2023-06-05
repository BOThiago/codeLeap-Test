import React, { useState } from "react";
import Title from "../components/Title";
import { TaskItem } from "../components/Tasks";
import { Task } from "../components/Tasks";
import TaskForm from "../components/TaskForm";

function Network() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setContent(event.target.value);
    };

    const handleAddTask = () => {
        if (title && content) {
            const newTask: Task = { title, content };

            if (editIndex !== null) {
                // Editing existing task
                const updatedTaskList = [...taskList];
                updatedTaskList[editIndex] = newTask;
                setTaskList(updatedTaskList);
                setEditIndex(null);
            } else {
                // Adding new task
                setTaskList([...taskList, newTask]);
            }

            setTitle("");
            setContent("");
        }
    };

    const handleEditTask = (index: number) => {
        const taskToEdit = taskList[index];
        setTitle(taskToEdit.title);
        setContent(taskToEdit.content);
        setEditIndex(index);
    };

    const handleDeleteTask = (index: number) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };

    return (
        <div
            style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    backgroundColor: "#7695EC",
                    width: "800px",
                    justifyContent: "start",
                    display: "flex",
                    padding: "16px",
                }}
            >
                <div style={{ marginLeft: "1rem" }}>
                    <Title text="CodeLeap Network" color="white" />
                </div>
            </div>
            <div
                style={{
                    width: "800px",
                    backgroundColor: "white",
                    padding: "24px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                    className="flex flex-col justify-center items-center"
                >
                    <TaskForm
                        title={title}
                        content={content}
                        editIndex={editIndex}
                        onTitleChange={handleTitleChange}
                        onContentChange={handleContentChange}
                        onAddTask={handleAddTask}
                    />
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <ul style={{ width: "100%" }}>
                            {taskList.map((task, index) => (
                                <TaskItem
                                    key={index}
                                    task={task}
                                    onEdit={() => handleEditTask(index)}
                                    onDelete={() => handleDeleteTask(index)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Network;
