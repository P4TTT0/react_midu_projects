import React from "react";

interface SquareProps
{
    children: React.ReactNode;
    updateBoard?: () => void;
    isSelected?: boolean
}

const Square: React.FC<SquareProps> = ({children, updateBoard, isSelected = false}) =>
{
    const className = `square ${isSelected ? 'is-selected' : ''}`
    return(
        <div className={className} onClick={updateBoard}>
            <span className="cell__content">
                {children}
            </span>
        </div>
    );
}

export default Square;