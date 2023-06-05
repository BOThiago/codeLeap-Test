import React from "react";

interface TitleProps {
    text: string;
    color?: string;
}

const Title: React.FC<TitleProps> = ({ text, color }) => {
    const titleStyles = {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "22px",
        color: color || "black",
    };

    return (
        <h1 className="font-bold" style={titleStyles}>
            {text}
        </h1>
    );
};

export default Title;
