// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; 

export default function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    );
}
