'use client';

import { useState } from "react";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return <>
        <header>
            <nav>
                <img onClick={openSidebar} className="size-10 p-1 rounded-full hover:bg-gray-100/25 transition cursor-pointer" src="/assets/menu.svg" alt="menu" />
            </nav>
        </header>
        <div onClick={closeSidebar} className={`fixed z-10 w-screen h-screen bg-black/50 ${sidebarOpen ? "block" : "hidden"}`}></div>
        <div className={`h-screen transition fixed top-0 left-0 backdrop-blur-md z-10 w-2/3 lg:w-2/5 bg-black/70 flex flex-col ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="top-0 left-0 w-full h-20 flex flex-row items-center px-4">
                <img onClick={closeSidebar} className="size-10 p-1 rounded-full hover:bg-gray-100/25 transition cursor-pointer" src="/assets/close.svg" alt="menu" />
            </div>
        </div>
    </>
}