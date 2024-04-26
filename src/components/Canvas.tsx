import React, { useEffect, useMemo, useState } from "react";
import { clearCanvas, drawStroke, setCanvasSize, getCanvasWithContext } from "@/utils/CanvasUtil";
import { useCanvas } from "@/hooks/useCanvas";
import { beginStroke, updateStroke, currentStrokeSelector, endStroke } from "@/module/reducers/currentStroke";
import { useDispatch, useSelector } from "react-redux";
import { modeSelector } from "@/module/reducers/currentMode";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;


export const Canvas: React.FC = () => {
    const canvasRef = useCanvas();
    useEffect(() => {
        const { canvas, context } = getCanvasWithContext(canvasRef);
        if (!canvas || !context) {
            return;
        }
        setCanvasSize(canvas, WIDTH, HEIGHT);

        context.lineJoin = "round";
        context.lineCap = "round";
        context.lineWidth = 5;
        context.strokeStyle = "black";

        clearCanvas(canvas);
    }, []);

    const currentStroke = useSelector(currentStrokeSelector);

    const [isDrawing, setIsDrawing] = useState(false);

    const currentMode = useSelector(modeSelector)
    useEffect(() => {
        const { canvas, context } = getCanvasWithContext(canvasRef);
        if (!context || !canvas) {
            return;
        }
        context.globalCompositeOperation = !currentMode.type ? "destination-out" : "source-over";
        // context.strokeStyle = currentMode.type ? "black" : "white";
        context.lineWidth = currentMode.type ? 5 : 30;
    }, [currentMode])
    const dispatch = useDispatch();
    useMemo(() => {
        const { context } = getCanvasWithContext(canvasRef);
        if (!context) {
            return;
        }
        requestAnimationFrame(() =>
            drawStroke(context, currentStroke.points, currentStroke.color)
        );
    }, [currentStroke]);

    const startDrawing = ({
        nativeEvent,
    }: React.MouseEvent<HTMLCanvasElement>) => {
        const { offsetX, offsetY } = nativeEvent;
        setIsDrawing(true);
        dispatch(beginStroke({ x: offsetX, y: offsetY }));
    };
    const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        dispatch(updateStroke({ x: offsetX, y: offsetY }));
    }
    const endDrawing = () => {
        setIsDrawing(false);
        dispatch(endStroke());

    }


    return (
        <canvas
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={endDrawing}
            ref={canvasRef}

        />
    )
}