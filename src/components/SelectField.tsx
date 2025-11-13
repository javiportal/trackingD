interface SelectFieldProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectField({ label, options, value, onChange }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="field-label">{label}</label>
      <div className="input-shell">
        <select
          value={value}
          onChange={onChange}
          className="select-control"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
