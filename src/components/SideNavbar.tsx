"use client";

import React, { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  Archive,
  ArchiveX,
  File,
  Inbox,
  Send,
  Trash2,
  ChevronRight,
  LayoutDashboard,
  MenuIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <>
      <div className="hidden sm:grid fixed min-w-[80px] border-r px-3  pt-7">
      <h1 className="text-2xl">Logo</h1>
        <div className="absolute right-0 top-7">
          {/* <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button> */}
        </div>
        <div className="mt-7">
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Dashboard",
              label: "",
              icon: LayoutDashboard,
              variant: "default",
              href: "/",
            },
            {
              title: "Inbox",
              label: "128",
              icon: Inbox,
              variant: "ghost",
              href: "/inbox",
            },
            {
              title: "Drafts",
              label: "9",
              icon: File,
              variant: "ghost",
              href: "/draft",
            },
            {
              title: "Sent",
              label: "",
              icon: Send,
              variant: "ghost",
              href: "/sent",
            },
            {
              title: "Junk",
              label: "23",
              icon: ArchiveX,
              variant: "ghost",
              href: "/",
            },
            {
              title: "Trash",
              label: "",
              icon: Trash2,
              variant: "ghost",
              href: "/",
            },
            {
              title: "Archive",
              label: "",
              icon: Archive,
              variant: "ghost",
              href: "/",
            },
          ]}
        /></div>
      </div>

      <div className="absolute sm:hidden top-5 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white z-50 h-full overflow-y-auto">
            <DropdownMenuItem>
              <Nav
               isCollapsed={false}
                links={[
                  {
                    title: "Dashboard",
                    label: "",
                    icon: LayoutDashboard,
                    variant: "default",
                    href: "/",
                  },
                  {
                    title: "Inbox",
                    label: "128",
                    icon: Inbox,
                    variant: "ghost",
                    href: "/inbox",
                  },
                  {
                    title: "Drafts",
                    label: "9",
                    icon: File,
                    variant: "ghost",
                    href: "/draft",
                  },
                  {
                    title: "Sent",
                    label: "",
                    icon: Send,
                    variant: "ghost",
                    href: "/sent",
                  },
                  {
                    title: "Junk",
                    label: "23",
                    icon: ArchiveX,
                    variant: "ghost",
                    href: "/",
                  },
                  {
                    title: "Trash",
                    label: "",
                    icon: Trash2,
                    variant: "ghost",
                    href: "/",
                  },
                  {
                    title: "Archive",
                    label: "",
                    icon: Archive,
                    variant: "ghost",
                    href: "/",
                  },
                ]}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
