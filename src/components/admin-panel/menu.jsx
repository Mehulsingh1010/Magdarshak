"use client";

import Link from "next/link";
import { RiTrafficLightLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from "@/components/ui/tooltip";

export function Menu({ isOpen, location }) {
  const pathname = usePathname();

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="pt-4 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-4 px-2">
          
          {/* Traffic Control */}
          <li className="w-full pt-4">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    variant={
                      pathname === "/" ? "secondary" : "ghost"
                    }
                    className={`w-full justify-start h-10 mt-4 rounded-md p-4 flex items-center ${
                      pathname === "/"
                        ? "bg-[#F9FAFB] bg-opacity-70 backdrop-blur-md border border-gray-300"
                        : "dark:bg-[#1F2937]"
                    }`}
                    asChild
                  >
                    <Link href="/" className="flex items-center w-full">
                      <span className={cn(isOpen === false ? "" : "mr-4")}>
                        <RiTrafficLightLine size={18} />
                      </span>
                      <p
                        className={cn(
                          "max-w-[200px] truncate text-lg font-medium",
                          isOpen === false
                            ? "-translate-x-96 opacity-0"
                            : "translate-x-0 opacity-100"
                        )}
                      >
                        Traffic Control
                      </p>
                    </Link>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Traffic Control Dashboard</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li>

          {/* Emergency Contacts */}
          <li className="w-full pt-4">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    variant={
                      pathname === "/" ? "secondary" : "ghost"
                    }
                    className={`w-full justify-start h-10 mt-4 rounded-md p-4 flex items-center ${
                      pathname === "/"
                        ? "bg-[#F9FAFB] bg-opacity-70 backdrop-blur-md border border-gray-300"
                        : "dark:bg-[#1F2937]"
                    }`}
                    asChild
                  >
                    <Link href="/" className="flex items-center w-full">
                      <span className={cn(isOpen === false ? "" : "mr-4")}>
                        <AiOutlinePhone size={18} />
                      </span>
                      <p
                        className={cn(
                          "max-w-[200px] truncate text-lg font-medium",
                          isOpen === false
                            ? "-translate-x-96 opacity-0"
                            : "translate-x-0 opacity-100"
                        )}
                      >
                        Emergency Contacts
                      </p>
                    </Link>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Help Lines & Contacts</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li>

          {/* Help Lines Information */}
          <li className={cn(
            "w-full pt-4 transition-opacity ease-in-out duration-300",
            isOpen === false ? "opacity-0 hidden" : "opacity-100"
          )}>
            <div className="w-full p-4 bg-[#F9FAFB] dark:bg-[#1F2937] rounded-md">
              <h3 className="text-lg font-semibold">Help Lines</h3>
              <p className="mt-2 text-sm">For any emergencies, please contact:</p>
              <ul className="mt-2 list-disc list-inside">
                <li><strong>Traffic Police:</strong> 123-456-7890</li>
                <li><strong>Ambulance:</strong> 987-654-3210</li>
                <li><strong>Fire Department:</strong> 111-222-3333</li>
                <li><strong>General Emergency:</strong> 911</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
}
