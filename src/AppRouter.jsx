import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./Context";
import { About } from "./Context/About";
import { Provider } from "./Context/UserContext";

function AppRouter() {

    const [user, setUser] = useState(null);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                    </ul>
                </nav>
                <Provider value={value}>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                </Provider>
            </div>
        </Router>
    );
}

export default AppRouter;