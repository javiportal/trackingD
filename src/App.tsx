import { useState } from 'react';
import { Login } from './components/Login';
import { AppLayout } from './components/AppLayout';
import { Dashboard } from './components/Dashboard';
import { Inventario } from './components/Inventario';
import { RegistroLlanta } from './components/RegistroLlanta';
import { AsociacionLlanta } from './components/AsociacionLlanta';
import { Reportes } from './components/Reportes';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const getPageTitle = () => {
    const titles: Record<string, string> = {
      dashboard: 'Dashboard',
      inventario: 'Inventario de llantas',
      registro: 'Registro de nueva llanta',
      asociacion: 'Asociar llantas a bus',
      reportes: 'Reportes de inventario',
    };
    return titles[currentPage] || 'Dashboard';
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventario':
        return <Inventario />;
      case 'registro':
        return <RegistroLlanta />;
      case 'asociacion':
        return <AsociacionLlanta />;
      case 'reportes':
        return <Reportes />;
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <AppLayout
      currentPage={currentPage}
      onNavigate={setCurrentPage}
      pageTitle={getPageTitle()}
    >
      {renderPage()}
    </AppLayout>
  );
}
