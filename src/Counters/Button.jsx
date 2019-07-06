import React from "react";

const Button = React.memo(({ increase }) => {
    return (<button onClick={() => increase(2)}>Increase Count</button>);
});

export default Button;