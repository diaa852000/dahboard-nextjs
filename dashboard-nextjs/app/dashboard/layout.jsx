'use client';

import Sidebar from "@/app/_components/sidebar"
import Navbar from "../_components/Navbar"
import { GlobalContextProvider } from "../_contexts/global"

export default function DashboardLayout({ children }) {
    return (
        <GlobalContextProvider>
            <div className="flex h-screen w-full bg-muted/40">
                <Sidebar/>
                <div className="flex flex-col flex-1 sm:gap-4 sm:p-0">
                    <Navbar />
                    <main className="px-4 flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </GlobalContextProvider>
    )
}
