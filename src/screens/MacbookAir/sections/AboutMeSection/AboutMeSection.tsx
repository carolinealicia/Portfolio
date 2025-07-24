import { ExternalLinkIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutMeSection = (): JSX.Element => {
  // Education data
  const educationData = [
    {
      period: "2022-2025",
      institution: "RMIT University",
      location: "Melbourne",
      degree: "Bachelor's of Data Science",
    },
    {
      period: "2019-2022",
      institution: "SMAK 5 Penabur",
      location: "Jakarta",
      degree: "School of Maths and Science",
    },
  ];

  // Certification data
  const certificationData = [
    {
      title: "Certified Data Scientist Associate",
      organization: "Datacamp",
      date: "June 2 2023",
      id: "DSA0011545568449",
      link: "https://drive.google.com/file/d/1v2FheoEYvWRvKQazRhouXwCHlNUvUtwX/view?usp=sharing",
    },
  ];

  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-[80px] font-bold text-neutral-900 tracking-[-4.00px] text-center mb-16 font-['DM_Sans',Helvetica]">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile Image */}
          <div className="relative w-[297px] h-[342px]">
            <div className="w-[251px] h-[300px] bg-[#d9d9d9] rotate-[-6.10deg] absolute left-[15px] top-[30px]" />
            <img
              className="w-[282px] h-[325px] object-cover absolute left-[15px] top-0"
              alt="Profile picture"
              src="https://c.animaapp.com/VJabVXvs/img/rectangle-2@2x.png"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 max-w-[570px]">
            {/* Education Section */}
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <h3 className="text-[40px] font-bold text-neutral-900 tracking-[-2.00px] leading-[48px] font-['DM_Sans',Helvetica] mb-4">
                  Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {educationData.map((item, index) => (
                    <div
                      key={index}
                      className="font-['DM_Sans',Helvetica] text-lg tracking-[-0.18px] leading-6"
                    >
                      <p className="font-bold text-black tracking-[-0.03px]">
                        {item.period}
                      </p>
                      <p className="text-[#333333]">
                        {item.institution}, {item.location}
                        <br />
                        {item.degree}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications Section */}
            <Card className="border-none shadow-none">
              <CardContent className="p-0">
                <h3 className="text-[40px] font-bold text-neutral-900 tracking-[-2.00px] leading-[48px] font-['DM_Sans',Helvetica] mb-4">
                  Certifications
                </h3>
                {certificationData.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <a
                      href={cert.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-['DM_Sans',Helvetica] text-lg tracking-[-0.18px] leading-6 group"
                    >
                      <p className="font-bold text-black tracking-[-0.03px]">
                        {cert.title}
                      </p>
                      <p className="text-[#333333]">
                        {cert.organization}, {cert.date}
                        <br />
                        {cert.id}
                      </p>
                    </a>
                    <a
                      href={cert.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="ml-2 mt-1"
                    >
                      <ExternalLinkIcon
                        size={16}
                        className="text-neutral-900"
                      />
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
