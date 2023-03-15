import {useRef} from "react";

export const useFullscreen = (onFullS) => {
    const element = useRef();
    const triggerFull = () => {
        if(element.current) {
            element.current.requestFullscreen();
            if(onFullS && typeof onFullS === "function") {
                onFullS(true);
            }
        }
    }
    const exitFull = () => {
        const checkFullScreen = document.fullscreenElement;
        if(checkFullScreen !== null) {
            document.exitFullscreen();
        }
        if(onFullS && typeof onFullS === "function") {
            onFullS(false);
        }
    }
    return {element, triggerFull, exitFull};
}
