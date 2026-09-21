import { Link, useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-12">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#0e7c66]/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-xl font-bold text-slate-800"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0e7c66] text-white shadow-lg shadow-[#0e7c66]/20">
            S
          </span>

          <span>
            Study<span className="text-[#0e7c66]">Flow</span>
          </span>
        </Link>

        <div className="relative mx-auto mb-8 flex w-fit items-center justify-center">
          <span className="text-[120px] font-black leading-none tracking-tighter text-slate-200 sm:text-[180px]">
            404
          </span>

          <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 rotate-6 items-center justify-center rounded-2xl border border-white bg-white text-4xl shadow-xl">
            📚
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Oops! This page went off the study plan.
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
          The page you are looking for doesn't exist, may have been moved, or is
          temporarily unavailable. Let's get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-w-40 items-center justify-center gap-2 rounded-xl bg-[#0e7c66] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#0e7c66]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#096a57] hover:shadow-xl"
          >
            <span>←</span>
            Back to Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex min-w-40 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#0e7c66]/30 hover:text-[#0e7c66]"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
