
import React from "react";
import { Link } from "react-router";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Get started with StudyFlow and create your personal learning space in just a few moments.",
    icon: GraduationCap,
    color: "text-primary",
    bg: "bg-primary/10",
    points: ["Quick setup", "Personal dashboard"],
  },
  {
    number: "02",
    title: "Organize Your Subjects",
    description:
      "Keep your subjects organized in one place so you always know what to study next.",
    icon: LayoutDashboard,
    color: "text-secondary",
    bg: "bg-secondary/10",
    points: ["Manage subjects", "Stay organized"],
  },
  {
    number: "03",
    title: "Plan Your Study Tasks",
    description:
      "Break your workload into manageable tasks, set due dates, and build a consistent routine.",
    icon: ClipboardList,
    color: "text-accent",
    bg: "bg-accent/10",
    points: ["Create tasks", "Manage deadlines"],
  },
  {
    number: "04",
    title: "Track Your Progress",
    description:
      "Review your completed work, follow your goals, and keep moving toward better study habits.",
    icon: TrendingUp,
    color: "text-success",
    bg: "bg-success/10",
    points: ["Monitor progress", "Reach your goals"],
  },
];

const HowItWorks = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-base-100 text-base-content">
      {/* Hero */}
      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-base-100 to-base-100" />
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 text-center sm:px-8 md:pb-24 md:pt-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles size={16} />
            A smarter way to study
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Your path to better studying,
            <span className="mt-2 block text-primary">
              made simple.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-base-content/65 sm:text-lg">
            From planning your daily tasks to achieving your academic
            goals, StudyFlow helps you turn your study routine into a
            simple, organized, and productive experience.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="btn btn-primary rounded-xl px-6 shadow-lg shadow-primary/20"
            >
              Get Started Free
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/features"
              className="btn btn-outline rounded-xl px-6"
            >
              Explore Features
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-base-content/65">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-success" />
              Simple to use
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-success" />
              Organized learning
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-success" />
              Goal-oriented planning
            </span>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              The process
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Four simple steps to get started
            </h2>
            <p className="mt-4 leading-7 text-base-content/65">
              No complicated process. Just a few simple steps to help
              you take control of your study routine.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative rounded-3xl border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.bg} ${step.color}`}
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="text-3xl font-extrabold text-base-content/10">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-base-content/65">
                    {step.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-base-300 pt-5">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm text-base-content/75"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-success"
                        />
                        {point}
                      </div>
                    ))}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-10 z-10 hidden rounded-full border border-base-300 bg-base-100 p-1.5 text-base-content/40 lg:block">
                      <ArrowRight size={17} />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">
              <Target size={16} />
              Built for students
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
              Everything you need,
              <span className="block text-primary">
                all in one place.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-base-content/65">
              Keep your subjects, tasks, and learning goals organized
              in a single workspace. Spend less time figuring out what
              to do and more time making progress.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Keep your study tasks organized",
                "Make your daily priorities clear",
                "Build consistent study habits",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="rounded-full bg-success/10 p-1.5 text-success">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/register"
              className="btn btn-primary mt-8 rounded-xl px-6"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Decorative UI preview */}
          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />

            <div className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-base-300 pb-5">
                <div>
                  <p className="text-sm text-base-content/55">
                    STUDYFLOW WORKSPACE
                  </p>
                  <h3 className="mt-1 text-xl font-bold">
                    Your study overview
                  </h3>
                </div>
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <GraduationCap size={25} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-primary/10 p-4">
                  <ClipboardList size={22} className="text-primary" />
                  <p className="mt-4 text-sm text-base-content/60">
                    Study tasks
                  </p>
                  <p className="mt-1 text-lg font-bold">Stay organized</p>
                </div>

                <div className="rounded-2xl bg-secondary/10 p-4">
                  <Target size={22} className="text-secondary" />
                  <p className="mt-4 text-sm text-base-content/60">
                    Study goals
                  </p>
                  <p className="mt-1 text-lg font-bold">Stay focused</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-base-300 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-success/10 p-2 text-success">
                    <ListChecks size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold">Your study routine</h4>
                    <p className="text-xs text-base-content/55">
                      Example checklist
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    { title: "Review subject notes", width: "w-4/5" },
                    { title: "Complete planned tasks", width: "w-3/5" },
                    { title: "Review your learning goals", width: "w-2/3" },
                  ].map((item) => (
                    <div key={item.title}>
                      <div className="mb-2 flex items-center gap-2 text-sm">
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-success"
                        />
                        <span>{item.title}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-base-200">
                        <div
                          className={`h-full rounded-full bg-primary/60 ${item.width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-base-200/70 p-4">
                <Rocket size={22} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">One step at a time</p>
                  <p className="mt-1 text-sm leading-6 text-base-content/60">
                    Small, consistent actions can help you develop a
                    better study routine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 pt-10 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-content sm:px-12 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-content/15">
              <GraduationCap size={34} />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Make your next study session count.
            </h2>

            <p className="mt-5 leading-8 opacity-85">
              Start organizing your subjects, planning your tasks,
              and working toward your academic goals with StudyFlow.
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

export default HowItWorks;
