"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CirclePlus, SquarePen, SquareX } from "lucide-react";

interface BookMarkProps {
  //   toggleSidebar: () => void;
  isLogin: boolean;
  src: string;
  alt?: string;
  title: string;
  desc: string;
}

// https://home.winterchen.com/images/logos/github.png
const BookMark: React.FC<BookMarkProps> = ({
  isLogin,
  src = "https://github.githubassets.com/favicons/favicon.svg",
  alt = "ImgURL Icon",
  title,
  desc,
}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="shadow-custom-md hover:shadow-custom-hover relative flex h-18 min-w-[160px] items-center gap-3 rounded-lg p-4 transition duration-200 ease-in-out hover:-translate-y-1 hover:bg-gray-50 lg:rounded-xs"
            >
              <div className="flex h-[40px] min-w-[40px] items-center justify-center rounded-full bg-gray-200">
                <Image src={src} alt={alt} width={40} height={40} />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="overflow-hidden text-sm font-bold text-ellipsis whitespace-nowrap">
                  {title}
                </h3>
                <p className="line-clamp-2 text-sm text-gray-400">{desc}</p>
              </div>

              {isLogin && (
                <div className="absolute top-0 right-0 flex gap-1 p-2">
                  <SquarePen
                    size={18}
                    className="text-blue-300 transition duration-200 ease-in-out hover:scale-140 hover:text-blue-500"
                  />

                  <SquareX
                    size={18}
                    className="text-red-300 transition duration-200 ease-in-out hover:scale-140 hover:text-red-500"
                  />
                </div>
              )}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{src}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default BookMark;

interface BookMarkAddProps {
  //   toggleSidebar: () => void;
}

export function BookMarkAdd({}: BookMarkAddProps) {
  return (
    <>
      <div className="flex items-center">
        <CirclePlus size={32} className="text-blue-300 hover:text-blue-500" />
      </div>
    </>
  );
}
