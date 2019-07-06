import React, { useRef } from "react";
import { useForm } from "../custom-hooks/useForm";

const Form = () => {
    const [state, handelState] = useForm({ email: "", password: "" }); // custom Hook    

    const inputRef = useRef();

    // useLayoutEffect(() => {
    //     console.log(inputRef.current.getBoundingClientRect());
    // });

    return (
        <>
            <div className="form">
                <div>
                    <label htmlFor="email">Email: </label>
                    <input ref={inputRef} type="email" name="email" id="email" value={state.email} onChange={handelState} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={state.password} onChange={handelState} />
                </div>
                <div>
                    {
                        `${state.email} - ${state.password}`
                    }
                </div>
            </div>
            <br />
            <button onClick={() => { inputRef.current.focus() }} >Focus Email</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => { inputRef.current.value = "gmail@gmail.com" }} >Update Email</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => { inputRef.current.value = "" }} >Reset Email</button>
        </>
    );
}

export default Form;