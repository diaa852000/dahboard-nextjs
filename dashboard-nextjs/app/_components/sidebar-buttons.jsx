import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";

export default function SidebarButton({ isOpen, icon: Icon, text, path }) {
    return (
        <>
            {isOpen
                ? (
                    <Link
                        href={path ? path : '#'}
                        className="group flex shrink-0 items-center justify-start gap-2 rounded-[4px] text-lg text-foreground md:text-sm p-3 hover:bg-neutral-100
                         dark:hover:bg-neutral-400 transition-colors ease-in-out duration-150"
                    >
                        {Icon && <Icon className="h-5 w-5" />}
                        <span>{text}</span>
                    </Link>
                ) : (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={path ? path : '#'}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    {Icon && <Icon className="h-5 w-5" />}
                                    <span className="sr-only">{text}</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span className="sr-only">{text}</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
        </>
    )
}