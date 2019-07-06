import React, { useEffect, useState, useRef } from "react";
import { useFetch } from "../custom-hooks/useFetch";
import { useMeasure } from "../custom-hooks/useMeasure";

const Quotation = () => {
    const [count, setCount] = useState(() =>
        JSON.parse(localStorage.getItem("count")) || 0
    );
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    const [rect, h5Ref] = useMeasure([data]);

    return (
        <div>
            <h2>Number Quotation's:</h2>
            <div style={{ display: "flex" }}>
                <h5 ref={h5Ref}>{loading ? "loading..." : data}</h5>
            </div>
            <pre>{JSON.stringify(rect, null,2)}</pre>
            <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        </div>
    );
}

export default Quotation;