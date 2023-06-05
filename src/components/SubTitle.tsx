import React from "react";

interface SubTitleProps {
    text: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
    const titleStyles = {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "16px",
        fontWeight: "400",
    };

    return (
        <h1 className="font-semibold" style={titleStyles}>
            {text}
        </h1>
    );
};

export default SubTitle;
