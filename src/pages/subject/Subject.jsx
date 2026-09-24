import { useEffect, useState } from "react";
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
      console.log(data);
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

  const handleDelete = async(id) => {
    const res = await fetch(`/api/subjects/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      },
      credentials:"include",

    })

    const data = await res.json();
    fetchSubject();
    toast.success(data.message)
  }

  useEffect(() => {
    fetchSubject();
  }, []);

  console.log(subject);

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

      {/* card */}
      <div className="grid grid-cols-3 gap-10 p-5">
        {subject.map((sub) => {
          return (
            <div
              key={sub._id}
              className="card card-dash bg-base-100 shadow-sm py-6 px-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full" style={{ backgroundColor: sub.color }}></div>
                  <p>{sub.name}</p>
                </div>
                <div>
                  <MdDeleteOutline className="cursor-pointer" size={22} onClick={() => handleDelete(sub._id)} />
                </div>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p>Completion</p>
                <p className="my-2 text-sm">
                  {Math.round(sub.completedCount)}%
                </p>
              </div>
              <progress
                className="progress progress-accent"
                value={sub.completedCount}
                max="100"
              ></progress>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
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
                <label className="mb-1 block font-medium text-gray-700">
                  Subject Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="e.g. JavaScript"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block font-medium text-gray-700">
                  Subject Color
                </label>

                <input
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
