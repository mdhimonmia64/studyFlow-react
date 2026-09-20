import React from "react";
import SectionHeader from "./shared/SectionHeader";
import FeaturedCard from "./shared/FeaturedCard";
import {
  FiActivity,
  FiTarget,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

const Featured = () => {
  return (
    <div className="container mx-auto py-[75px] space-y-10">
      <SectionHeader
        title={"Everything a study session needs"}
        subTitle={
          "Nothing you don't need, nothing you have to configure for an hour first."
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <FeaturedCard
          icon={<FiActivity className="mx-auto text-3xl text-[#0e7c66]" />}
          title="Track Your Progress"
          description="Keep track of your daily activities and see how much you are improving over time."
        />

        <FeaturedCard
          icon={<FiTarget className="mx-auto text-3xl text-[#0e7c66]" />}
          title="Set Clear Goals"
          description="Create simple and achievable study goals to stay focused and move forward."
        />

        <FeaturedCard
          icon={<FiTrendingUp className="mx-auto text-3xl text-[#0e7c66]" />}
          title="Build Better Habits"
          description="Develop consistent study habits and turn small daily efforts into meaningful progress."
        />

        <FeaturedCard
          icon={<FiCheckCircle className="mx-auto text-3xl text-[#0e7c66]" />}
          title="Stay Consistent"
          description="Complete your tasks, maintain your routine, and stay consistent with your learning journey."
        />
      </div>
    </div>
  );
};

export default Featured;
