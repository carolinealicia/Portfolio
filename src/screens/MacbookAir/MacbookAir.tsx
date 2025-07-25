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
    },
    {
      image: "https://c.animaapp.com/VJabVXvs/img/frame-60-2.svg",
    },
    {
      image: "https://c.animaapp.com/VJabVXvs/img/frame-60-1.svg",
    },
  ];

  const navItems = [
    { type: "link", label: "Home" },
    { type: "link", label: "About" },
    { type: "link", label: "Experience" },
    { type: "logo", label: "Carol's", icon: "https://c.animaapp.com/VJabVXvs/img/ca-icon@2x.png" },
    { type: "link", label: "Project" },
    { type: "link", label: "Github" },
    { type: "link", label: "Design" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1439px] relative">
        {/* Page Sections */}
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
        <nav className="fixed top-[62px] left-1/2 -translate-x-1/2 flex h-[46px] w-[1159px] items-center justify-between rounded-full bg-neutral-900 px-10 shadow-lg">
          {navItems.map((item) => {
            if (item.type === "logo") {
              return (
                <div key={item.label} className="px-10">
                  <div className="flex shrink-0 items-center gap-x-3">
                    <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#2155ff]">
                      <img
                        className="h-[26px] w-auto object-contain"
                        alt="CA Icon"
                        src={item.icon}
                      />
                    </div>
                    <span className="font-['DM_Sans'] font-bold text-white text-[20px] tracking-[-2.00px] leading-[normal]">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            }
            return (
              <Button
                key={item.label}
                variant="ghost"
                className="font-['DM_Sans'] font-normal text-white text-[20px] tracking-[-0.30px] leading-[normal] hover:bg-neutral-700 hover:text-white px-4 py-2 rounded-full"
              >
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};