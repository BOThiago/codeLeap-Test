import React, { useState } from "react";
import Trash from "../assets/Vector.svg";
import EditBox from "../assets/EditButton/bx_bx-edit.svg";
import Button from "./Button";
import Title from "./Title";

export interface Task {
    title: string;
    content: string;
}

interface TaskItemProps {
    task: Task;
    onEdit: () => void;
    onDelete: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onEdit,
    onDelete,
}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const handleDelete = () => {
        onDelete();
        closeDeleteModal();
    };

    return (
        <li
            style={{
                gap: "8px",
                padding: "8px 0 16px 0",
            }}
        >
            <div
                style={{
                    flexDirection: "row",
                    width: "100%",
                    backgroundColor: "#7695EC",
                    justifyContent: "space-between",
                    padding: "24px",
                    borderRadius: "16px 16px 0px 0px",
                }}
                className="flex items-center"
            >
                <div
                    style={{
                        color: "white",
                        fontSize: "22px",
                        fontWeight: "700",
                    }}
                >
                    <h3>{task.title}</h3>
                </div>
                <div
                    style={{
                        gap: "8px",
                        display: "flex",
                    }}
                >
                    <button onClick={onEdit}>
                        <img src={EditBox} alt="Edit" />
                    </button>
                    <button onClick={openDeleteModal}>
                        <img src={Trash} alt="Delete" />
                    </button>
                </div>
            </div>
            <div
                style={{
                    border: "1px solid #999999",
                    borderRadius: "0px 0 16px 16px",
                    padding: "24px",
                    textAlign: "justify",
                }}
            >
                <p>{task.content}</p>
            </div>
            {isDeleteModalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "24px",
                            borderRadius: "8px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                            gap: "16px",
                            width: "35%",
                        }}
                    >
                        <Title
                            text={"Are you sure you want to delete this item?"}
                        />
                        <div
                            style={{
                                display: "flex",
                                gap: "16px",
                                justifyContent: "end",
                                flexDirection: "row",
                            }}
                        >
                            <Button
                                onClick={closeDeleteModal}
                                cancel={true}
                                text="Cancel"
                            />
                            <Button
                                onClick={handleDelete}
                                color="red"
                                text="Delete"
                            />
                        </div>
                    </div>
                </div>
            )}
        </li>
    );
};
