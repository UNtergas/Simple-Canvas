import React from "react";
import { PencilIcon } from "./tooltips/PencilIcon";
import { EraserIcon } from "./tooltips/EraserIcon";
import { TrashCan } from "./tooltips/TrashCan";

import { clearCanvas, getCanvasWithContext } from "@/utils/CanvasUtil";
import { useCanvas } from "@/hooks/useCanvas";

import { useSelector } from "react-redux";
import { currentStrokeSelector } from "@/module/reducers/currentStroke";
export const Tooltip: React.FC = () => {
    const canvasRef = useCanvas();
    const currentStroke = useSelector(currentStrokeSelector);
    const currentColor = currentStroke.color;
    const clear = () => {
        const { canvas } = getCanvasWithContext(canvasRef);
        if (!canvas) {
            return;
        }
        clearCanvas(canvas);
    }
    return (
        <div className="flex space-x-10 justify-between ml-24 mr-10 ">
            <div className="mt-2 rounded-full w-16 h-16" style={{ backgroundColor: currentColor }}></div>
            <PencilIcon />
            <EraserIcon />
            <TrashCan callback={clear} />
        </div>
    )
}
