import React from "react";
import SectionHeader from "./shared/SectionHeader";
import PricingCard from "./shared/PricingCard";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      pricingType: "Free",
      description: "Essential tools to organize your study routine.",
      price: 500,
      expiration: "Forever",
      features: [
        "Access to basic features",
        "Create daily study tasks",
        "Track basic study progress",
        "Limited storage space",
        "Set personal study goals",
        "Basic progress reports",
        "Community support",
      ],
    },
    {
      id: 2,
      pricingType: "Pro",
      description: "Advanced tools to improve your learning progress.",
      price: 999,
      expiration: "1 Year",
      features: [
        "Access to all features",
        "Unlimited study tasks",
        "Advanced progress tracking",
        "Increased storage space",
        "Custom study goals",
        "Detailed progress reports",
        "Priority support",
      ],
    },
  ];
  return (
    <section className="container mx-auto py-12 space-y-8">
      <SectionHeader
        title={"Simple Pricing"}
        subTitle={"Start free. Upgrade if you outgrow it."}
      />
      <div className="grid grid-cols-2 gap-4 max-w-[700px] mx-auto">
        {plans.map((plan) => {
          return <PricingCard key={plan.id} plan={plan} />;
        })}
      </div>
    </section>
  );
};

export default Pricing;
