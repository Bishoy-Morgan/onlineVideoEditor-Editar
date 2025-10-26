"use client";

import { Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function DashboardContent() {
  const [topHeight, setTopHeight] = useState(60);
  const [isDragging, setIsDragging] = useState(false);
  const minTop = 50;
  const maxTop = 90;
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const startY = e.clientY;
    const startTopVh = topHeight;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);

      frameRef.current = requestAnimationFrame(() => {
        const deltaY = moveEvent.clientY - startY;
        const vhDelta = (deltaY / window.innerHeight) * 100;
        let newTopVh = startTopVh + vhDelta;

        if (newTopVh < minTop) newTopVh = minTop;
        if (newTopVh > maxTop) newTopVh = maxTop;

        setTopHeight(newTopVh);
      });
    };

    const onMouseUp = () => {
      setIsDragging(false);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const bottomHeight = 100 - topHeight;

  return (
    <div className="w-full h-screen flex flex-col select-none">
      {/* Top Section */}
      <div
        className={`flex flex-col items-center justify-center bg-gray-100 overflow-auto ${
          isDragging ? "" : "transition-[height] duration-200 ease-in-out"
        }`}
        style={{ height: `${topHeight}vh` }}
      >
        <div className="group w-16 h-16 mb-6 bg-neutral-800 rounded-xl flex items-center justify-center shadow-lg shadow-neutral-700 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
          <Plus size={32} className="text-white group-hover:text-cyan-500" />
        </div>
        <h5 className="font-semibold mb-2">Click to upload</h5>
        <span className="text-xs text-gray-500 font-light">
          Or drag and drop file here
        </span>
      </div>

      {/* Divider */}
      <div
        onMouseDown={handleMouseDown}
        className={`h-[3px] bg-gray-400 cursor-row-resize hover:bg-cyan-500 active:bg-cyan-500 transition-all duration-150 ${
          isDragging ? "opacity-100" : "opacity-0 hover:opacity-100"
        }`}
      />

      {/* Bottom Section */}
      <div
        className={`bg-white overflow-auto ${
          isDragging ? "" : "transition-[height] duration-200 ease-in-out"
        }`}
        style={{ height: `${bottomHeight}vh`, minHeight: "30vh" }}
      >
        <div className="p-4 text-center font-medium">
          Bottom Container — {Math.round(bottomHeight)}vh
        </div>
      </div>
    </div>
  );
}
