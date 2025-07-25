import { ArrowUpRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  DatabaseIcon,
  FigmaIcon,
  GitHubIcon,
  PythonIcon,
  RStudioIcon,
  VSCodeIcon,
} from "./icons";

export const HomeSection = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  const decorativeElements = [
    {
      id: "github",
      Icon: GitHubIcon,
      defaultClassName: "absolute w-3.5 h-3.5 top-[55px] left-[380px]",
      hoverClassName: "absolute w-[68px] h-[68px] top-[-20px] left-[80px] rotate-[12deg]",
    },
    {
      id: "figma",
      Icon: FigmaIcon,
      defaultClassName: "absolute w-[17px] h-[17px] top-[50px] left-[548px]",
      hoverClassName: "absolute w-[59px] h-[59px] top-[-70px] left-[420px] rotate-[12deg]",
    },
    {
      id: "python",
      Icon: PythonIcon,
      defaultClassName: "absolute w-[13px] h-[13px] top-[105px] left-[680px]",
      hoverClassName: "absolute w-[62px] h-[62px] top-[-70px] left-[680px] -rotate-[17deg]",
    },
    {
      id: "rstudio",
      Icon: RStudioIcon,
      defaultClassName: "absolute w-[21px] h-[21px] top-24 left-[750px] opacity-0",
      hoverClassName: "absolute w-[53px] h-[53px] top-[130px] left-[820px] rotate-[15deg] opacity-100",
    },
    {
      id: "database",
      Icon: DatabaseIcon,
      defaultClassName: "absolute w-3.5 h-3.5 top-[29px] left-[206px]",
      hoverClassName: "absolute w-[60px] h-[60px] top-[130px] left-[120px] -rotate-[8deg]",
    },
    {
      id: "vscode",
      Icon: VSCodeIcon,
      defaultClassName: "absolute w-0 h-0 opacity-0",
      hoverClassName: "absolute w-[54px] h-[54px] top-[-70px] left-[250px] -rotate-[17deg] opacity-100",
    },
  ];

  return (
    <section
      className="w-full h-[761px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[680px] mt-20">
        {/* CTA Buttons */}
        <div className="flex w-[272px] h-[59px] items-center justify-center gap-2.5 p-2.5 absolute top-[526px] left-1/2 -translate-x-1/2 bg-[#ffffff1a] rounded-[50px] overflow-hidden border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[50px] before:[background:radial-gradient(50%_50%_at_63%_63%,rgba(255,255,255,1)_0%,rgba(201,201,201,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <Button className="flex w-[158px] h-12 items-center justify-center px-5 py-2.5 relative mt-[-4.50px] mb-[-4.50px] ml-[-4.00px] bg-blue-600 rounded-[60px] overflow-hidden border-[0.5px] border-solid border-gray-300 text-white">
            <span className="relative w-fit font-normal text-[21px] tracking-[-0.21px] leading-[normal]">
              Portfolio
            </span>
            <ArrowUpRightIcon className="relative w-[30px] h-[31px] mt-[-1.50px] mb-[-1.50px]" />
          </Button>
          <Button
            variant="ghost"
            className="flex w-[92px] h-[45px] items-center justify-center gap-2.5 pl-5 pr-[30px] py-2.5 relative mt-[-3.00px] mb-[-3.00px] mr-[-4.00px] rounded-[60px] overflow-hidden"
          >
            <span className="relative w-fit mt-[-2.00px] ml-[-16.00px] mr-[-16.00px] font-normal text-[#333333] text-[21px] tracking-[-0.21px] leading-[normal]">
              Hire me
            </span>
          </Button>
        </div>

        {/* Main Content */}
        <div className="w-full h-[680px] flex justify-center">
          <div className="relative w-[985px] h-[304px] mt-[182px]">
            {/* Decorative Icons */}
            {decorativeElements.map(({ id, Icon, defaultClassName, hoverClassName }) => (
              <Icon
                key={id}
                className={`transform transition-all duration-500 ease-in-out ${
                  isHovered ? hoverClassName : defaultClassName
                }`}
              />
            ))}

            {/* Main Heading */}
            <div
              className="absolute w-[541px] top-0 left-[196px] font-bold text-[160px] tracking-[-8.00px] leading-[144px] whitespace-nowrap text-neutral-900"
            >
              Portfolio
            </div>

            {/* Year */}
            <div className="absolute top-0 left-[738px] font-bold text-neutral-900 text-4xl tracking-[-2px] leading-[48px] whitespace-nowrap">
              2025
            </div>

            {/* Subtitle */}
            <h1 className="absolute w-[985px] top-[152px] left-0 font-bold text-neutral-900 text-4xl text-center tracking-[-2.00px] leading-[48px]">
              Fresh Graduate Data Scientist
            </h1>

            {/* Description */}
            <p className="absolute w-[882px] top-[201px] left-[52px] font-normal text-[#333333] text-lg text-center tracking-[-0.18px] leading-6">
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
