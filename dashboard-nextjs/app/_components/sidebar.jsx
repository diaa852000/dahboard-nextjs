'use client';

import React from "react";
import { ChevronLeft,ChevronRight, Settings } from "lucide-react";
import routes from "@/app/_data/navItems";
import SidebarButton from "./sidebar-buttons";
import profileImg from '../../public/face16.jpg';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "../_contexts/global";


export default function Sidebar() {
    const pathname = usePathname();
    const {isSidebarOpen, toggleSidebar} = useGlobalContext();

    return (
        <aside className={`sticky top-0 left-0 max-h-screen overflow-y-auto hidden xl:flex transition-all ease-linear
        ${isSidebarOpen ? 'w-[270px]' : 'w-[80px]'} flex-col border-r bg-background overflow-x-hidden`}>
            <nav className={`flex py-2 px-4 2xl:py-4 2xl:px-5 items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
                {isSidebarOpen && 
                    <div className="flex justify-center">
                    <Avatar className={`${isSidebarOpen ? 'w-[44px] h-[44px]' : 'w-[33px] h-[33px]'} mr-2`}>
                        <Image
                            src={profileImg}
                            alt="Profile Image"
                            width={isSidebarOpen ? 44 : 33}
                            height={isSidebarOpen ? 44 : 33}
                            onClick={toggleSidebar}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className={`${isSidebarOpen ? 'block' : 'hidden'} text-ellipsis text-sm`}>
                        <p className="capitalize font-medium">user1</p>
                        <p className="text-gray-300">user1@gmail.com</p>
                    </div>
                </div>
                }
                <Button
                    variant="ghost"
                    className="rounded-xl"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <ChevronLeft className={`w-4 h-4`} /> : <ChevronRight className="w-4 h-4"/>}
                </Button>
            </nav>
            <Separator/>
            <nav className={`flex flex-col ${isSidebarOpen ? "items-start" : "items-center"} gap-2 px-2 sm:py-5`}>
                {routes.map((cat, index) => (
                    <React.Fragment key={index}>
                        <SidebarButton
                            path={null}
                            icon={cat.icon}
                            text={cat.title}
                            isOpen={isSidebarOpen}
                        />
                        {cat?.list.map((item, index) =>
                            <SidebarButton
                                key={index}
                                path={item.path}
                                icon={item.icon}
                                text={item.title}
                                isOpen={isSidebarOpen}
                                active={pathname === item.path }
                            />
                        )}
                        <Separator />
                    </React.Fragment>
                ))}
            </nav>
            <nav className={`mt-auto flex flex-col ${isSidebarOpen ? 'items-start' : 'items-center'} gap-4 px-2 sm:py-5`}>
                <SidebarButton
                    icon={Settings}
                    text={'settings'}
                    isOpen={isSidebarOpen}
                />
            </nav>
        </aside>
    )
}