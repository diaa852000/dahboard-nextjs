import { Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import routes from "@/app/_data/navItems";
import SidebarButton from "./sidebar-buttons";

export default function Sidebar({isOpen}) {
    return (
        <aside className={`sticky top-0 left-0 max-h-screen hidden ${isOpen ? 'w-[270px]' : 'w-14'} flex-col border-r bg-background md:flex`}>
            <nav className="flex flex-col  gap-2 px-2 sm:py-5">
                {routes.map((route, idx) => (
                    <SidebarButton
                        key={idx}
                        path={route.href}
                        icon={route.icon}
                        text={route.name}
                        isOpen={isOpen}
                    />
                ))}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}