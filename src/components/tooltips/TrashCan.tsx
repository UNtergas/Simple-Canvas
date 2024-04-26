import React from "react";
import Icon from "@assets/trashcan 1.svg";

interface TrashCanProps {
    callback: () => void;
}
export const TrashCan: React.FC<TrashCanProps> = ({ callback }) => {
    return (
        <button className="focus:outline-none" onClick={callback}>
            <img
                src={Icon}
                alt="pencil icon"
                className="h-16 w-16 transition-transform duration-300 ease-in-out hover:scale-150"
            />
        </button>
    )
}