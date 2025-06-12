"use client";

import SideBarMenuItem from "./siderbar-menu-item";

const SiderBarMenu: React.FC<{}> = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const parent = document.getElementById("#main");
    if (!parent) {
      return;
    }

    const navbarHeight = 100;
    const offsetPosition = element.getBoundingClientRect().top - navbarHeight;
    parent.scrollBy({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <>
      <nav className="mt-4 flex max-h-2/3 flex-1 flex-col gap-4 p-2">
        <ul className="overflow-auto">
          <SideBarMenuItem
            title={"WEB工具"}
            id={"1"}
            handleClick={scrollToSection}
          />
          <SideBarMenuItem
            title={"WEB工具"}
            id={"2"}
            handleClick={scrollToSection}
          />
          <SideBarMenuItem
            title={"18+"}
            id={"3"}
            handleClick={scrollToSection}
          />
          <SideBarMenuItem
            title={"WEB工具"}
            id={"3"}
            handleClick={scrollToSection}
          />
          <SideBarMenuItem
            title={"18+"}
            id={"3"}
            handleClick={scrollToSection}
          />
        </ul>
      </nav>
    </>
  );
};

export default SiderBarMenu;
