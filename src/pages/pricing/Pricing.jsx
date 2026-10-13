
import React, { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Check,
  CircleHelp,
  Crown,
  GraduationCap,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "A simple start for organizing your studies.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: GraduationCap,
    popular: false,
    buttonText: "Get Started Free",
    features: [
      { text: "Personal study dashboard", included: true },
      { text: "Subject organization", included: true },
      { text: "Study task management", included: true },
      { text: "Daily study planning", included: true },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    description: "More tools for students ready to level up.",
    monthlyPrice: 5,
    yearlyPrice: 4,
    icon: Crown,
    popular: true,
    buttonText: "Get Started with Pro",
    features: [
      { text: "Personal study dashboard", included: true },
      { text: "Subject organization", included: true },
      { text: "Study task management", included: true },
      { text: "Daily study planning", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority support", included: true },
    ],
  },
];

const faqs = [
  {
    question: "Is StudyFlow free to use?",
    answer:
      "The Free plan is designed to help you organize your subjects and study tasks without a subscription.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can offer an upgrade option when paid subscriptions are implemented in your application.",
  },
  {
    question: "Can I cancel a paid subscription?",
    answer:
      "Cancellation terms depend on your subscription and payment setup. Make sure your payment system clearly explains them.",
  },
  {
    question: "Do I need a credit card for the Free plan?",
    answer:
      "The Free plan can be offered without payment details, depending on how you configure registration.",
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen overflow-hidden bg-base-100 text-base-content">
      {/* Hero */}
      <section className="relative isolate px-5 pb-12 pt-20 sm:px-8 md:pb-16 md:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-base-100 to-base-100" />
        <div className="pointer-events-none absolute -right-20 top-12 -z-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles size={16} />
            Simple and transparent pricing
          </div>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Invest in your
            <span className="block text-primary">learning journey.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-base-content/65 sm:text-lg">
            Choose a plan that fits your study routine. Start free,
            stay organized, and find the tools that work best for you.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-2xl border border-base-300 bg-base-200/70 p-1.5">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                billing === "monthly"
                  ? "bg-primary text-primary-content shadow"
                  : "text-base-content/65 hover:text-base-content"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                billing === "yearly"
                  ? "bg-primary text-primary-content shadow"
                  : "text-base-content/65 hover:text-base-content"
              }`}
            >
              Yearly
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  billing === "yearly"
                    ? "bg-primary-content/15"
                    : "bg-success/15 text-success"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2 md:gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price =
              billing === "yearly"
                ? plan.yearlyPrice
                : plan.monthlyPrice;

            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${
                  plan.popular
                    ? "border-primary bg-primary/[0.04] shadow-lg shadow-primary/10"
                    : "border-base-300 bg-base-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-xs font-bold text-primary-content shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold">
                      {plan.name}
                    </h2>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-base-content/65">
                      {plan.description}
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl p-3 ${
                      plan.popular
                        ? "bg-primary/10 text-primary"
                        : "bg-base-200 text-base-content"
                    }`}
                  >
                    <Icon size={26} />
                  </div>
                </div>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${price}
                  </span>
                  <span className="text-sm text-base-content/60">
                    / user / month
                  </span>
                </div>

                <p className="mt-2 text-xs text-base-content/55">
                  {plan.name === "Free"
                    ? "Free forever"
                    : billing === "yearly"
                      ? "Billed annually at $48 per year"
                      : "Billed monthly"}
                </p>

                <Link
                  to="/register"
                  className={`btn mt-7 w-full rounded-xl ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight size={18} />
                </Link>

                <div className="my-7 border-t border-base-300" />

                <p className="text-sm font-bold">
                  What's included
                </p>

                <ul className="mt-5 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-start gap-3 text-sm ${
                        feature.included
                          ? "text-base-content/80"
                          : "text-base-content/40"
                      }`}
                    >
                      {feature.included ? (
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-success"
                        />
                      ) : (
                        <X
                          size={18}
                          className="mt-0.5 shrink-0"
                        />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-base-content/50">
          Pricing shown in USD for demonstration. Pro features,
          subscriptions, billing, and payments must be implemented
          before these plans are offered to customers.
        </p>
      </section>

      {/* Why StudyFlow */}
      <section className="border-y border-base-300 bg-base-200/40 px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Zap className="mx-auto text-primary" size={32} />
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A better way to organize your studies
            </h2>
            <p className="mt-4 leading-7 text-base-content/65">
              Start with the essentials and choose additional tools
              when they become useful for your learning routine.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Start simple",
                text: "Get organized with the essential study tools.",
              },
              {
                title: "Stay flexible",
                text: "Choose the plan that fits your needs.",
              },
              {
                title: "Focus on learning",
                text: "Spend more time studying and less time planning.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Check size={23} />
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-base-content/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <CircleHelp className="mx-auto text-primary" size={32} />
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base-content/65">
              Everything you need to know about our plans.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="collapse collapse-arrow rounded-2xl border border-base-300 bg-base-100"
              >
                <input
                  type="radio"
                  name="pricing-faq"
                  aria-label={faq.question}
                  checked={openFaq === index}
                  onChange={() => setOpenFaq(index)}
                />

                <div className="collapse-title pr-12 text-sm font-bold sm:text-base">
                  {faq.question}
                </div>

                <div className="collapse-content text-sm leading-7 text-base-content/65">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-6 py-12 text-center text-primary-content sm:px-12 sm:py-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Start building better study habits.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 opacity-85">
            Create your StudyFlow account and bring your study routine
            into one organized space.
          </p>
          <Link
            to="/register"
            className="btn mt-7 rounded-xl border-0 bg-base-100 px-7 text-primary hover:bg-base-200"
          >
            Get Started Free
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
