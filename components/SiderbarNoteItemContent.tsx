"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SiderbarNoteItemContent({
  id,
  title,
  children,
  expandChildren,
}: any) {
  const [isExpanded, setIsExpanded] =
    useState(false);
  const [height, setHeight] = useState("auto");
  const router = useRouter();
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    setHeight(isExpanded ? "50px" : "70px");
  };
  return (
    <div
      className="relative bg-gray-50 mx-4 mb-2 pl-3 group transition-all ease-in-out duration-8000"
      style={{ height: height }}
    >
      <button
        className="absolute left-0 right-0 top-0 bottom-0"
        onClick={() => {
          router.push(`/note/${id}`);
        }}
      ></button>

      {children}
      <button
        onClick={toggleExpansion}
        className="absolute right-2 top-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300  "
      >
        {isExpanded ? (
          <img src="/chevron-down.svg" alt="" />
        ) : (
          <img src="/chevron-up.svg" alt="" />
        )}
      </button>

      {isExpanded && expandChildren}
    </div>
  );
}

export default SiderbarNoteItemContent;
