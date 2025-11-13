import { useState } from 'react';
import { InputField } from './InputField';
import { PrimaryButton } from './PrimaryButton';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: 'min(980px, 100%)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          overflow: 'hidden',
          padding: 0,
        }}
      >
        <div
          style={{
            padding: '3rem',
            background: 'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.4), rgba(29,78,216,0.7))',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <p style={{ textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>
            Plataforma TrackingD · El Salvador
          </p>
          <h1 style={{ fontSize: '2.2rem', lineHeight: 1.2 , color: '#fff'}}>
            Visibilidad total del ciclo de vida de tus llantas.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>
            Monitorea, registra y asocia RFID en tiempo real para mantener tu flota operando sin sorpresas.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                Llantas activas
              </p>
              <p style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>128</p>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                Alertas
              </p>
              <p style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>4</p>
            </div>
          </div>
        </div>

        <div style={{ padding: '3rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="page-header">
              <p className="field-label" style={{ color: 'var(--primary-600)' }}>Bienvenido</p>
              <h1 className="page-header__title" style={{ fontSize: '2rem' }}>
                Ingresa a tu panel
              </h1>
              <p className="page-header__description">
                Usa tus credenciales corporativas para mantener el inventario al día.
              </p>
            </div>

            <InputField
              label="Usuario"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <InputField
              label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PrimaryButton type="submit" fullWidth>
              Ingresar
            </PrimaryButton>

            <p style={{ fontSize: '0.75rem', textAlign: 'center', color: 'var(--gray-500)' }}>
              © 2025 · TrackingD — Detección y tracking de llantas en El Salvador
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
