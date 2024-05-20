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
} from "lucide-react";
import { Button } from "./ui/button";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-7 pt-20">
      <div className="absolute right-0 top-7">
        <Button
          onClick={toggleSidebar}
          variant="secondary"
          className="hidden sm:flex rounded-full p-2"
        >
          <ChevronRight />
        </Button>
      </div>
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
      />
    </div>
  );
}
