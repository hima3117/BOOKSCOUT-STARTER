import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="container-app flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-soft">
            B
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">BookScout</p>
            <p className="text-xs text-slate-500">Discover better reads</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            Discover
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  );
}