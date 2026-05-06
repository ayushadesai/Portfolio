import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { label: 'About', to: '/' },
  { label: 'Resume', to: '/resume' },
  { label: 'Projects', to: '/projects' },
];

function Layout() {
  return (
    <div className="min-h-screen bg-[#F8F7F5] text-[#0F1923]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="font-heading text-xl font-medium tracking-tight text-[#0F1923]">
            Ayush Desai
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-[#0F1923]">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link relative inline-block transition-colors duration-200 ${
                    isActive
                      ? 'active text-[#1E3A5F]'
                      : 'text-[#0F1923]/80 hover:text-[#1E3A5F]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
