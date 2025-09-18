type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export default function Radio({ label, id, ...rest }: Props) {
  return (
    <div className="form-check mb-3 fs-6">
      <input className="form-check-input" type="radio" id={id} {...rest} />
      <label className="form-check-label fw-semibold" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
