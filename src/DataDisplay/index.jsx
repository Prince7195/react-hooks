import React, { useState, useMemo } from "react";
import { useFetch } from "../custom-hooks/useFetch";

function computeLongestWord(arr) {
    if (!arr) {
        return "";
    }

    console.log("Computing longest word");
    let longestWord = "";
    JSON.parse(arr).forEach(sentence => {
        sentence.split(" ").forEach(word => {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        });
    });
    return longestWord;
}

const DataDisplay = () => {
    const [count, setCount] = useState(0);
    const { data } = useFetch(`https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json`);

    const longestWord = useMemo(() => computeLongestWord(data), [data]);

    return (
        <div>
            <h2>Data Display:</h2>
            <button onClick={(c) => setCount(count + 1)}>Increase</button>
            Count: {count}
            <br />
            {longestWord}
        </div>
    );
}

export default DataDisplay;