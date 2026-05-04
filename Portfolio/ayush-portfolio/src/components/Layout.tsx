import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { label: 'About', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Résumé', to: '/resume' }
];

function Layout() {
  return (
    <div className="min-h-screen bg-[#F6F3EE] text-[#18160F]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="font-display text-xl font-semibold tracking-tight text-[#18160F]">
            Ayush Desai
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-[#18160F]">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link relative inline-block transition-colors duration-200 ${
                    isActive
                      ? 'active text-[#1A3DE0]'
                      : 'text-[#18160F]/80 hover:text-[#1A3DE0]'
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
