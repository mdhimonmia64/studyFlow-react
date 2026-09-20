import React from "react";
import { FiActivity } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { MdAutoAwesomeMotion } from "react-icons/md";
import SectionHeader from "./shared/SectionHeader";
import FeaturedCard from "./shared/FeaturedCard";

const Studying = () => {
  return (
    <section className="container mx-auto text-center py-[75px] space-y-10">
      <SectionHeader
        title={"Studying without a system is exhausting"}
        subTitle={
          "You're not lacking discipline. You're lacking a place where your goals turn into today's tasks."
        }
      />

      <div className="grid grid-cols-3 gap-4">
        <FeaturedCard
          icon={<GoGoal className="mx-auto text-[#0e7c66] text-3xl" />}
          title="Goals stay vague"
          description="Without a clear plan, your goals remain abstract and difficult to achieve."
        />
        <FeaturedCard
          icon={<FiActivity className="mx-auto text-[#0e7c66] text-3xl" />}
          title="Motivation fades fast"
          description="Without something to point at, it's hard to tell if this week
            actually went anywhere."
        />
        <FeaturedCard
          icon={
            <MdAutoAwesomeMotion className="mx-auto text-[#0e7c66] text-3xl" />
          }
          title="Plans live everywhere"
          description="A to-do app, a notes app, a calendar - and none of them talk to each
            other."
        />
      </div>
    </section>
  );
};

export default Studying;
