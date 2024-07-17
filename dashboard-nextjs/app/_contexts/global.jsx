import { createContext, useContext, useState } from "react";

const globalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);
    const openSidebar = () => setIsSidebarOpen(true);

    return (
        <globalContext.Provider
            value={{
                isSidebarOpen,
                closeSidebar,
                openSidebar,
                toggleSidebar
            }}
        >
            {children}
        </globalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(globalContext);
}