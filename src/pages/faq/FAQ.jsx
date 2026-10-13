
import React, { useMemo, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Clock3,
  CreditCard,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  X,
} from "lucide-react";

const faqCategories = [
  { name: "All Questions", icon: CircleHelp },
  { name: "Getting Started", icon: Sparkles },
  { name: "Study Tools", icon: BookOpen },
  { name: "Account & Security", icon: ShieldCheck },
  { name: "Plans & Pricing", icon: CreditCard },
];

const faqs = [
  {
    category: "Getting Started",
    question: "What is StudyFlow?",
    answer:
      "StudyFlow is a study organization application designed to help students manage subjects, organize tasks, plan study sessions, and work toward their academic goals in one place.",
  },
  {
    category: "Getting Started",
    question: "How do I create a StudyFlow account?",
    answer:
      "Open the registration page, enter the required information, and follow the instructions to create your account. Once registration is complete, sign in to access the features available to your account.",
  },
  {
    category: "Getting Started",
    question: "Is StudyFlow suitable for beginners?",
    answer:
      "Yes. StudyFlow is designed with a straightforward interface so students can start organizing their studies without needing complicated setup.",
  },
  {
    category: "Study Tools",
    question: "Can I organize my subjects?",
    answer:
      "Yes, if subject management is enabled in your account. You can use it to keep your study subjects organized and make your academic workload easier to manage.",
  },
  {
    category: "Study Tools",
    question: "How can I manage my study tasks?",
    answer:
      "Use the task management tools to create tasks and organize your work. Where supported, you can also set due dates and track task completion.",
  },
  {
    category: "Study Tools",
    question: "Can I set study goals?",
    answer:
      "StudyFlow can help you structure your learning goals and keep your study routine focused. Available goal-tracking options depend on the features implemented in your application.",
  },
  {
    category: "Study Tools",
    question: "Can I check my daily study plan?",
    answer:
      "Use the daily planning or Today section to review tasks scheduled for the day, provided those tasks have been configured with the appropriate dates.",
  },
  {
    category: "Account & Security",
    question: "How do I sign in to my account?",
    answer:
      "Open the login page and enter your registered credentials. If you have forgotten your password, use the password recovery option if it is enabled.",
  },
  {
    category: "Account & Security",
    question: "What should I do if I forget my password?",
    answer:
      "Visit the login page and select the Forgot Password option. Follow the instructions sent to your registered email address. If you do not receive an email, check your spam folder.",
  },
  {
    category: "Account & Security",
    question: "Is my account information private?",
    answer:
      "Keep your login credentials private and always sign out on shared devices. The actual privacy and security of your information depend on the application's backend, authentication, and data-handling practices.",
  },
  {
    category: "Plans & Pricing",
    question: "Can I use StudyFlow for free?",
    answer:
      "StudyFlow can offer a free plan for essential study organization. Check the current Pricing page for the plans and features your application actually supports.",
  },
  {
    category: "Plans & Pricing",
    question: "Can I upgrade to a paid plan?",
    answer:
      "An upgrade option can be offered once paid subscriptions and payment processing are implemented. Please check the Pricing page for the currently available options.",
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredFaqs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        faq.category === activeCategory;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenFaq(-1);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setOpenFaq(-1);
  };

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-base-100 to-base-100" />
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto max-w-4xl px-5 pb-14 pt-20 text-center sm:px-8 md:pb-20 md:pt-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <CircleHelp size={17} />
            Help center
          </div>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Frequently asked
            <span className="block text-primary">questions.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-base-content/65 sm:text-lg">
            Have a question about StudyFlow? Find helpful answers
            about getting started, managing your studies, and your account.
          </p>

          {/* Search */}
          <div className="mx-auto mt-9 max-w-2xl">
            <label
              htmlFor="faq-search"
              className="sr-only"
            >
              Search frequently asked questions
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 shadow-lg shadow-base-300/20 transition focus-within:border-primary">
              <Search
                size={21}
                className="shrink-0 text-base-content/45"
              />

              <input
                id="faq-search"
                type="search"
                value={searchTerm}
                onChange={(event) => handleSearch(event.target.value)}
                placeholder="Search your questions..."
                className="input input-ghost h-14 min-w-0 flex-1 border-0 bg-transparent px-0 outline-none focus:outline-none"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  aria-label="Clear search"
                  className="rounded-lg p-2 text-base-content/50 transition hover:bg-base-200 hover:text-base-content"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <p className="mt-3 text-xs text-base-content/50">
              Search by topic, question, or keyword.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-12">
          {/* Categories */}
          <aside>
            <div className="rounded-3xl border border-base-300 bg-base-100 p-4 sm:p-5 lg:sticky lg:top-24">
              <h2 className="px-3 pb-4 text-sm font-bold uppercase tracking-wider text-base-content/50">
                Browse by category
              </h2>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                {faqCategories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.name;

                  return (
                    <button
                      key={category.name}
                      type="button"
                      onClick={() => handleCategoryChange(category.name)}
                      aria-pressed={isActive}
                      className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition lg:w-full ${
                        isActive
                          ? "bg-primary text-primary-content shadow-sm"
                          : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 hidden rounded-2xl bg-base-200/70 p-4 lg:block">
                <div className="flex items-center gap-2 font-semibold">
                  <Target size={18} className="text-primary" />
                  Need a quick answer?
                </div>
                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  Search a keyword or select a category to find the
                  information you need.
                </p>
              </div>
            </div>
          </aside>

          {/* Questions */}
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  {activeCategory}
                </h2>
                <p className="mt-2 text-sm text-base-content/60">
                  {filteredFaqs.length}{" "}
                  {filteredFaqs.length === 1 ? "question" : "questions"} found
                </p>
              </div>
            </div>

            {filteredFaqs.length > 0 ? (
              <div className="space-y-3">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <article
                      key={faq.question}
                      className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                        isOpen
                          ? "border-primary/40 bg-primary/[0.025] shadow-md shadow-primary/5"
                          : "border-base-300 bg-base-100 hover:border-base-content/20"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? -1 : index)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                      >
                        <span className="flex items-start gap-3 sm:gap-4">
                          <span
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                              isOpen
                                ? "bg-primary text-primary-content"
                                : "bg-base-200 text-base-content/60"
                            }`}
                          >
                            <CircleHelp size={17} />
                          </span>

                          <span className="pt-1 text-sm font-bold leading-6 sm:text-base">
                            {faq.question}
                          </span>
                        </span>

                        <ChevronDown
                          size={20}
                          className={`shrink-0 text-base-content/50 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 pl-16 sm:px-6 sm:pl-[4.5rem]">
                          <div className="border-t border-base-300 pt-4">
                            <p className="text-sm leading-7 text-base-content/70 sm:text-base">
                              {faq.answer}
                            </p>
                            <span className="mt-4 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/55">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-base-300 px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-base-200 text-base-content/50">
                  <Search size={25} />
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  No questions found
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-base-content/60">
                  We couldn't find any questions matching your search.
                  Try another keyword or browse all questions.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All Questions");
                    setOpenFaq(0);
                  }}
                  className="btn btn-primary mt-6 rounded-xl"
                >
                  View all questions
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-base-300 bg-base-200/50 p-7 sm:p-10 md:p-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                <Clock3 size={15} />
                We're here to help
              </div>

              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                Still have questions?
              </h2>

              <p className="mt-4 leading-7 text-base-content/65">
                If you couldn't find the answer you were looking for,
                get in touch through our contact page.
              </p>
            </div>

            <Link
              to="/contact"
              className="btn btn-primary shrink-0 rounded-xl px-6"
            >
              Contact Support
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
