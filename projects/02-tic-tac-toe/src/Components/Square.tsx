import React from "react";

interface SquareProps
{
    children: React.ReactNode;
    updateBoard: () => void;
    index: number
}

const Square: React.FC<SquareProps> = ({children, updateBoard, index}) =>
{
    return(
        <div className="square" key={index} onClick={updateBoard}>
            <span className="cell__content">
                {children}
            </span>
        </div>
    );
}

export default Square;