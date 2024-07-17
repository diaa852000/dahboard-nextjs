import { Card as ShadCard } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function Card() {
    return (
        <ShadCard className="flex-1 flex flex-col gap-4 rounded-xl p-6 hover:bg-[#F1F5F9] dark:hover:bg-[#374151] transition-colors ease-in-out duration-150 cursor-pointer">
            <div className="flex gap-4">
                <Users className="w-5 h-5 "/>
                <p className="text-sm ">Total Users</p>
            </div>
            <div className="pl-9">
                <p className="text-xl font-bold mb-4">10.273</p>
                <p className="text-sm"> 
                    <span className="pr-1 text-green-600 font-bold">12%</span>more than previous week</p>
            </div>
        </ShadCard>
    )
}

