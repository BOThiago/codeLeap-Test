import React, { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    y?: string;
    x?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, y, x }) => {
    if (!isOpen) {
        return null;
    }

    const modalStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        justifyContent: "left",
        borderRadius: "8px",
        height: !y ? "205px" : y,
        width: !x ? "500px" : x,
        padding: "20px",
        border: "1px solid #CCCCCC",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "50",
    };

    const modalContent = {
        gap: "6px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "left",
    };

    return (
        <div style={{ ...modalStyle, backgroundColor: "#FFFFFF" }}>
            <div
                className="modal-overlay bg-black opacity-50 absolute inset-0"
                onClick={onClose}
            ></div>
            <div style={modalContent}>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
