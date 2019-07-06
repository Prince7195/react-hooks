import React from "react";
import { useCountRender } from "../custom-hooks/useCountRender";

const Favorite = React.memo(({ n, increase }) => {
    useCountRender();
    return (<button onClick={() => increase(n)}>{n}</button>);
});

export default Favorite;