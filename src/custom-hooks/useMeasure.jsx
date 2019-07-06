import { useState, useRef, useLayoutEffect } from "react";

export const useMeasure = (depns) => {
    const [rect, setRect] = useState({});

    const myRef = useRef();

    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, depns);

    return [rect, myRef];
}