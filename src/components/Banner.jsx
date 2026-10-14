import SectionHeader from "./shared/SectionHeader";

const Banner = () => {
  return (
    <div className="container mx-auto text-center py-[75px] space-y-16">
      <span className="badge">Built for students who like to see progress</span>
      <SectionHeader
        title={"Turn big goals into daily tasks you'll actually finish"}
        subTitle={
          "Set a goal,break it into tasks, and watch a progress bar move every time you check one off. No spreadsheets, on guessing what to study next.js"
        }
      />
      <div className="flex gap-2 items-center justify-center">
        <button className="btn bg-[#0e7c66] text-white border-none">
          Get Started
        </button>
        <button className="btn">See how it works</button>
      </div>

      <div className="aura aura-rainbow w-full max-w-[550px] mx-auto rounded-2xl p-[2px]">
        <div className="card bg-base-100 rounded-[14px] shadow-sm space-y-4 text-base-content py-5 px-[30px]">
          <div className="flex justify-between gap-4">
            <h2 className="font-bold text-2xl">Today's progress</h2>
            <p>50% complete</p>
          </div>

          <progress
            className="progress progress-info  text-[#0e7c66]"
            value="50"
            max="100"
          />

          <ul className="space-y-5">
            <li className="flex items-center gap-4 border border-[#0e7c66] rounded-md p-2">
              🧮 Solve 5 math problems
            </li>
            <li className="flex items-center gap-4 border border-[#0e7c66] rounded-md p-2">
              📖 Read 20 pages of a book
            </li>
            <li className="flex items-center gap-4 border border-[#0e7c66] rounded-md p-2 line-through">
              ✍️ Write a journal entry
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
