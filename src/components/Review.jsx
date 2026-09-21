import React from "react";
import SectionHeader from "./shared/SectionHeader";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment:
        "StudyFlow has made it much easier for me to organize my daily study tasks and stay focused on my goals.",
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      rating: 5,
      comment:
        "I really like the simple and clean design. Tracking my study progress feels easy and motivating.",
    },
    {
      id: 3,
      name: "Michael Smith",
      rating: 4,
      comment:
        "The daily task system helps me break down my study goals into smaller and more manageable steps.",
    },
    {
      id: 4,
      name: "Emma Wilson",
      rating: 5,
      comment:
        "StudyFlow helps me stay consistent with my learning routine. I can easily see what I need to complete each day.",
    },
    {
      id: 5,
      name: "David Rahman",
      rating: 5,
      comment:
        "A very useful platform for students. It keeps my goals, tasks, and progress organized in one place.",
    },
    {
      id: 6,
      name: "Olivia Martin",
      rating: 4,
      comment:
        "I enjoy using StudyFlow because it keeps me motivated and makes my study routine more structured.",
    },
  ];
  return (
    <section className=" py-12 container mx-auto">
        <SectionHeader title={"Students are getting more done"} />
      <div className="grid grid-cols-3 gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 mb-4 rounded-xl shadow-xl space-y-2">
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
