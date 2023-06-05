import React, { useState } from "react";
import TaskForm from "./TaskForm";
import { Task } from "./Tasks";

interface EditTaskFormProps {
    task: Task;
    isOpen: boolean;
    onClose: () => void;
    onEdit: (updatedTask: Task) => void;
}

export const EditTaskForm: React.FC<EditTaskFormProps> = ({
    task,
    isOpen,
    onClose,
    onEdit,
}) => {
    const [title, setTitle] = useState(task.title);
    const [content, setContent] = useState(task.content);

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleSave = () => {
        onEdit({ title, content });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div>
            <TaskForm
                title={title}
                content={content}
                onTitleChange={onTitleChange}
                onContentChange={onContentChange}
                onAddTask={handleSave}
                editTask={true}
            />
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};
