import { Link } from "react-router-dom";
import SEO from "./Seo";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <SEO title="Page Not Found | Hasnain Wali" noindex />
      <div className="text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold">404 — Page Not Found</h1>
        <p className="mt-4 text-white/70">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 bg-white text-black px-5 py-2 rounded"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;