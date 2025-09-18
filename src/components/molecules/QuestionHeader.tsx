type Props = {
  number: number;
  timeLeft?: string;
};

export default function QuestionHeader({ number, timeLeft }: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2 className="text-secondary fw-bold mb-0">Q{number}</h2>
      {timeLeft && <p>{timeLeft}</p>}
    </div>
  );
}
