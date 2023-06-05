interface ButtonProps {
    text?: string;
    onClick?: () => void;
    color?: string;
    cancel?: boolean;
    disabled?: boolean;
}

const Button = ({ text, onClick, color, cancel, disabled }: ButtonProps) => {
    const buttonStyle = {
        backgroundColor: cancel ? "transparent" : color,
        borderRadius: "6px",
        height: "32px",
        width: "111px",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        fontFamily: "'Roboto', sans-serif",
        color: cancel ? "#000000" : "#FFFFFF",
        border: cancel ? "1px solid #000000" : "none",
    };

    return (
        <button onClick={onClick} style={buttonStyle} disabled={disabled}>
            {text || ""}
        </button>
    );
};

export default Button;
