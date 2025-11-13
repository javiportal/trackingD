import { AlertTriangle, Radar, ShieldCheck } from 'lucide-react';
import { StatCard } from './StatCard';

export function Dashboard() {
  const recentActions = [
    { fecha: '06/11/2025', accion: 'Registro de llanta nueva', usuario: 'Administrador' },
    { fecha: '06/11/2025', accion: 'Asociación de llanta a Bus 03', usuario: 'Administrador' },
    { fecha: '05/11/2025', accion: 'Actualización de estado de llanta', usuario: 'Administrador' },
    { fecha: '05/11/2025', accion: 'Registro de llanta nueva', usuario: 'Administrador' },
  ];

  const healthHighlights = [
    {
      icon: ShieldCheck,
      title: 'Integridad RFID',
      value: '98%',
      description: 'Sin lecturas duplicadas las últimas 24h.',
      tone: 'success' as const,
    },
    {
      icon: Radar,
      title: 'Cobertura de sensores',
      value: '87%',
      description: '14 buses envían datos en tiempo real.',
      tone: 'success' as const,
    },
    {
      icon: AlertTriangle,
      title: 'Alertas críticas',
      value: '4',
      description: 'Requieren inspección en taller central.',
      tone: 'warning' as const,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <section className="surface-card p-8 flex flex-col gap-6">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between' }}>
          <div className="page-header" style={{ maxWidth: '540px' }}>
            <p className="field-label" style={{ color: 'var(--primary-600)' }}>
              Resumen general
            </p>
            <h1 className="page-header__title">
              Estado de la flota salvadoreña y desempeño del inventario RFID.
            </h1>
            <p className="page-header__description">
              Visualiza el uso de llantas registradas, asociaciones activas y posibles incidencias en El Salvador antes de que afecten la operación.
            </p>
          </div>

          <div className="hero-cta-group">
            <button type="button" className="hero-cta hero-cta--primary">
              Registrar nueva llanta
            </button>
            <button type="button" className="hero-cta hero-cta--secondary">
              Ver inventario completo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <StatCard label="Llantas registradas" value={128} trend="+12% vs. mes anterior" trendTone="success" />
          <StatCard label="Llantas asignadas" value="112" trend="18 buses priorizados" trendTone="success" />
          <StatCard label="Inconsistencias detectadas" value={4} trend="+1 nueva alerta" trendTone="warning" />
          <StatCard label="Buses en flota" value={16} trend="100% cubiertos" trendTone="success" />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4">
        {healthHighlights.map((item) => (
          <div key={item.title} className="surface-card p-6 flex gap-4 items-start">
            <div className={`badge badge-${item.tone}`} style={{ borderRadius: '18px', width: '48px', height: '48px', justifyContent: 'center' }}>
              <item.icon size={20} />
            </div>
            <div>
              <p className="field-label" style={{ color: 'var(--gray-500)' }}>{item.title}</p>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--gray-900)', marginTop: '0.25rem' }}>{item.value}</h3>
              <p style={{ color: 'var(--gray-500)', marginTop: '0.25rem' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="surface-card p-8">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h2 className="page-header__title" style={{ fontSize: '1.4rem' }}>
              Últimas acciones registradas
            </h2>
            <p className="page-header__description">
              Registro en tiempo real de movimientos y asociaciones por usuario.
            </p>
          </div>
          <span className="badge badge-success">Sin incidencias</span>
        </div>
        <div className="overflow-x-auto">
          <table className="table-shell">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Acción</th>
                <th>Usuario</th>
              </tr>
            </thead>
            <tbody>
              {recentActions.map((action, index) => (
                <tr key={index}>
                  <td>{action.fecha}</td>
                  <td>{action.accion}</td>
                  <td>{action.usuario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
