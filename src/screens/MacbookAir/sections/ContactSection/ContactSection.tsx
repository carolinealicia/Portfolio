import {
  ArrowRightIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const ContactSection = (): JSX.Element => {
  const contactInfo = [
    { text: "+61 404084618", icon: <PhoneIcon className="h-5 w-5" /> },
    {
      text: "carolinealiciatan@gmail.com",
      icon: <MailIcon className="h-5 w-5" />,
    },
    { text: "Melbourne, Australia", icon: <MapPinIcon className="h-5 w-5" /> },
    {
      text: "linkedin.com/in/caroline-alicia-tan",
      icon: <LinkedinIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <h2 className="font-['DM_Sans',Helvetica] font-bold text-neutral-900 text-[80px] text-center tracking-[-4.00px] leading-[48px] mb-16">
          Let&apos;s Connect!
        </h2>

        <Card className="w-full max-w-5xl border-2 border-solid border-gray-200 rounded-[50px] backdrop-blur-[7.5px] bg-transparent shadow-none">
          <CardContent className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex w-10 h-9 items-center justify-center bg-[#cdd8ff] rounded-[50px]">
                <MailIcon className="w-8 h-8" />
              </div>
              <Input
                className="border-none text-xl font-medium font-['Urbanist',Helvetica] tracking-[-0.30px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-black"
                placeholder="Enter Email Address"
              />
            </div>
            <Button className="w-[57px] h-9 rounded-[60px] bg-[#2155ff] p-0 flex items-center justify-center">
              <ArrowRightIcon className="w-[21px] h-[21px] text-white" />
            </Button>
          </CardContent>
        </Card>

        <div className="mt-16 flex flex-col gap-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="text-[#333333]">{item.icon}</div>
              <div className="font-body font-[number:var(--body-font-weight)] text-[#333333] text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
