import React from "react";
import SectionHeader from "./shared/SectionHeader";

const FAQ = () => {
  return (
    <section className="container mx-auto space-y-8 py-8">
      <SectionHeader title={"Frequently Asked Question"} />
      <div className="space-y-4 max-w-[700px] mx-auto">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">What is StudyFlow?</div>
          <div className="collapse-content text-sm">
            "StudyFlow is a simple learning platform that helps students
            organize study tasks, set goals, and track their progress."
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How can StudyFlow help me study better?
          </div>
          <div className="collapse-content text-sm">
            "StudyFlow helps you break your goals into daily tasks, maintain a
            study routine, and monitor your progress over time."
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Can I track my daily study progress?
          </div>
          <div className="collapse-content text-sm">
            "Yes. You can create daily tasks, mark them as completed, and track
            your overall study progress easily."
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
