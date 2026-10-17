import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-16">
      <p className="text-8xl font-bold text-[#84bd00]">404</p>

      <h1 className="text-4xl font-bold text-[#496039] mt-4">
        Page Not Found
      </h1>

      <div className="flex gap-4 mt-10">
        <Link
          to="/"
          className="px-6 py-3 text-white font-medium bg-[#355120] border-2 border-[#355120] rounded-lg transition-all ease-linear duration-100 hover:bg-white hover:text-[#355120]"
        >
          Go to Home
        </Link>

        <Link
          to="/menu"
          className="px-6 py-3 font-medium text-[#355120] border-2 border-[#355120] rounded-lg transition-all ease-linear duration-100 hover:bg-[#355120] hover:text-white"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;