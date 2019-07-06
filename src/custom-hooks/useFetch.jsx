import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
    const isCurrent = useRef(true);
    const [state, setState] = useState({ data: null, loading: false });
    useEffect(() => {
        isCurrent.current = true;
        return () => {
            // called when the component is going to unmount
            isCurrent.current = false;
        }
    });
    useEffect(() => {
        setState(state => ({ ...state, loading: true }));
        fetch(url).then((res) => {
            return res.text();
        }).then((data) => {
            if (isCurrent.current) {
                setState(state => ({ data, loading: false }));
            }
        })
    }, [url]);
    return state;
}