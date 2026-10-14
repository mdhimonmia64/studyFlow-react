import { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { IoIosTimer } from "react-icons/io";

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState([]);
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const title = e.target.title.value;
      const subject = e.target.subject.value;
      const goal = e.target.goal.value;
      const when = e.target.date.value;
      const priority = e.target.priority.value;
      const estimated = Number(e.target.time.value);

      const tasksData = {
        title,
        subject,
        goal,
        when,
        priority,
        estimated,
      };

      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(tasksData),
      });

      const data = await res.json();
      toast.success(data.message);
      if (!res.ok) {
        throw new Error(data.message || "Failed to add tasks");
      }
      await fetchTasks();
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

  const fetchTasks = async () => {
    try {
      const res = await fetch("/api/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setTasks(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    await fetchTasks();
    toast.success(data.message);
  };

  const handleToggle = async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}/toggle`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        toast.error(data.message || "Failed to update task");
        return;
      }
      const data = await res.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, completed: !task.completed } : task,
        ),
      );
      toast.success(data.message);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task?.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "done" && task.completed === true) ||
      (statusFilter === "left" && task.completed === false);

    const matchesSubject =
      subjectFilter === "all" ||
      String(task?.subject?._id) === String(subjectFilter);

    return matchesSearch && matchesStatus && matchesSubject;
  });

  useEffect(() => {
    fetchSubject();
    fetchGoal();
    fetchTasks();
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tasks</h1>

          <p>Every Tasks you're added, across every subject.</p>
        </div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-[#0e7c66] text-white"
          >
            <IoAddOutline size={22} />
            Add Tasks
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <label className="input validator w-full">
          <input
            type="search"
            required
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button
          onClick={() => setStatusFilter("all")}
          className={`btn ${
            statusFilter === "all" ? "btn-accent" : "btn-outline btn-accent"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setStatusFilter("done")}
          className={`btn ${
            statusFilter === "done" ? "btn-accent" : "btn-outline btn-accent"
          }`}
        >
          Done
        </button>

        <button
          onClick={() => setStatusFilter("left")}
          className={`btn ${
            statusFilter === "left" ? "btn-accent" : "btn-outline btn-accent"
          }`}
        >
          Left
        </button>
        <select
          name="subjectFilter"
          id="subjectFilter"
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
          className="select"
        >
          <option value="all">All Subjects</option>

          {subject.map((sub) => (
            <option value={sub._id} key={sub._id}>
              {sub.name}
            </option>
          ))}
        </select>
      </div>

      <div className="p-5">
        {filteredTasks.map((task) => {
          return (
            <div
              key={task?._id}
              data-aos="fade-up"
              className={`group m-4 overflow-hidden rounded-2xl border bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                task?.completed
                  ? "border-emerald-200"
                  : "border-base-300 hover:border-emerald-300"
              }`}
            >
              <div
                className={`h-1 w-full ${
                  task?.completed
                    ? "bg-emerald-500"
                    : "bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400"
                }`}
              />

              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div className="flex min-w-0 items-start gap-4">
                  <input
                    type="checkbox"
                    checked={task?.completed}
                    onChange={() => handleToggle(task._id)}
                    aria-label={`Mark ${task?.title} as completed`}
                    className="checkbox checkbox-success mt-1 shrink-0 transition-transform duration-200 hover:scale-110"
                  />

                  <div className="min-w-0">
                    <p
                      className={`break-words text-base font-bold transition-all duration-300 sm:text-lg ${
                        task?.completed
                          ? "text-base-content/40 line-through"
                          : "text-base-content"
                      }`}
                    >
                      {task?.title}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/60 px-3 py-1 text-xs font-medium text-base-content/80">
                        <span
                          className="h-2.5 w-2.5 rounded-full ring-2 ring-base-100"
                          style={{
                            backgroundColor: task?.subject?.color || "#94a3b8",
                          }}
                        />
                        {task?.subject?.name || "No subject"}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold capitalize ${
                          task?.priority === "high"
                            ? "border-red-200 bg-red-50 text-red-600"
                            : task?.priority === "medium"
                              ? "border-amber-200 bg-amber-50 text-amber-600"
                              : "border-sky-200 bg-sky-50 text-sky-600"
                        }`}
                      >
                        {task?.priority || "low"} priority
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full bg-base-200/70 px-3 py-1 text-xs font-medium text-base-content/70">
                        <IoIosTimer size={16} />
                        {task?.minutes ?? 0} min
                      </span>
                    </div>

                    <div className="mt-3">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                          task?.completed
                            ? "text-emerald-600"
                            : "text-base-content/50"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            task?.completed ? "bg-emerald-500" : "bg-amber-400"
                          }`}
                        />
                        {task?.completed ? "Completed" : "In progress"}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label={`Delete ${task?.title}`}
                  title="Delete task"
                  className="shrink-0 rounded-xl border border-transparent p-2.5 text-base-content/40 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-500 active:scale-90"
                  onClick={() => deleteTask(task?._id)}
                >
                  <MdDeleteOutline size={22} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="aura aura-holo fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className=" w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Add Tasks</h2>

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
              <div>
                <label
                  htmlFor="goal"
                  className="mb-1 block font-medium text-gray-700"
                >
                  Goal
                </label>
                <select id="goal" name="goal" className="select ">
                  <option>Choose a Goal</option>
                  {goals.map((goal) => (
                    <option value={goal?._id} key={goal._id}>
                      {goal?.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="when"
                    className="mb-1 block font-medium text-gray-700"
                  >
                    When
                  </label>

                  <input
                    id="when"
                    type="date"
                    name="date"
                    className="h-12 w-full cursor-pointer rounded-lg border p-1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="priority"
                    className="mb-1 block font-medium text-gray-700"
                  >
                    Priority
                  </label>
                  <select id="priority" name="priority" className="select ">
                    <option disabled={true}>Select any one</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="estimated"
                    className="mb-1 block font-medium text-gray-700"
                  >
                    Estimated Time
                  </label>

                  <input
                    id="estimated"
                    type="number"
                    name="time"
                    className="h-12 w-full cursor-pointer rounded-lg border p-1"
                    placeholder="Estimated Time"
                    required
                  />
                </div>
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
                  Add Tasks
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tasks;
