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

      <div className=" p-5">
        {filteredTasks.map((task) => {
          return (
            <div
              key={task?._id}
              className="card card-dash m-5 bg-base-100 px-6 py-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={task?.completed}
                    onChange={() => handleToggle(task._id)}
                    className="checkbox checkbox-accent"
                  />

                  <div>
                    <p
                      className={`text-xl font-semibold text-gray-800 ${task?.completed ? "line-through text-gray-200" : ""} `}
                    >
                      {task?.title}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                      <div className="flex items-center gap-2 border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: task?.subject?.color,
                          }}
                        ></div>

                        <p className="text-gray-600">{task?.subject?.name}</p>
                      </div>
                      <p
                        className={`font-medium ${
                          task.priority === "high"
                            ? "text-red-500"
                            : task.priority === "medium"
                              ? "text-yellow-500"
                              : "text-gray-400"
                        } border border-gray-300 rounded-full px-2 py-0.5 bg-gray-100`}
                      >
                        {task.priority}
                      </p>
                      <p className="flex items-center gap-1 text-gray-500">
                        <IoIosTimer size={17} />
                        {task?.minutes} min
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-500"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
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
                  <option disabled={true}>Choose a Subject</option>
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
                  <option disabled={true}>Choose a Goal</option>
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
