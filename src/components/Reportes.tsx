import { useState } from 'react';
import { InputField } from './InputField';
import { SelectField } from './SelectField';
import { PrimaryButton } from './PrimaryButton';

export function Reportes() {
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');
  const [tipoReporte, setTipoReporte] = useState('General');
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const handleGenerarReporte = () => {
    setMostrarResumen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="page-header">
        <p className="field-label" style={{ color: 'var(--primary-600)' }}>
          Reportes y exportaciones
        </p>
        <h1 className="page-header__title">Audita el inventario sin salir del panel.</h1>
        <p className="page-header__description">
          Filtra por periodo, selecciona el tipo de reporte y genera archivos listos para compartir con tu equipo operativo.
        </p>
      </div>

      <div className="surface-card p-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          <InputField
            label="Desde"
            type="date"
            value={fechaDesde}
            onChange={(e) => setFechaDesde(e.target.value)}
          />

          <InputField
            label="Hasta"
            type="date"
            value={fechaHasta}
            onChange={(e) => setFechaHasta(e.target.value)}
          />

          <SelectField
            label="Tipo de reporte"
            options={['General', 'Inconsistencias', 'Cambios recientes']}
            value={tipoReporte}
            onChange={(e) => setTipoReporte(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
          <PrimaryButton onClick={handleGenerarReporte}>
            Generar reporte
          </PrimaryButton>
        </div>
      </div>

      {mostrarResumen && (
        <div className="surface-card p-6 flex flex-col gap-4">
          <div>
            <h2 className="page-header__title" style={{ fontSize: '1.3rem' }}>
              Resumen del reporte
            </h2>
            <p className="page-header__description">
              Información clave detectada entre {fechaDesde || '??/??/????'} y {fechaHasta || '??/??/????'}.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div className="surface-muted" style={{ padding: '1.25rem' }}>
              <p className="field-label">Llantas registradas</p>
              <h3 style={{ fontSize: '1.8rem', marginTop: '0.4rem', color: 'var(--gray-900)' }}>32</h3>
              <span className="badge badge-success" style={{ marginTop: '0.6rem' }}>+8 vs. periodo anterior</span>
            </div>
            <div className="surface-muted" style={{ padding: '1.25rem' }}>
              <p className="field-label">Reasignaciones</p>
              <h3 style={{ fontSize: '1.8rem', marginTop: '0.4rem', color: 'var(--gray-900)' }}>10</h3>
              <span className="badge badge-warning" style={{ marginTop: '0.6rem' }}>4 pendientes de validar</span>
            </div>
            <div className="surface-muted" style={{ padding: '1.25rem' }}>
              <p className="field-label">Inconsistencias</p>
              <h3 style={{ fontSize: '1.8rem', marginTop: '0.4rem', color: 'var(--gray-900)' }}>3</h3>
              <span className="badge badge-danger" style={{ marginTop: '0.6rem' }}>Revisión inmediata</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <PrimaryButton>
              Descargar reporte PDF
            </PrimaryButton>
            <PrimaryButton variant="secondary">
              Exportar a Excel
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}
