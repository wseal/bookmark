"use clinet";

import { Bookmark } from "lucide-react";

interface SideBarMenuItemProps {
  handleClick?: (id: string) => void;
  title: string;
  id: string;
}

export default function SideBarMenuItem({
  id,
  title,
  handleClick,
}: SideBarMenuItemProps) {
  return (
    <>
      <li
        key={id}
        className="flex items-center gap-[4px] rounded px-4 py-2 text-lg hover:bg-[#E8E8FD]"
        onClick={() => {
          handleClick && handleClick(id);
        }}
      >
        <Bookmark size={18} strokeWidth={1} className="rotate-0" />
        <span>{title}</span>
      </li>
    </>
  );
}

{
  /* <Bookmark size={16} strokeWidth={0.5} />; 
  <Bookmark size={16} strokeWidth={1} />
  <Bookmark size={16} strokeWidth={1} absoluteStrokeWidth />
  
  */
}
