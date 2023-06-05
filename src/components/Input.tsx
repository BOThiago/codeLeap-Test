import React from "react";

interface InputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string;
    text?: boolean;
}

const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeHolder,
    text,
}) => {
    const InputStyle = {
        backgroundColor: "transparent",
        borderRadius: "6px",
        height: text ? "74px" : "32px",
        width: "100%",
        fontWeight: "Light 300",
        fontSize: "16px",
        cursor: "pointer",
        fontFamily: "'Roboto', sans-serif",
        color: "#000000",
        border: "1px solid #777777",
        padding: "10px",
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChange}
                style={InputStyle}
                placeholder={placeHolder}
            />
        </div>
    );
};

export default Input;
