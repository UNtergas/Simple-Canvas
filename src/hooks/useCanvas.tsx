import {
    createContext,
    PropsWithChildren,
    useRef,
    RefObject,
    useContext,
} from "react";

export const CanvasContext = createContext<RefObject<HTMLCanvasElement>>(
    {} as RefObject<HTMLCanvasElement>
);

// This provider stores the reference to the canvas and provides it to the React tree
export const CanvasProvider = ({ children }: PropsWithChildren<object>) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return (
        <CanvasContext.Provider value={canvasRef} >
            {children}
        </CanvasContext.Provider>
    );
};

export const useCanvas = () => {
    const context = useContext(CanvasContext);

    if (context === undefined) {
        // This will help catch mistakes where the hook is used outside of the provider's scope
        throw new Error('useCanvas must be used within a CanvasProvider');
    }

    return context;
};
