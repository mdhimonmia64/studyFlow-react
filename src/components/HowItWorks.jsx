import React from "react";
import SectionHeader from "./shared/SectionHeader";
import HowItWorksCard from "./shared/HowItWorksCard";

const HowItWorks = () => {
  const steps = [
    {
      title: "Set a goal",
      description:
        "Define a clear and achievable goal that gives you direction and keeps you focused on what you want to accomplish.",
    },
    {
      title: "Break it into daily tasks",
      description:
        "Turn your bigger goal into small, manageable daily tasks that make your study routine easier and more effective.",
    },
    {
      title: "Track your progress",
      description:
        "Monitor your completed tasks and progress regularly to stay motivated and see how far you have come.",
    },
    {
      title: "Create a study routine",
      description:
        "Build a simple daily study routine that helps you manage your time and stay organized throughout the day.",
    },
    {
      title: "Prioritize your tasks",
      description:
        "Focus on the most important tasks first so you can make better use of your study time and energy.",
    },
    {
      title: "Review what you learned",
      description:
        "Take a few minutes to review your lessons and strengthen your understanding of important topics.",
    }
  ];

  return (
    <div className="container mx-auto py-[75px] space-y-10">
      <SectionHeader title={"How it Works"} />
      <div className="grid grid-cols-3 gap-4">
        {steps.map((step, index) => {
          return (
            <HowItWorksCard key={index} index={index} step={step}/>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
