import QuestionHeader from "../molecules/QuestionHeader";
import QuestionRadioGroup from "../molecules/QuestionRadioGroup";

type Option = {
  label: string;
  value: string;
};

type Props = {
  items: { id: number; title: string; answer: string; options: Option[] }[];
};

export default function SummaryCard({ items }: Props) {
  return (
    <div className="card my-4">
      <div className="card-body">
        {items.map((items) => (
          <div className="mb-5" key={items.id}>
            <QuestionHeader number={items.id} />
            <h2 className="fw-semibold mb-3">{items.title}</h2>
            <QuestionRadioGroup
              name={`q-${items.id}`}
              legend={items.title}
              options={items.options}
              value={items.answer}
              onChange={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
