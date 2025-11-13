interface TextAreaFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextAreaField({ label, placeholder, value, onChange }: TextAreaFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="field-label">{label}</label>
      <div className="input-shell">
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className="textarea-control"
        />
      </div>
    </div>
  );
}
