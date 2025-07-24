import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ProjectsSection = (): JSX.Element => {
  // Left column project data
  const leftProjects = [
    {
      title: "Cyber Security",
      date: "June 2025",
      description:
        "Designed and implemented secure file-sharing solutions using GPG in Kali Linux, Demonstrated symmetric and asymmetric cryptography, digital signatures, and secure system design principles like the CIA triad in healthcare systems.",
    },
    {
      title: "Deep Learning Project",
      date: "September 2024",
      description:
        "Designed a deep learning system using Neural Networks to predict labels on meme images. Process involve tokenizing text, image preprocessing, base model using Bert and ResNet-50 model, and fine tuning.",
    },
    {
      title: "Time Series Analysis",
      date: "May 2024",
      description:
        "Analyzed a time series Global Land Temperature Anomalies dataset.\nFound best ARIMA model using ACF-PACF analysis, EACF, and BIC tables.",
    },
  ];

  // Right column project data
  const rightProjects = [
    {
      title: "Artificial Intelligence\nPacman Project",
      date: "November 2024",
      description:
        "Build general search algorithms with python, then implement minimax and expectimax search to design agents for pacman game.",
    },
    {
      title: "Machine Learning Project",
      date: "June 2024",
      description:
        "Predicted time series of energy use data. Compared non-neural and neural models, then compared it with published research papers. Received a 49/50 score.",
    },
    {
      title: "Data Wrangling with R",
      date: "May 2023",
      description:
        "Preprocessed data, wrangle multiple real life data sets.\nSelected, performed and justified data validation processes for raw datasets.",
    },
  ];

  return (
    <section className="relative w-full py-24">
      <div className="container mx-auto">
        <h2 className="text-[80px] font-bold text-neutral-900 text-center tracking-[-4.00px] leading-[48px] mb-24 [font-family:'DM_Sans',Helvetica]">
          Projects
        </h2>

        <div className="flex flex-row gap-28 justify-center">
          {/* Left column */}
          <div className="flex flex-col gap-12 max-w-[453px]">
            {leftProjects.map((project, index) => (
              <Card key={`left-${index}`} className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-neutral-900 text-3xl tracking-[-1.50px] leading-[48px]">
                      {project.title}
                    </h3>
                    <div className="[font-family:'DM_Sans',Helvetica] text-gray-400 text-lg tracking-[-0.18px] leading-6">
                      <span className="font-bold tracking-[-0.03px]">
                        {project.date}
                        <br />
                      </span>
                      <span className="tracking-[-0.03px]">
                        {project.description}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline separator */}
          <div className="relative flex items-center justify-center">
            <Separator orientation="vertical" className="h-[673px]" />
            <div className="absolute inset-0 flex flex-col justify-between items-center py-6">
              {[...Array(3)].map((_, index) => (
                <div
                  key={`dot-${index}`}
                  className="w-3 h-3 rounded-full bg-blue-600"
                />
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-[71px] max-w-[453px]">
            {rightProjects.map((project, index) => (
              <Card key={`right-${index}`} className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-neutral-900 text-3xl tracking-[-1.50px] leading-[48px] whitespace-pre-line">
                      {project.title}
                    </h3>
                    <div className="[font-family:'DM_Sans',Helvetica] text-gray-400 text-lg tracking-[-0.18px] leading-6">
                      <span className="font-bold tracking-[-0.03px]">
                        {project.date}
                        <br />
                      </span>
                      <span className="tracking-[-0.03px]">
                        {project.description}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <h2 className="text-4xl font-bold text-neutral-900 text-center mt-16 [font-family:'DM_Sans',Helvetica]">
          Let's Connect!
        </h2>
      </div>
    </section>
  );
};
