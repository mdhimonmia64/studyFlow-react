
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Clock3,
  Flame,
  CheckCircle2,
  Target,
  Plus,
  ArrowUpRight,
  BookOpen,
  Play,
  Pause,
  RotateCcw,
  CalendarDays,
  Sparkles,
  CircleCheck,
} from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "JavaScript ES6 Revision",
    category: "JavaScript",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    title: "React Context API Practice",
    category: "React",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "MongoDB Aggregation",
    category: "Database",
    priority: "High",
    completed: false,
  },
];

const subjects = [
  { name: "JavaScript", progress: 85, color: "bg-emerald-500" },
  { name: "React & Web Development", progress: 60, color: "bg-blue-500" },
  { name: "Database", progress: 45, color: "bg-violet-500" },
];

const weeklyData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3.5 },
  { day: "Wed", hours: 2 },
  { day: "Thu", hours: 4 },
  { day: "Fri", hours: 3 },
  { day: "Sat", hours: 4.5 },
  { day: "Sun", hours: 1.5 },
];

const Private = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [seconds, setSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const taskProgress = tasks.length
    ? Math.round((completedTasks / tasks.length) * 100)
    : 0;

  useEffect(() => {
    if (!timerRunning) return;

    const interval = setInterval(() => {
      setSeconds((previous) => {
        if (previous <= 1) {
          clearInterval(interval);
          setTimerRunning(false);
          setSessionComplete(true);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerRunning]);

  const toggleTask = (id) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setSeconds(25 * 60);
    setSessionComplete(false);
  };

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const remainingSeconds = value % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const stats = [
    {
      title: "Study Time",
      value: "3h 45m",
      detail: "Today's study time",
      icon: Clock3,
      color: "text-emerald-600",
      background: "bg-emerald-50",
    },
    {
      title: "Study Streak",
      value: "7 Days",
      detail: "Keep it going!",
      icon: Flame,
      color: "text-orange-600",
      background: "bg-orange-50",
    },
    {
      title: "Completed Tasks",
      value: `${completedTasks}/${tasks.length}`,
      detail: "Based on this checklist",
      icon: CheckCircle2,
      color: "text-blue-600",
      background: "bg-blue-50",
    },
    {
      title: "Weekly Goal",
      value: "80%",
      detail: "Demo goal progress",
      icon: Target,
      color: "text-violet-600",
      background: "bg-violet-50",
    },
  ];

  return (
    <div className="space-y-7 mt-10 mx-5">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center ">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles size={14} />
            YOUR LEARNING SPACE
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Welcome back
          </h1>

          <p className="mt-2 text-sm leading-6 text-base-content/60">
            Move forward a little every day. Achieve today's goal.
          </p>
        </div>

        <Link
          to="/dashboard/tasks"
          className="btn btn-primary rounded-xl px-5 shadow-md shadow-primary/15"
        >
          <Plus size={19} />
          New Task
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.title}
              className="card border border-base-300/70 bg-base-100 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="card-body p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-base-content/60">
                      {stat.title}
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                      {stat.value}
                    </h2>
                  </div>

                  <div className={`rounded-2xl p-3 ${stat.background}`}>
                    <Icon size={23} className={stat.color} />
                  </div>
                </div>

                <p className="mt-3 text-xs text-base-content/50">
                  {stat.detail}
                </p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <article className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold">
                    Today's Tasks
                  </h2>
                  <p className="mt-1 text-sm text-base-content/55">
                    Stay focused on what matters.
                  </p>
                </div>

                <Link
                  to="/dashboard/tasks"
                  className="btn btn-ghost btn-sm rounded-lg text-primary"
                >
                  View all
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mt-5 rounded-2xl bg-base-200/60 p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold">
                    Daily progress
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {taskProgress}%
                  </span>
                </div>

                <progress
                  className="progress progress-primary h-2 w-full"
                  value={taskProgress}
                  max="100"
                />

                <p className="mt-2 text-xs text-base-content/55">
                  {completedTasks} of {tasks.length} tasks completed
                </p>
              </div>

              <div className="mt-4 space-y-2">
                {tasks.map((task) => (
                  <label
                    key={task.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition hover:border-primary/40 ${
                      task.completed
                        ? "border-base-300/50 bg-base-200/40"
                        : "border-base-300 bg-base-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="checkbox checkbox-primary checkbox-sm"
                    />

                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-semibold ${
                          task.completed
                            ? "text-base-content/45 line-through"
                            : ""
                        }`}
                      >
                        {task.title}
                      </p>

                      <p className="mt-1 text-xs text-base-content/50">
                        {task.category}
                      </p>
                    </div>

                    <span
                      className={`badge badge-sm ${
                        task.priority === "High"
                          ? "badge-error badge-outline"
                          : "badge-warning badge-outline"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </label>
                ))}
              </div>

              {tasks.length === 0 && (
                <div className="py-8 text-center">
                  <CircleCheck
                    size={34}
                    className="mx-auto text-base-content/30"
                  />
                  <p className="mt-3 font-semibold">No tasks yet</p>
                  <p className="mt-1 text-sm text-base-content/55">
                    Add a task to start your day.
                  </p>
                </div>
              )}
            </div>
          </article>

          <article className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold">
                    Subject Progress
                  </h2>
                  <p className="mt-1 text-sm text-base-content/55">
                    Track your learning journey.
                  </p>
                </div>

                <BookOpen size={22} className="text-primary" />
              </div>

              <div className="mt-5 space-y-6">
                {subjects.map((subject) => (
                  <div key={subject.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold">
                        {subject.name}
                      </span>
                      <span className="text-sm font-bold">
                        {subject.progress}%
                      </span>
                    </div>

                    <div
                      className="h-2 overflow-hidden rounded-full bg-base-200"
                      role="progressbar"
                      aria-label={`${subject.name} progress`}
                      aria-valuenow={subject.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${subject.color}`}
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/dashboard/subject"
                className="btn btn-outline btn-primary mt-6 rounded-xl"
              >
                Explore subjects
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        </div>

        <div className="space-y-6">
          <article className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 p-6 text-white shadow-lg shadow-emerald-900/10">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
                FOCUS MODE
              </span>
              <Clock3 size={21} className="text-white/80" />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Time to focus.
            </h2>

            <p className="mt-1 text-sm text-white/75">
              One session. One goal. No distractions.
            </p>

            <div className="my-7 text-center">
              <div className="text-5xl font-extrabold tracking-widest tabular-nums sm:text-6xl">
                {formatTime(seconds)}
              </div>

              <p className="mt-3 text-xs font-medium text-white/75">
                {sessionComplete
                  ? "Session completed! Great work."
                  : timerRunning
                    ? "Your focus session is running"
                    : "25-minute Pomodoro session"}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  if (sessionComplete) resetTimer();
                  else setTimerRunning((running) => !running);
                }}
                className="btn flex-1 rounded-xl border-0 bg-white text-emerald-800 hover:bg-emerald-50"
              >
                {timerRunning ? (
                  <Pause size={18} />
                ) : (
                  <Play size={18} />
                )}
                {sessionComplete
                  ? "Start again"
                  : timerRunning
                    ? "Pause"
                    : "Start session"}
              </button>

              <button
                type="button"
                onClick={resetTimer}
                aria-label="Reset timer"
                className="btn btn-square rounded-xl border border-white/25 bg-white/10 text-white hover:bg-white/20"
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </article>

          <article className="card border border-base-300/70 bg-base-100 shadow-sm">
            <div className="card-body p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold">Weekly Overview</h2>
                  <p className="mt-1 text-xs text-base-content/55">
                    Study hours · Demo data
                  </p>
                </div>

                <CalendarDays
                  size={21}
                  className="text-primary"
                />
              </div>

              <div className="mt-6 flex h-36 items-end justify-between gap-2">
                {weeklyData.map((item) => (
                  <div
                    key={item.day}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <div className="flex h-full w-full items-end">
                      <div
                        title={`${item.hours} study hours`}
                        className={`w-full rounded-t-lg transition-all duration-300 hover:opacity-70 ${
                          item.day === "Sat"
                            ? "bg-primary"
                            : "bg-primary/20"
                        }`}
                        style={{
                          height: `${(item.hours / 5) * 100}%`,
                          minHeight: "6px",
                        }}
                      />
                    </div>

                    <span className="text-[10px] font-medium text-base-content/55">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-base-200/60 p-3">
                <p className="text-xs text-base-content/55">
                  Total study time
                </p>
                <p className="mt-1 text-xl font-extrabold">
                  {weeklyData
                    .reduce((total, day) => total + day.hours, 0)
                    .toFixed(1)}{" "}
                  hours
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-primary/15 bg-primary/5 p-5">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles size={19} />
              <h3 className="font-bold">A little reminder</h3>
            </div>

            <p className="mt-3 text-sm leading-6 text-base-content/70">
              Progress matters more than perfection. Complete one
              task at a time, and keep moving forward.
            </p>

            <Link
              to="/dashboard/goal"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              Review your goals
              <ArrowUpRight size={16} />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Private;
