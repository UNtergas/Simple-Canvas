import { setStrokeColor } from "@/module/reducers/currentStroke";
import React from "react";
import { useDispatch } from "react-redux";
const COLOR = [
    "#FF0202",
    "#FFE500",
    "#24FF00",
    "#00D1FF",
    "#0550C1",
    "#8F00FF",
    "#000"
]

export const ColorPalette: React.FC = () => {
    const dispatch = useDispatch();
    const handleClick = (color: string) => {
        dispatch(setStrokeColor(color))
    }

    return (
        <div className="flex space-x-5 justify-between items-center w-3/5 h-4/6 bg-[#53524E] rounded-full mr-6">
            {COLOR.map((color: string) => (
                <div
                    key={color}
                    onClick={() => {
                        handleClick(color);
                    }}
                    className="rounded-full w-16 h-16  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150"
                    style={{ backgroundColor: color }}></div>
            ))}
        </div>
    )
}