import QuestionHeader from "../molecules/QuestionHeader";
import QuestionRadioGroup from "../molecules/QuestionRadioGroup";

type Props = {
  qIndex: number;
  timer?: string;
  title: string;
  options: { label: string; value: string }[];
  value: string | null;
  onChange: (v: string) => void;
};

export default function QuestionCard({
  qIndex,
  timer,
  title,
  options,
  value,
  onChange,
}: Props) {
  return (
    <div className="card my-4">
      <div className="card-body">
        <QuestionHeader number={qIndex} timeLeft={timer} />
        <h2 className="fw-semibold mb-3" data-testid="question-title">
          {title}
        </h2>
        <QuestionRadioGroup
          name={`q-${qIndex}`}
          legend={title}
          options={options}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
