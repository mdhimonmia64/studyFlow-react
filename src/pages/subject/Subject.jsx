import { useEffect, useState } from "react";
import { VscChecklist } from "react-icons/vsc";
import { IoAddOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const Subject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const name = e.target.name.value;
      const color = e.target.color.value;

      const subjectData = {
        name,
        color,
      };

      const res = await fetch("/api/subjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(subjectData),
      });

      const data = await res.json();
      toast.success(data.message);
      if (!res.ok) {
        throw new Error(data.message || "Failed to add subject");
      }
      await fetchSubject();
      e.target.reset();
      setIsModalOpen(false);
    } catch (error) {
      toast.error("something is want wrong!");
      console.error(error);
    }
  };

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

  const handleDelete = async (id) => {
    const res = await fetch(`/api/subjects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    fetchSubject();
    toast.success(data.message);
  };

  useEffect(() => {
    fetchSubject();
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Subjects</h1>

          <p>Every Subject you're studying, and how much of it is done.</p>
        </div>

        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-[#0e7c66] text-white"
          >
            <IoAddOutline size={22} />
            Add Subject
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 p-5">
        {subject.map((sub) => {
          return (
            <div
              key={sub._id}
              data-aos="fade-up"
              data-aos-duration="500"
              className="group relative overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:scale-150"
                style={{ backgroundColor: sub.color || "#10b981" }}
              />
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
                    style={{
                      backgroundColor: `${sub.color || "#10b981"}18`,
                      color: sub.color || "#10b981",
                    }}
                  >
                    <VscChecklist size={24} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate font-bold text-base-content">
                      {sub.name}
                    </h3>
                    <p className="mt-1 text-xs text-base-content/50">
                      Subject overview
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={`Delete ${sub.name}`}
                  onClick={() => handleDelete(sub._id)}
                  className="rounded-xl p-2 text-base-content/40 transition-all duration-200 hover:bg-red-50 hover:text-red-500 active:scale-90"
                >
                  <MdDeleteOutline size={21} />
                </button>
              </div>

              <div className="my-5 h-px bg-base-300/70" />

              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-base-content/50">
                    Linked tasks
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-lg font-bold text-base-content">
                    <VscChecklist className="text-base-content/50" size={19} />
                    {sub.taskCount ?? 0}
                    <span className="text-sm font-normal text-base-content/50">
                      tasks
                    </span>
                  </p>
                </div>

                <span
                  className="rounded-xl px-3 py-2 text-sm font-bold"
                  style={{
                    backgroundColor: `${sub.color || "#10b981"}18`,
                    color: sub.color || "#10b981",
                  }}
                >
                  {Math.round(
                    Math.min(100, Math.max(0, Number(sub.completedCount) || 0)),
                  )}
                  %
                </span>
              </div>

              <div className="mt-4">
                <div className="h-2.5 overflow-hidden rounded-full bg-base-200">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${Math.min(100, Math.max(0, Number(sub.completedCount) || 0))}%`,
                      backgroundColor: sub.color || "#10b981",
                    }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-base-content/50">
                    Completion progress
                  </span>
                  <span className="font-medium text-base-content/70">
                    {Number(sub.completedCount) >= 100
                      ? "Completed"
                      : "Keep going!"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="aura aura-gold fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block font-medium text-gray-700"
                >
                  Subject Name
                </label>

                <input
                  id="subject"
                  type="text"
                  name="name"
                  placeholder="e.g. JavaScript"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="color"
                  className="mb-1 block font-medium text-gray-700"
                >
                  Subject Color
                </label>

                <input
                  id="color"
                  type="color"
                  name="color"
                  defaultValue="#0e7c66"
                  className="h-12 w-full cursor-pointer rounded-lg border p-1"
                  required
                />
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
                  Add Subject
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Subject;
