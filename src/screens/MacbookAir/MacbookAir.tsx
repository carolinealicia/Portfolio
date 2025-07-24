import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactSection } from "./sections/ContactSection";
import { HomeSection } from "./sections/HomeSection";
import { ProjectsSection } from "./sections/ProjectsSection";

export const MacbookAir = (): JSX.Element => {
  const experienceCards = [
    {
      image: "https://c.animaapp.com/VJabVXvs/img/frame-60.svg",
      position: "left-[75px]",
    },
    {
      image: "https://c.animaapp.com/VJabVXvs/img/frame-60-2.svg",
      position: "left-[512px]",
    },
    {
      image: "https://c.animaapp.com/VJabVXvs/img/frame-60-1.svg",
      position: "left-[949px]",
    },
  ];

  const navItems = [
    { label: "Home", className: "ml-[-0.50px] mr-[-0.50px]" },
    { label: "About", className: "ml-[-1.50px] mr-[-1.50px]" },
    { label: "Experience", className: "ml-[-24.00px] mr-[-24.00px]" },
    { label: "Project", className: "ml-[-5.50px] mr-[-5.50px]" },
    { label: "Github", className: "ml-[-4.50px] mr-[-4.50px]" },
    { label: "Design", className: "ml-[-4.50px] mr-[-4.50px]" },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:55"
    >
      <div className="bg-white overflow-hidden w-[1439px] relative">
        <div className="w-full relative">
          <HomeSection />
          <AboutMeSection />

          {/* Experience Section */}
          <section className="w-full relative py-16">
            <h2 className="text-center text-[80px] font-bold tracking-[-4.00px] leading-[48px] font-['DM_Sans',Helvetica] text-neutral-900 mb-16">
              My Experience
            </h2>

            <div className="flex justify-center gap-5 px-16">
              {experienceCards.map((card, index) => (
                <div
                  key={index}
                  className="relative inline-flex items-end justify-end"
                >
                  <Card className="border-none shadow-none">
                    <CardContent className="p-0">
                      <img
                        className="w-[416px] h-[508px]"
                        alt="Project frame"
                        src={card.image}
                      />
                    </CardContent>
                  </Card>

                  <Button
                    className="absolute bottom-[114px] right-[114px] w-[114px] h-[114px] p-[21px] bg-[#1d2838] rounded-[57px] rotate-[-90deg]"
                    variant="default"
                  >
                    <ArrowUpRightIcon className="w-full h-full rotate-[90deg]" />
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <ProjectsSection />
          <ContactSection />
        </div>

        {/* Navigation Bar */}
        <nav className="flex w-[1159px] h-[51px] items-center justify-between px-2.5 py-0 fixed top-[62px] left-[140px] bg-neutral-900 rounded-[50px] overflow-hidden border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[50px] before:[background:linear-gradient(250deg,rgba(255,255,255,1)_0%,rgba(203,203,203,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.label === "Carol's" ? (
                <div className="flex w-[307px] h-[86px] items-center justify-center gap-2.5 px-10 py-5 relative mt-[-17.50px] mb-[-17.50px] ml-[-0.29px] rounded-[60px] overflow-hidden">
                  <div className="flex flex-col w-[46px] h-[46px] items-center justify-center gap-2.5 px-[5px] py-0 relative bg-[#2155ff] rounded-[50px]">
                    <img
                      className="relative w-[34px] h-[26px] object-cover"
                      alt="Ca icon"
                      src="https://c.animaapp.com/VJabVXvs/img/ca-icon@2x.png"
                    />
                  </div>

                  <div className="inline-flex items-center justify-center gap-[3px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-white text-xl tracking-[-2.00px] leading-[normal]">
                      Carol&apos;s
                    </div>
                  </div>
                </div>
              ) : index === 3 ? (
                <div className="relative w-px h-px ml-[-0.29px] opacity-0" />
              ) : (
                <Button
                  variant="ghost"
                  className="flex w-[139px] h-[68px] items-center justify-center gap-2.5 px-[43px] py-[21px] relative mt-[-8.50px] mb-[-8.50px] ml-[-0.29px] hover:bg-transparent"
                >
                  <span
                    className={`relative w-fit mt-[-1.00px] ${item.className} [font-family:'DM_Sans',Helvetica] font-normal text-white text-xl tracking-[-0.30px] leading-[normal]`}
                  >
                    {item.label}
                  </span>
                </Button>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};
