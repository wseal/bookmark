"use client";

import Link from "next/link";
import { SquarePen, SquareX, Tag } from "lucide-react";
import { BookMarkAdd } from "./bookmark";

interface BookMarkGroupProps {
  //   toggleSidebar: () => void;
  isLogin: boolean;
  id: number;
  title?: string;
  children?: React.ReactNode[];
}

const BookMarkGroup: React.FC<BookMarkGroupProps> = ({
  isLogin,
  id,
  title,
  children,
}) => {
  const onEdit = async () => {};

  const onDel = async (id: number) => {};
  return (
    <>
      <section className="flex flex-col">
        <div className="flex items-center">
          <Tag width={22} height={22} rotate={90} />
          {/* {<Image src={"tag.svg"} alt={"tag"} width={18} height={18} />} */}
          <h2 id={title} className="my-2 p-2 text-xl leading-[2] text-gray-600">
            {title}
          </h2>
          {isLogin && (
            <div className="flex gap-1">
              <SquarePen
                size={18}
                className="text-blue-300 transition duration-200 ease-in-out hover:scale-140 hover:text-blue-500"
                onClick={() => {
                  onEdit();
                }}
              />
              <SquareX
                size={18}
                className="text-red-300 transition duration-200 ease-in-out hover:scale-140 hover:text-red-500"
                onClick={() => {
                  onDel(id);
                }}
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
          {children}
          {isLogin && (
            <Link href={"/dashboard/links/create"}>
              <BookMarkAdd />
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default BookMarkGroup;
