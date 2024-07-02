import CineRental from "./Cine/CineRental";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useTheme } from "./context/hooks";

const Page = () => {
  const { darkMode } = useTheme();
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <div>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <CineRental />
        </div>
      </div>
    </div>
  );
};

export default Page;
