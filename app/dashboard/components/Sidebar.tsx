"use client";
import Link from "next/link";
// import { useState } from "react";
import { Home, User, Settings } from "lucide-react";
import Image from "next/image";
import logo from '@/public/logo.png'

export default function Sidebar() {
  // const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-black text-white transition-all duration-300 flex flex-col items-center w-16`}
    >
      <div className="w-4/5 flex items-center justify-center border-gray-700 border-b py-4">
        <Image
        src={logo}
        alt='Logo'
        width={40}
        height={40}
        />
      </div>

      <nav className="flex-1 p-3 space-y-2">
        <Link
          href="/dashboard"
          className="sidebar-link"
        >
          <Home size={24} />
        </Link>
        <Link
          href="/dashboard/profile"
          className="sidebar-link"
        >
          <User size={24} />
        </Link>
        <Link
          href="/dashboard/settings"
          className="sidebar-link"
        >
          <Settings size={24} />
        </Link>
      </nav>
    </div>
  );
}
