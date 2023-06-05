import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

interface TaskFormProps {
    title: string;
    content: string;
    editIndex: number | null;
    onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAddTask: () => void;
    editTask?: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({
    title,
    content,
    editIndex,
    onTitleChange,
    onContentChange,
    onAddTask,
    editTask,
}) => {
    const isEditing = editIndex !== null;
    const buttonText = isEditing ? "Editar" : "Criar";
    const isDisabled = !title || !content;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "16px",
                width: "100%",
                border: "1px solid #999999",
            }}
        >
            <h1
                style={{
                    fontWeight: "700",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "22px",
                }}
            >
                {editTask ? "Edit Task" : "What's on your mind?"}
            </h1>
            <h2
                style={{
                    fontWeight: "500",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "16px",
                    width: "100%",
                }}
            >
                Title
            </h2>
            <Input
                placeHolder="Hello world"
                value={title}
                onChange={onTitleChange}
                text={false}
            />
            <h2
                style={{
                    fontWeight: "500",
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: "16px",
                    width: "100%",
                }}
            >
                Content
            </h2>
            <Input
                placeHolder="Content here"
                value={content}
                onChange={onContentChange}
                text={true}
            />
            <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                    onClick={onAddTask}
                    text={buttonText}
                    color={editTask ? "green" : isDisabled ? "gray" : "#7695EC"}
                    disabled={editTask ? !isDisabled : isDisabled}
                />
            </div>
        </div>
    );
};

export default TaskForm;
