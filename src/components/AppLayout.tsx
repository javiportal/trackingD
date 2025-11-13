import { LayoutDashboard, Package, Radio, Link2, FileText } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

interface AppLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  pageTitle: string;
}

export function AppLayout({ children, currentPage, onNavigate, pageTitle }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <aside
        className="sidebar-shell"
        style={{
          width: '280px',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '22px',
                background: 'rgba(255,255,255,0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem',
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="15" stroke="white" strokeWidth="2.5" opacity="0.9" />
                <circle cx="18" cy="18" r="9" stroke="#60a5fa" strokeWidth="2" />
                <circle cx="18" cy="18" r="4" fill="#fff" />
                <path
                  d="M18 3v6M18 27v6M3 18h6M27 18h6M7.2 7.2l4.4 4.4M24.4 24.4l4.4 4.4M7.2 28.8l4.4-4.4M24.4 11.6l4.4-4.4"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff' }}>TrackingD</p>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
                Gestión inteligente de llantas · El Salvador
              </span>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', lineHeight: 1.4 }}>
            Monitorea el ciclo de vida de cada llanta en toda la red de transporte salvadoreña con precisión de clase mundial.
          </p>
        </div>

        <nav style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            isSelected={currentPage === 'dashboard'}
            onClick={() => onNavigate('dashboard')}
          />
          <SidebarItem
            icon={Package}
            label="Inventario de llantas"
            isSelected={currentPage === 'inventario'}
            onClick={() => onNavigate('inventario')}
          />
          <SidebarItem
            icon={Radio}
            label="Registro RFID"
            isSelected={currentPage === 'registro'}
            onClick={() => onNavigate('registro')}
          />
          <SidebarItem
            icon={Link2}
            label="Asociación llanta–bus"
            isSelected={currentPage === 'asociacion'}
            onClick={() => onNavigate('asociacion')}
          />
          <SidebarItem
            icon={FileText}
            label="Reportes"
            isSelected={currentPage === 'reportes'}
            onClick={() => onNavigate('reportes')}
          />
        </nav>

        <div className="glass-panel" style={{ marginTop: 'auto', position: 'relative', zIndex: 1, padding: '1.5rem', color: '#fff', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Salud de la flota
          </p>
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '0.3rem' }}>92%</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem' }}>
            Inventario salvadoreño actualizado con 4 alertas pendientes.
          </p>
        </div>
      </aside>

      <div className="main-shell">
        <header
          className="topbar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 2.5rem',
          }}
        >
          <div>
            <p style={{ color: 'var(--gray-500)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              Panel actual
            </p>
            <h2 style={{ marginTop: '0.2rem', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)' }}>
              {pageTitle}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--gray-900)', fontWeight: 600 }}>Administrador</p>
              <span style={{ color: 'var(--gray-500)', fontSize: '0.85rem' }}>Operación · El Salvador</span>
            </div>
            <div className="avatar">A</div>
          </div>
        </header>

        <main className="main-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
