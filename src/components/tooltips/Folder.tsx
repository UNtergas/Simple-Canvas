import React from "react";
import Icon from "@assets/Folder.svg";

export const FolderIcon: React.FC = () => {
    return (
        <button className="focus:outline-none">
            <img
                src={Icon}
                alt="pencil icon"
                className="h-30 w-30 transition-transform duration-300 ease-in-out hover:scale-150"
            />
        </button>
    )
}