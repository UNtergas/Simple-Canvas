import { RefObject } from 'react';
import { Point } from '@/types'

export const drawStroke = (
    context: CanvasRenderingContext2D,
    points: Point[],
    color: string
) => {
    if (!points.length) {
        return;
    }
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    points.forEach((point) => {
        context.lineTo(point.x, point.y);
        context.stroke();
    });
    context.closePath();
};

export const clearCanvas = (canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d');
    if (!context) return;
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);

}

export const setCanvasSize = (canvas: HTMLCanvasElement, width: number, height: number) => {
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.getContext('2d')?.scale(1, 1);
}
export const getCanvasWithContext = (canvasRef: RefObject<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    return { canvas, context };
};

