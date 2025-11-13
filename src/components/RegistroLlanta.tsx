import { useState } from 'react';
import { InputField } from './InputField';
import { SelectField } from './SelectField';
import { TextAreaField } from './TextAreaField';
import { PrimaryButton } from './PrimaryButton';

export function RegistroLlanta() {
  const [codigoRFID, setCodigoRFID] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [condicion, setCondicion] = useState('Selecciona una opción');
  const [comentarios, setComentarios] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Llanta registrada exitosamente');
  };

  return (
    <div className="flex justify-center">
      <div className="surface-card p-8 w-full" style={{ maxWidth: '920px' }}>
        <div className="page-header" style={{ marginBottom: '1.5rem' }}>
          <p className="field-label" style={{ color: 'var(--primary-600)' }}>
            Nuevo registro RFID
          </p>
          <h1 className="page-header__title">Registrar nueva llanta</h1>
          <p className="page-header__description">
            Escanea la etiqueta, completa los datos del fabricante y agrega notas para el historial de mantenimiento.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <InputField
            label="Código RFID"
            placeholder="Escanea o escribe el código RFID"
            value={codigoRFID}
            onChange={(e) => setCodigoRFID(e.target.value)}
            hint="Este código debe ser único dentro del sistema."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            <InputField
              label="Marca"
              placeholder="Ej. Michelin"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />

            <InputField
              label="Modelo"
              placeholder="Ej. X Multi"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />

            <SelectField
              label="Condición"
              options={['Selecciona una opción', 'Nueva', 'Usada']}
              value={condicion}
              onChange={(e) => setCondicion(e.target.value)}
            />
          </div>

          <TextAreaField
            label="Comentarios (opcional)"
            placeholder="Agrega cualquier información adicional..."
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <PrimaryButton variant="secondary" type="button">
              Cancelar
            </PrimaryButton>
            <PrimaryButton type="submit">
              Guardar llanta
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
