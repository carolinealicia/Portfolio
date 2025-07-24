import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HomeSection = (): JSX.Element => {
  // Small decorative elements data
  const decorativeElements = [
    {
      className: "absolute w-[13px] h-[13px] top-[58px] left-[698px]",
      content: (
        <div className="relative w-[11px] h-[11px] top-px left-px">
          <img
            className="absolute w-2 h-2 top-0 left-0"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector.svg"
          />
          <img
            className="absolute w-2 h-2 top-[3px] left-[3px]"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-1.svg"
          />
        </div>
      ),
    },
    {
      className: "absolute w-[13px] h-[13px] top-[55px] left-[328px]",
      content: (
        <img
          className="w-full h-full"
          alt="Mask group"
          src="https://c.animaapp.com/VJabVXvs/img/mask-group@2x.png"
        />
      ),
    },
    {
      className: "absolute w-[17px] h-[17px] top-[50px] left-[548px]",
      content: (
        <>
          <img
            className="absolute w-1 h-1 top-0.5 left-1"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-2.svg"
          />
          <img
            className="absolute w-1 h-1 top-0.5 left-2"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-3.svg"
          />
          <img
            className="absolute w-1 h-1 top-1.5 left-2"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-4.svg"
          />
          <img
            className="absolute w-1 h-1 top-1.5 left-1"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-5.svg"
          />
          <img
            className="absolute w-1 h-1 top-[11px] left-1"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-6.svg"
          />
        </>
      ),
    },
    {
      className: "absolute w-[13px] h-[13px] top-[105px] left-[704px]",
      content: (
        <div className="relative h-[13px]">
          <img
            className="absolute w-0.5 h-0.5 top-1 left-1.5"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-7.svg"
          />
          <img
            className="absolute w-[13px] h-[13px] top-0 left-0"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-8.svg"
          />
          <img
            className="absolute w-[5px] h-1.5 top-[3px] left-1"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-9.svg"
          />
        </div>
      ),
    },
    {
      className: "absolute w-[21px] h-[21px] top-24 left-[285px] rotate-180",
      content: (
        <div className="relative w-[13px] h-[18px] top-px left-1">
          <img
            className="absolute w-[13px] h-[13px] top-0 left-0 -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-10.svg"
          />
          <img
            className="absolute w-[13px] h-[5px] top-[13px] left-0 -rotate-180"
            alt="Vector"
            src="https://c.animaapp.com/VJabVXvs/img/vector-11.svg"
          />
        </div>
      ),
    },
    {
      className: "absolute w-3.5 h-3.5 top-[29px] left-[206px]",
      content: (
        <img
          className="absolute w-3 h-[11px] top-px left-px"
          alt="Vector"
          src="https://c.animaapp.com/VJabVXvs/img/vector-12.svg"
        />
      ),
    },
  ];

  return (
    <section className="w-full h-[761px] relative">
      <div className="relative w-full h-[680px] mt-[137px]">
        {/* CTA Buttons */}
        <div className="flex w-[272px] h-[59px] items-center justify-center gap-2.5 p-2.5 absolute top-[526px] left-1/2 -translate-x-1/2 bg-[#ffffff1a] rounded-[50px] overflow-hidden border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[50px] before:[background:radial-gradient(50%_50%_at_63%_63%,rgba(255,255,255,1)_0%,rgba(201,201,201,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <Button className="flex w-[158px] h-12 items-center justify-center px-5 py-2.5 relative mt-[-4.50px] mb-[-4.50px] ml-[-4.00px] bg-variable-collection-blue rounded-[60px] overflow-hidden border-[0.5px] border-solid border-gray-300 text-variable-collection-white">
            <span className="relative w-fit font-normal text-[21px] tracking-[-0.21px] leading-[normal] font-body">
              Portfolio
            </span>
            <ArrowUpRightIcon className="relative w-[30px] h-[31px] mt-[-1.50px] mb-[-1.50px]" />
          </Button>

          <Button
            variant="ghost"
            className="flex w-[92px] h-[45px] items-center justify-center gap-2.5 pl-5 pr-[30px] py-2.5 relative mt-[-3.00px] mb-[-3.00px] mr-[-4.00px] rounded-[60px] overflow-hidden"
          >
            <span className="relative w-fit mt-[-2.00px] ml-[-16.00px] mr-[-16.00px] font-normal text-[#333333] text-[21px] tracking-[-0.21px] leading-[normal] font-body">
              Hire me
            </span>
          </Button>
        </div>

        {/* Main Content */}
        <div className="w-full h-[680px] flex justify-center">
          <div className="relative w-[985px] h-[304px] mt-[182px]">
            {/* Decorative Elements */}
            {decorativeElements.map((element, index) => (
              <div key={index} className={element.className}>
                {element.content}
              </div>
            ))}

            {/* Main Heading */}
            <div className="absolute w-[541px] top-0 left-[196px] font-bold text-[#00000033] text-[160px] tracking-[-8.00px] leading-[144px] whitespace-nowrap font-body">
              Portfolio
            </div>

            {/* Year */}
            <div className="absolute top-0 left-[738px] font-h3 font-bold text-neutral-900 text-[40px] tracking-[-2px] leading-[48px] whitespace-nowrap">
              2025
            </div>

            {/* Subtitle */}
            <h1 className="absolute w-[985px] top-[152px] left-0 font-bold text-neutral-900 text-[40px] text-center tracking-[-2.00px] leading-[48px] font-body">
              Fresh Graduate Data Scientist
            </h1>

            {/* Description */}
            <p className="absolute w-[882px] top-[201px] left-[52px] font-normal text-[#333333] text-lg text-center tracking-[-0.18px] leading-6 font-body">
              Strong analytical background and hands-on experience as Actuarial
              intern at KPMG, and Student
              <br />
              Developer on an AI-focused industry project with Lifeblood. Have
              been certified as Data Scientist Associate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
