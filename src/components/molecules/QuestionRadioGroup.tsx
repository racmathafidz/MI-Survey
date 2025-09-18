import Radio from "../atoms/Radio";

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  legend?: string;
  options: Option[];
  value: string | null;
  onChange: (v: string) => void;
};

export default function QuestionRadioGroup({
  name,
  legend,
  options,
  value,
  onChange,
}: Props) {
  return (
    <fieldset>
      {legend && <legend className="visually-hidden">{legend}</legend>}
      {options.map((o, i) => (
        <Radio
          key={o.value}
          name={name}
          id={`${name}-${i}`}
          data-testid={`radio-q-${i}`}
          value={o.value}
          checked={value === o.value}
          onChange={(e) => onChange(e.target.value)}
          label={o.label}
        />
      ))}
    </fieldset>
  );
}
