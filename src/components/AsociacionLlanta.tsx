import { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { SelectField } from './SelectField';
import { PrimaryButton } from './PrimaryButton';

interface LlantaEscaneada {
  id: string;
  rfid: string;
  posicion: string;
  estado: string;
}

export function AsociacionLlanta() {
  const [busSeleccionado, setBusSeleccionado] = useState('Selecciona un bus');
  const [llantasEscaneadas, setLlantasEscaneadas] = useState<LlantaEscaneada[]>([
    { id: '1', rfid: 'RFID-00123', posicion: 'Trasera izquierda', estado: 'Nueva' },
    { id: '2', rfid: 'RFID-00124', posicion: 'Trasera derecha', estado: 'Usada' },
  ]);

  const handleRemove = (id: string) => {
    setLlantasEscaneadas(llantasEscaneadas.filter(llanta => llanta.id !== id));
  };

  const handleGuardar = () => {
    alert('Asociaciones guardadas exitosamente');
  };

  const busDisplay = busSeleccionado === 'Selecciona un bus' ? 'bus seleccionado' : busSeleccionado;

  return (
    <div className="flex flex-col gap-6">
      <div className="page-header">
        <p className="field-label" style={{ color: 'var(--primary-600)' }}>
          Asociación llanta-bus
        </p>
        <h1 className="page-header__title">Escaneo y asignación en sitio.</h1>
        <p className="page-header__description">
          Selecciona un bus, registra las posiciones instaladas y mantén la trazabilidad completa del montaje.
        </p>
      </div>

      <div style={{ width: '320px' }}>
        <SelectField
          label="Bus"
          options={[
            'Selecciona un bus',
            'Bus 01',
            'Bus 02',
            'Bus 03',
            'Bus 04',
            'Bus 05',
          ]}
          value={busSeleccionado}
          onChange={(e) => setBusSeleccionado(e.target.value)}
        />
      </div>

      <div className="surface-card p-6">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h2 className="page-header__title" style={{ fontSize: '1.25rem' }}>
              Llantas escaneadas
            </h2>
            <p className="page-header__description">
              {llantasEscaneadas.length} lecturas listas para asociar al {busDisplay}.
            </p>
          </div>
          <span className="badge badge-success">OK RFID</span>
        </div>

        <div className="overflow-x-auto">
          <table className="table-shell">
            <thead>
              <tr>
                <th>ID RFID</th>
                <th>Posición</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {llantasEscaneadas.map((llanta) => (
                <tr key={llanta.id}>
                  <td>{llanta.rfid}</td>
                  <td>{llanta.posicion}</td>
                  <td>
                    <span className={`badge ${llanta.estado === 'Nueva' ? 'badge-success' : 'badge-warning'}`}>
                      {llanta.estado}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemove(llanta.id)}
                      style={{ color: 'var(--danger-500)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    >
                      <X size={16} />
                      Quitar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="alert-banner">
        <AlertCircle size={20} />
        <p>
          Se detectó una llanta asociada previamente a otro bus. Revisa la inconsistencia antes de confirmar para evitar duplicidades.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
        <PrimaryButton variant="secondary">
          Cancelar
        </PrimaryButton>
        <PrimaryButton onClick={handleGuardar}>
          Guardar asociaciones
        </PrimaryButton>
      </div>
    </div>
  );
}
