import Sidebar from "@/components/siderbar";
import Header from "@/components/header";
import MainContent from "@/components/main-content";

const Home: React.FC<{ isL: boolean }> = async ({ isL }: { isL?: boolean }) => {
  const isLogin = false;

  return (
    <>
      <div className="flex h-full">
        <Sidebar isLogin={isLogin} menuItems={[]} />
        <div
          className="relative flex w-full flex-col bg-white font-sans"
          id="#main"
        >
          <Header />
          <MainContent isLogin={isLogin} menuItems={[]} />
        </div>
      </div>
    </>
  );
};

export default Home;
