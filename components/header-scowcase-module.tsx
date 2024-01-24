import type { NextPage } from "next";

const HeaderScowcaseModule: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-center justify-center py-0 px-[70px] box-border max-w-full text-left text-81xl text-white font-inter mq975:pl-[35px] mq975:pr-[35px] mq975:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[320px] max-w-full">
          <h1 className="m-0 w-[455px] h-[304px] relative text-inherit leading-[101px] font-extrabold font-inherit inline-block shrink-0 max-w-full mq450:text-11xl mq450:leading-[40px] mq950:text-31xl mq950:leading-[61px]">
            <p className="m-0">WEB DESIGN STUDIO</p>
          </h1>
          <img
            className="self-stretch h-[446px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/image@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl font-body-text">
            <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
              Project title
            </div>
            <div className="self-stretch relative text-mid leading-[27px]">
              UI, Art drection
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[320px] max-w-full text-xl font-body-text">
          <img
            className="self-stretch h-[771px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/1231.mp4"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[30px] font-semibold mq450:text-base mq450:leading-[24px]">
              Project title
            </div>
            <div className="self-stretch relative text-mid leading-[27px]">
              UI, Art drection
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderScowcaseModule;
