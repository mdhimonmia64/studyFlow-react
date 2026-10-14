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

      <div className="grid grid-cols-3 gap-10 p-5">
        {goals.map((goal) => {
          return (
            <div
              key={goal._id}
              data-aos="fade-up"
              className="group relative m-3 overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl sm:m-4"
            >
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                      <VscChecklist size={24} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="break-words text-base font-bold text-base-content transition-colors duration-300 group-hover:text-emerald-600 sm:text-lg">
                        {goal?.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-base-200"
                          style={{
                            backgroundColor: goal?.subject?.color || "#94a3b8",
                          }}
                        />

                        <p className="text-sm text-base-content/60">
                          {goal?.subject?.name || "No subject"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label={`Delete goal ${goal?.title}`}
                    title="Delete goal"
                    onClick={() => handleDelete(goal._id)}
                    className="shrink-0 rounded-xl p-2 text-base-content/40 transition-all duration-200 hover:bg-red-50 hover:text-red-500 active:scale-90"
                  >
                    <MdDeleteOutline size={22} />
                  </button>
                </div>
                <div className="mt-6 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
                      Linked tasks
                    </p>

                    <p className="mt-1 text-lg font-bold text-base-content">
                      {goal?.taskCount ?? 0}
                      <span className="ml-1 text-sm font-normal text-base-content/50">
                        tasks
                      </span>
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-medium text-base-content/50">
                      Progress
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-emerald-600">
                      {Math.round(goal?.completed ?? 0)}%
                    </p>
                  </div>
                </div>

                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-base-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000 ease-out"
                    style={{
                      width: `${Math.min(100, Math.max(0, Number(goal?.completed) || 0))}%`,
                    }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-base-content/50">
                    Keep moving forward!
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      Number(goal?.completed) >= 100
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {Number(goal?.completed) >= 100
                      ? "Goal completed"
                      : "In progress"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="aura aura-holo fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
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
                <label
                  htmlFor="title"
                  className="mb-1 block font-medium text-gray-700"
                >
                  Title
                </label>

                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="title"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="target"
                  className="mb-1 block font-medium text-gray-700"
                >
                  Target
                </label>

                <input
                  id="target"
                  type="number"
                  name="target"
                  placeholder="target"
                  className="h-12 w-full cursor-pointer rounded-lg border p-1"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="mb-1 block font-medium text-gray-700"
                >
                  Date
                </label>

                <input
                  id="date"
                  type="date"
                  name="date"
                  className="h-12 w-full cursor-pointer rounded-lg border p-1"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block font-medium text-gray-700"
                >
                  Subject
                </label>
                <select
                  name="subject"
                  id="subject"
                  defaultValue="Pick a color"
                  className="select "
                >
                  <option>Choose a Subject</option>
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
