// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

export default function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Outlet />

            
             <h1>We are the fabulous Sheriffs!</h1>

            {/*<div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div> */}
        </>
    );
}
