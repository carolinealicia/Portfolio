import { ArrowUpRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactSection } from "./sections/ContactSection";
import { HomeSection } from "./sections/HomeSection";
import { ProjectsSection } from "./sections/ProjectsSection";

export const MacbookAir = (): JSX.Element => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

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

  // Split nav items for a three-part layout to ensure perfect centering
  const navItems = [
    { type: "link", label: "Home" },
    { type: "link", label: "About" },
    { type: "link", label: "Experience" },
    { type: "logo", label: "Carol's", icon: "https://c.animaapp.com/VJabVXvs/img/ca-icon@2x.png" },
    { type: "link", label: "Project" },
    { type: "link", label: "Github" },
    { type: "link", label: "Design" },
  ];
  
  const leftNavItems = navItems.slice(0, 3);
  const logoItem = navItems[3];
  const rightNavItems = navItems.slice(4);

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
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 flex h-[46px] w-[1159px] items-center justify-center gap-x-12 rounded-full bg-neutral-900 px-8 shadow-lg">
          {/* Left Links */}
          <div className="flex items-center justify-start gap-x-12">
            {leftNavItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="font-['DM_Sans'] font-normal text-white text-[20px] tracking-[-0.30px] leading-[normal] hover:bg-neutral-700 hover:text-white px-2 py-2 rounded-full"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Center Logo */}
          <div
            className="flex justify-center items-center gap-x-2 cursor-pointer"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#2155ff] flex-shrink-0">
              <img
                className="h-[26px] w-auto object-contain"
                alt="CA Icon"
                src={logoItem.icon}
              />
            </div>
            <div
              className="relative transition-all duration-300 ease-in-out"
              style={{ width: isLogoHovered ? 150 : 80 }}
            >
              <div
                className={`absolute inset-0 flex items-center transition-opacity duration-300 ${
                  isLogoHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="font-['DM_Sans'] font-bold text-white text-[20px] tracking-[-2.00px] leading-[normal]">
                  {logoItem.label}
                </span>
              </div>
              <div
                className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-300 ${
                  isLogoHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="font-['DM_Sans'] text-sm text-gray-400 leading-none tracking-[-0.21px] -mb-1">
                  Made by
                </span>
                <span className="font-['DM_Sans'] font-bold text-white text-[20px] leading-tight whitespace-nowrap tracking-[-2px]">
                  Caroline Alicia
                </span>
              </div>
            </div>
          </div>

          {/* Right Links */}
          <div className="flex items-center justify-end gap-x-12">
            {rightNavItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="font-['DM_Sans'] font-normal text-white text-[20px] tracking-[-0.30px] leading-[normal] hover:bg-neutral-700 hover:text-white px-2 py-2 rounded-full"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
