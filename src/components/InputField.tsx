interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  icon?: React.ReactNode;
}

export function InputField({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  hint,
  icon,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="field-label">{label}</label>
      <div className="input-shell">
        {icon ? <span className="input-icon">{icon}</span> : null}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-control"
        />
      </div>
      {hint ? <span className="text-xs text-[#94a3b8]">{hint}</span> : null}
    </div>
  );
}
