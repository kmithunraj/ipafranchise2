import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/faculties', label: 'Faculties', icon: '👨‍🏫' },
    { path: '/students', label: 'Students', icon: '👨‍🎓' },
    { path: '/contests', label: 'Contests', icon: '🏆' },
    { path: '/grading-exams', label: 'Grading Exams', icon: '📝' },
    { path: '/orders', label: 'Orders', icon: '📦' }
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Abacus Institution</h1>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar; 