import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import { InputField } from './InputField';
import { SelectField } from './SelectField';

interface Llanta {
  id: string;
  rfid: string;
  estado: string;
  bus: string;
  fecha: string;
}

export function Inventario() {
  const [searchTerm, setSearchTerm] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('Todas');
  const [busFilter, setBusFilter] = useState('Todos');

  const llantas: Llanta[] = [
    { id: '1', rfid: 'RFID-00123', estado: 'Nueva', bus: 'Bus 01', fecha: '05/11/2025' },
    { id: '2', rfid: 'RFID-00124', estado: 'Usada', bus: 'Bus 03', fecha: '04/11/2025' },
    { id: '3', rfid: 'RFID-00125', estado: 'Nueva', bus: 'Bus 02', fecha: '04/11/2025' },
    { id: '4', rfid: 'RFID-00126', estado: 'Usada', bus: 'Bus 01', fecha: '03/11/2025' },
    { id: '5', rfid: 'RFID-00127', estado: 'Nueva', bus: 'Sin asignar', fecha: '03/11/2025' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="page-header">
        <p className="field-label" style={{ color: 'var(--primary-600)' }}>
          Inventario de llantas
        </p>
        <h1 className="page-header__title">Control granular del parque RFID.</h1>
        <p className="page-header__description">
          Consulta y gestiona todas las llantas registradas, filtra por estado o bus y toma acción inmediata ante anomalías.
        </p>
      </div>

      <div className="surface-card p-6 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          <InputField
            label="Buscar"
            placeholder="ID RFID, bus o estado"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search size={18} />}
          />

          <SelectField
            label="Estado"
            options={['Todas', 'Nuevas', 'Usadas']}
            value={estadoFilter}
            onChange={(e) => setEstadoFilter(e.target.value)}
          />

          <SelectField
            label="Bus"
            options={['Todos', 'Bus 01', 'Bus 02', 'Bus 03']}
            value={busFilter}
            onChange={(e) => setBusFilter(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="badge badge-success">
              <Filter size={16} />
              Sensores activos
            </span>
            <span className="badge badge-warning">
              En revisión 4
            </span>
          </div>
          <PrimaryButton>Registrar nueva llanta</PrimaryButton>
        </div>
      </div>

      <div className="surface-card">
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(148,163,184,0.16)' }}>
          <h2 className="page-header__title" style={{ fontSize: '1.3rem' }}>
            Inventario detallado
          </h2>
          <p className="page-header__description">
            Mostrando {llantas.length} resultados coincidentes con la búsqueda.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table-shell">
            <thead>
              <tr>
                <th>ID RFID</th>
                <th>Estado</th>
                <th>Bus asociado</th>
                <th>Fecha de registro</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {llantas.map((llanta) => (
                <tr key={llanta.id}>
                  <td>{llanta.rfid}</td>
                  <td>
                    <span className={`badge ${llanta.estado === 'Nueva' ? 'badge-success' : 'badge-warning'}`}>
                      {llanta.estado}
                    </span>
                  </td>
                  <td>{llanta.bus}</td>
                  <td>{llanta.fecha}</td>
                  <td>
                    <button style={{ color: 'var(--primary-600)', fontWeight: 600 }}>
                      Ver detalles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
