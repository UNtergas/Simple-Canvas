export type Stroke = {
    color: string;
    points: Point[];
}
export type Point = {
    x: number;
    y: number;
}

export type RootState = {
    currentStroke: Stroke;
    stroke: Stroke[];
    currentMode: Mode;
}

export type Mode = {
    type: boolean;
}