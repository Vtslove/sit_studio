import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full">
      <header className="self-stretch flex flex-col items-center justify-start pt-[70px] px-5 pb-0 box-border max-w-full text-left text-9xl text-white font-inter">
        <div className="w-[1120px] bg-black flex flex-row flex-wrap items-center justify-between py-6 px-[42px] box-border gap-[20px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h2 className="m-0 relative text-inherit leading-[30px] font-extrabold font-inherit whitespace-nowrap">
            sit studio
          </h2>
          <div className="flex flex-row items-start justify-end">
            <h2 className="m-0 relative text-inherit leading-[30px] font-extrabold font-inherit">
              menu
            </h2>
          </div>
        </div>
      </header>
      <img
        className="self-stretch max-w-full overflow-hidden max-h-full object-cover z-[1] mt-[-148px]"
        loading="eager"
        alt=""
        src="/header-background@2x.png"
      />
    </section>
  );
};

export default Header;
