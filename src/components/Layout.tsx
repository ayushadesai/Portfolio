import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { label: 'About', to: '/' },
  { label: 'Resume', to: '/resume' },
  { label: 'Projects', to: '/projects' },
];

function Layout() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="font-geist text-xl font-semibold tracking-[-0.5px] text-[#1a1a1a]">
            Ayush Desai
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-[#1a1a1a]">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link relative inline-block transition-colors duration-200 ${
                    isActive
                      ? 'active text-[#1E3A5F]'
                      : 'text-[#444444] hover:text-[#1E3A5F]'
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
