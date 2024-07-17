'use client';

import { ChevronLeft, Settings } from "lucide-react";
import routes from "@/app/_data/navItems";
import SidebarButton from "./sidebar-buttons";
import profileImg from '../../public/face16.jpg';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";


export default function Sidebar({ isOpen }) {
    const pathname = usePathname();

    return (
        <aside className={`sticky top-0 left-0 max-h-screen overflow-y-auto hidden ${isOpen ? 'w-[270px]' : 'w-16'} flex-col border-r bg-background md:flex`}>
            <nav className="flex py-4 px-5 justify-between items-center">
                <div className="flex">
                    <Avatar className={`${isOpen ? 'w-[44px] h-[44px]' : 'w-[33px] h-[33px]'} mr-2`}>
                        <Image
                            src={profileImg}
                            alt="Profile Image"
                            width={isOpen ? 44 : 33}
                            height={isOpen ? 44 : 33}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-ellipsis text-sm">
                        <p className="capitalize font-medium">user1</p>
                        <p className="text-gray-300">user1@gmail.com</p>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    className="rounded-full"
                >
                    <ChevronLeft className={`w-4 h-4`} />
                </Button>
            </nav>
            <nav className={`flex flex-col ${isOpen ? "items-start" : "items-center"} gap-2 px-2 sm:py-5`}>
                {routes.map(cat => (
                    <>
                        <SidebarButton
                            key={cat.title}
                            path={null}
                            icon={cat.icon}
                            text={cat.title}
                            isOpen={isOpen}

                        />
                        {cat?.list.map((item) =>
                            <SidebarButton
                                key={item.title}
                                path={item.path}
                                icon={item.icon}
                                text={item.title}
                                isOpen={isOpen}
                                active={pathname === item.path }
                            />
                        )}
                        <Separator />
                    </>
                ))}
            </nav>
            <nav className="mt-auto flex flex-col items-start gap-4 px-2 sm:py-5">
                <SidebarButton
                    icon={Settings}
                    text={'settings'}
                    isOpen={isOpen}
                />
            </nav>
        </aside>
    )
}