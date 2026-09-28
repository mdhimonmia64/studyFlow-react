import { VscChecklist } from "react-icons/vsc";
import { IoAddOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Goal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState([]);
  const [goals, setGoals] = useState([]);

  const fetchSubject = async () => {
    const res = await fetch("/api/subjects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    setSubject(data.data);
  };

  const handleGoal = async (e) => {
    e.preventDefault();

    try {
      const title = e.target.title.value;
      const target = Number(e.target.target.value);
      const date = e.target.date.value;
      const subject = e.target.subject.value;

      const goalData = {
        title,
        target,
        date,
        subject,
      };
      const res = await fetch("/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(goalData),
      });

      const data = await res.json();
      toast.success(data.message);
      if (!res.ok) {
        throw new Error(data.message || "Failed to add subject");
      }
      setIsModalOpen(false);
      await fetchGoal();
    } catch (err) {
      toast.error("something is want wrong!");
      console.error(err);
    }
  };

  const fetchGoal = async () => {
    const res = await fetch("/api/goals", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    setGoals(data.data);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/goals/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    fetchGoal();
    toast.success(data.message);
  };

  console.log(goals);

  useEffect(() => {
    fetchSubject();
    fetchGoal();
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Goal</h1>

          <p>The bigger picture your daily tasks are building toward.</p>
        </div>

        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-[#0e7c66] text-white"
          >
            <IoAddOutline size={22} />
            Add Goal
          </button>
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-3 gap-10 p-5">
        {goals.map((goal) => {
          return (
            <div
              key={goal._id}
              className="card card-dash bg-base-100 shadow-sm py-6 px-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p>{goal?.title}</p>
                </div>
                <div>
                  <MdDeleteOutline
                    className="cursor-pointer"
                    size={22}
                    onClick={() => handleDelete(goal._id)}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 ">
                <div
                  className="h-3 w-3 rounded-full "
                  style={{ backgroundColor: goal?.subject?.color }}
                ></div>
                <p>{goal?.subject?.name}</p>
              </div>

              <div className="flex items-center justify-between pt-5">
                <p className="flex gap-2">
                  <VscChecklist size={22} />
                  {goal?.taskCount} linked tasks
                </p>
                <p className="my-2 text-sm">{Math.round(goal?.completed)}%</p>
              </div>
              <progress
                className="progress progress-accent"
                value={goal?.completed}
                max="100"
              ></progress>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Add Subject</h2>

              <button
                onClick={() => setIsModalOpen(false)}
                className="text-2xl text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleGoal} className="space-y-4">
              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Target
                </label>

                <input
                  type="number"
                  name="target"
                  placeholder="target"
                  className="h-12 w-full cursor-pointer rounded-lg border p-1"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  className="h-12 w-full cursor-pointer rounded-lg border p-1"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Subject
                </label>
                <select
                  name="subject"
                  defaultValue="Pick a color"
                  className="select "
                >
                  <option disabled={true}>Choose a Subject</option>
                  {subject.map((sub) => (
                    <option value={sub?._id} key={sub._id}>
                      {sub.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn"
                >
                  Cancel
                </button>

                <button type="submit" className="btn bg-[#0e7c66] text-white">
                  Add Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Goal;
