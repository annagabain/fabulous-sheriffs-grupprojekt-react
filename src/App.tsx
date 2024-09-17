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
        </>
    );
}
