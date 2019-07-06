import React, { useState, useCallback } from "react";
import Button from "./Button";
import Favorite from "./Favorite";

const Counters = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback((n) => {
        setCount((count) => count + n);
    }, [setCount]);

    const favoriteNumbers = [3,5,7,11];

    return (<>
        <Button increase={increment} />
        <br />
        Count: {count}
        <br/>
        {
            favoriteNumbers.map(n => <Favorite n={n} increase={increment} key={n} />)
        }
    </>);
}

export default Counters;