import { Link, Links, Outlet } from "react-router";
import { FaGithub } from "react-icons/fa";

export default function HomeLayout({ menus }) {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <header className="h-16">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <Link className="btn btn-ghost text-xl" to="/">
              JX3DataUI
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <Link to={import.meta.env.VITE_GITHUB_URL}>
                <FaGithub className="text-2xl" />
              </Link>
            </ul>
          </div>
        </div>
      </header>
      <main className="flex flex-1">
        <div className="bg-gray-50  flex-initial">
          <ul className="menu  rounded-box w-56">
            {menus.map((item, index) => (
              <li key={item.label}>
                <details open={index === 0}>
                  <summary>{item.label}</summary>
                  <ul>
                    {item.subMenus.map((subMenuItem) => (
                      <li key={subMenuItem.label}>
                        <Link to={subMenuItem.to}>{subMenuItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <Outlet />
      </main>
      <footer className="h-16 bg-white">
        <div className="flex flex-col text-xs justify-center items-center h-full opacity-60">
          <div>{import.meta.env.VITE_REGISTRATION_NUMBER}</div>
          <div>{import.meta.env.VITE_PUBLIC_SECURITY_Network_NUMBER}</div>
        </div>
      </footer>
    </div>
  );
}
