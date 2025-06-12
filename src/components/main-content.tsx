import BookMark from "./bookmark";
import BookMarkGroup from "./bookmark-group";

interface MainContentProps {
  // isOpen: boolean;
  // toggleSidebar?: () => void;
  isLogin: boolean;
  menuItems: { id: string; title: string }[];
}

const MainContent: React.FC<MainContentProps> = ({ isLogin, menuItems }) => {
  return (
    <main className="mx-auto flex w-full flex-1 flex-col gap-2 overflow-y-auto p-4 lg:gap-8 lg:p-6 lg:pt-6">
      <BookMarkGroup isLogin={isLogin} title={"默认分类"} id={0}>
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />

        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
      </BookMarkGroup>
      <BookMarkGroup isLogin={isLogin} title={"默认分类"} id={0}>
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />

        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
      </BookMarkGroup>
      <BookMarkGroup isLogin={isLogin} title={"默认分类"} id={0}>
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />

        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
      </BookMarkGroup>
      <BookMarkGroup isLogin={isLogin} title={"默认分类"} id={0}>
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />

        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
      </BookMarkGroup>
      <BookMarkGroup isLogin={isLogin} title={"默认分类"} id={0}>
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />

        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
        <BookMark
          isLogin={isLogin}
          src="https://github.githubassets.com/favicons/favicon.svg"
          alt="Zdir Icon"
          title="Zdir"
          desc="索引功能强大的导航程序，支持WEB和DAV..."
        />
      </BookMarkGroup>
    </main>
  );
};

export default MainContent;
