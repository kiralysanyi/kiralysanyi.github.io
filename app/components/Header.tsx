'use client';

import { useState } from "react";
import { getLocale, setLocale } from "../lib/locale";

const content = getLocale();

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
                <span className="ml-auto" onClick={
                    () => {
                        if (content.lang == "hu") {
                            setLocale("en")
                        } else {
                            setLocale("hu")
                        }
                    }
                    }>{content.lang}</span>
            </nav>
        </header>
        <div onClick={closeSidebar} className={`fixed z-10 w-screen h-screen bg-black/50 ${sidebarOpen ? "block" : "hidden"}`}></div>
        <div className={`sidebar ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="top-0 left-0 w-full h-20 flex flex-row items-center px-4">
                <img onClick={closeSidebar} className="size-10 p-1 rounded-full hover:bg-gray-100/25 transition cursor-pointer" src="/assets/close.svg" alt="menu" />
            </div>

            <a onClick={closeSidebar} href="#about">{content.about.title}</a>
            <a onClick={closeSidebar} href="#experience">{content.experience.title}</a>
            <a onClick={closeSidebar} href="#contact">{content.contact.title}</a>

            <p className="text-center justify-self-end mt-auto mb-3.5 text-white/20">&copy; {new Date().getFullYear()} Király Sándor. All rights reserved.</p>
        </div>
    </>
}