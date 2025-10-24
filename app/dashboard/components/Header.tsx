"use client";

import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";

interface HeaderProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function Header({ user }: HeaderProps) {
  const userName = user?.name || user?.email || "User";

  return (
    <header className="flex items-center justify-end bg-white border-b border-gray-200 p-2">
      {/* <h1 className="text-lg font-semibold">Dashboard</h1> */}

      <div className="flex items-center gap-3 mr-2">
        <div className="sky-gradient-bg border-gray-100 border rounded-full w-6 h-6"/>
        
        <span className="text-sm font-medium truncate max-w-[120px]">
          {userName}
        </span>

        <Button
          onClick={() => signOut({ callbackUrl: "/auth/signin" })}
          className="test-sm! py-1! px-2! "
        >
          Logout
        </Button>
      </div>
    </header>
  );
}
