import type { NextPage } from "next";
import Header from "../components/header";
import HeaderScowcaseModule from "../components/header-scowcase-module";

const NEWRESPONSIVEULTRAFINAL: NextPage = () => {
  return (
    <div className="w-full relative bg-black flex flex-col items-start justify-start tracking-[normal]">
      <Header />
      <HeaderScowcaseModule />
    </div>
  );
};

export default NEWRESPONSIVEULTRAFINAL;
