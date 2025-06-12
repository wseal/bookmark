import Image from "next/image";
import SiderbarMenu from "./siderbar-menu";

interface SidebarProps {
  // isOpen: boolean;
  // toggleSidebar?: () => void;
  isLogin: boolean;
  menuItems: { id: string; title: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({
  // isOpen,
  // toggleSidebar,
  isLogin,
  menuItems,
}) => {
  return (
    <aside
      className={`relative hidden lg:block`}
      //   className={`fixed inset-y-0 left-0 w-64 bg-[#f1f1f1] shadow-lg lg:shadow-none lg:static lg:w-1/4 p-6 flex flex-col lg:block ${
      //     isOpen ? "" : "hidden lg:block"
      //   }`}
    >
      <div className="lg:w-1/4m flex h-full w-50 flex-col bg-[#f1f1f1] shadow-lg lg:static lg:shadow-none">
        <div className="flex h-24 items-center gap-2 px-4 py-4 shadow-xs">
          {
            <Image
              src={"globe.svg"}
              alt={"NavHub Logo"}
              width={48}
              height={48}
            />
          }
          <div className="flex max-w-2/3 flex-1 flex-col">
            <span className="text-xl font-semibold">NavLink</span>
            <span className="overflow-hidden text-xs text-ellipsis whitespace-nowrap">
              一个收集所有常用书签的网站
            </span>
          </div>
        </div>
        <SiderbarMenu />
      </div>
    </aside>
  );
};

export default Sidebar;
