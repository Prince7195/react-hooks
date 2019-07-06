import { useRef } from "react";

export const useCountRender = () => {
    const renders = useRef(0);
    console.log("Renders: ", renders.current++);
}