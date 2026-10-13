import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChartNoAxesCombined,
  Clock3,
  GraduationCap,
  ListTodo,
  Target,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ListTodo,
    title: "Smart Task Management",
    description:
      "Organize your study tasks, manage deadlines, and keep track of what needs to be done.",
    color: "text-primary",
    bg: "bg-primary/10",
    number: "01",
  },
  {
    icon: CalendarDays,
    title: "Daily Study Planner",
    description:
      "Plan your day with a clear overview of your study activities and upcoming tasks.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    number: "02",
  },
  {
    icon: BookOpen,
    title: "Subject Organization",
    description:
      "Keep your subjects organized so your learning materials and study activities stay structured.",
    color: "text-accent",
    bg: "bg-accent/10",
    number: "03",
  },
  {
    icon: Target,
    title: "Study Goals",
    description:
      "Set meaningful academic goals, stay focused, and build a consistent study routine.",
    color: "text-info",
    bg: "bg-info/10",
    number: "04",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Progress Tracking",
    description:
      "Review your completed tasks and understand how consistently you are working toward your goals.",
    color: "text-success",
    bg: "bg-success/10",
    number: "05",
  },
  {
    icon: Clock3,
    title: "Deadline Awareness",
    description:
      "Keep due dates in view and prioritize your work before important deadlines arrive.",
    color: "text-warning",
    bg: "bg-warning/10",
    number: "06",
  },
];

const Features = () => {
    return (
         <main className="min-h-screen bg-base-100 text-base-content">
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Zap size={16} />
              Everything you need to study smarter
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your studies.
              <span className="block text-primary">
                Your goals.
              </span>
              Your success.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-base-content/70 sm:text-lg">
              Meet StudyFlow, your study organization companion.
              Plan your day, organize subjects, manage tasks, and
              stay focused on what matters most.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="btn btn-primary rounded-xl px-6"
              >
                Start Studying
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/"
                className="btn btn-outline rounded-xl px-6"
              >
                Explore StudyFlow
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-base-content/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-success" />
                Easy organization
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-success" />
                Student-friendly
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />

            <div className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-base-content/60">
                    YOUR STUDY SPACE
                  </p>
                  <h2 className="mt-1 text-xl font-bold">
                    Stay on track
                  </h2>
                </div>

                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <GraduationCap size={28} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-primary/10 p-4">
                  <BookOpen className="text-primary" size={23} />
                  <p className="mt-4 text-sm text-base-content/70">
                    Study subjects
                  </p>
                  <p className="mt-1 text-2xl font-bold">Organized</p>
                </div>

                <div className="rounded-2xl bg-secondary/10 p-4">
                  <Target className="text-secondary" size={23} />
                  <p className="mt-4 text-sm text-base-content/70">
                    Learning goals
                  </p>
                  <p className="mt-1 text-2xl font-bold">Focused</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-base-300 p-4 sm:p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-success/10 p-2 text-success">
                    <ListTodo size={21} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Study checklist</h3>
                    <p className="text-xs text-base-content/60">
                      A simple way to stay organized
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Review today's lessons",
                    "Organize study tasks",
                    "Work toward your goals",
                  ].map((task) => (
                    <div
                      key={task}
                      className="flex items-center gap-3 rounded-xl bg-base-200/60 p-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-success"
                      />
                      <span className="text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-base-200/60 p-4">
                <ChartNoAxesCombined
                  size={24}
                  className="text-primary"
                />
                <p className="text-sm text-base-content/70">
                  Small steps every day lead to meaningful progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Powerful features
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Everything in one
              <span className="text-primary"> study space</span>
            </h2>

            <p className="mt-5 leading-7 text-base-content/70">
              Spend less time organizing your workload and more time
              learning with tools designed to keep your studies structured.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`rounded-2xl p-4 ${feature.bg} ${feature.color}`}
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-semibold text-base-content/30">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-base-content/70">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                    Built for better learning
                    <ArrowRight size={16} />
                  </div>

                  <div className="absolute -bottom-12 -right-12 -z-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-content sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl">
            <GraduationCap className="mx-auto mb-5" size={42} />

            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to make your study time count?
            </h2>

            <p className="mt-5 leading-7 opacity-85">
              Build better study habits, stay organized, and take
              the next step toward your academic goals.
            </p>

            <Link
              to="/register"
              className="btn mt-8 rounded-xl border-0 bg-base-100 px-7 text-primary hover:bg-base-200"
            >
              Get Started Free
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
    );
};

export default Features;