import React from "react";
import Icon from "@assets/pencil 1.svg";
import { useDispatch } from "react-redux";
import { setMode } from "@/module/reducers/currentMode";

export const PencilIcon: React.FC = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setMode({ type: true }))
    }

    return (
        <button className="focus:outline-none" onClick={handleClick}>
            <img
                src={Icon}
                alt="pencil icon"
                className="h-30 w-30 transition-transform duration-300 ease-in-out hover:scale-150"
            />
        </button>
    )
}