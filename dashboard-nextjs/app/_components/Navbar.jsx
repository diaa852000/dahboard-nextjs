'use client';

import Image from "next/image"
import Link from "next/link"
import { Bell, Globe, LineChart, Menu, Search, WholeWord } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import MobileNav from "@/app/_components/mobile-nav"
import { usePathname } from "next/navigation";
import React from "react";
export default function Navbar() {
    const pathname = usePathname()
    
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:h-auto sm:px-6 py-2 shadow-sm">
            <MobileNav />
            <Breadcrumb className="hidden lg:flex">
                <BreadcrumbList>
                    {pathname.split('/').map((item, index, array) => {
                        const path = array.slice(0, index + 1).join('/');
                        return (
                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    {index === array.length - 1
                                        ? <BreadcrumbPage className="uppercase">{item}</BreadcrumbPage> 
                                        : <BreadcrumbLink asChild>
                                            <Link
                                                href={path}
                                                className="uppercase"
                                            >
                                                {item}
                                            </Link>
                                        </BreadcrumbLink>
                                    }
                                </BreadcrumbItem>
                                {index < array.length - 1 && <BreadcrumbSeparator />}
                            </React.Fragment>
                        )
                    }
                    )}
                </BreadcrumbList>
            </Breadcrumb>

            <div className="relative ml-auto flex-1 md:grow-0 ">
                <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[336px] focus-visible:ring-0 focus-visible:ring-transparent"
                />
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="overflow-hidden"
                    >
                        <Menu/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}