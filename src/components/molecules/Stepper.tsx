type Props = {
  totalSteps: number;
  currentStep: number;
};

export default function Stepper({ totalSteps, currentStep }: Props) {
  return (
    <div className="line-stepper">
      {Array.from({ length: totalSteps }).map((_, i) => {
        const idx = i + 1;
        const cls =
          idx < currentStep
            ? "seg completed"
            : idx === currentStep
            ? "seg active"
            : "seg";
        return <div key={idx} className={cls} />;
      })}
    </div>
  );
}
