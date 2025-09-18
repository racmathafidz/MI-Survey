import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import SummaryCard from "../components/organisms/SummaryCard";
import { useAppDispatch, useAppSelector, useDisableBack } from "../app/hooks";
import { selectAnswers } from "../features/survey/selectors";
import { surveyQuestions } from "../constants/surveyQuestions";
import { resetSurvey } from "../features/survey/answersSlice";
import { resetTimer } from "../features/survey/timerSlice";
import { Alert } from "../components/atoms/Alert";

export default function SummaryPage() {
  useDisableBack();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const answers = useAppSelector(selectAnswers);

  const items = surveyQuestions.map((q, idx) => {
    const val = answers[idx];
    return { id: q.id, title: q.title, answer: val, options: q.options };
  });

  const handleRestart = () => {
    dispatch(resetSurvey());
    dispatch(resetTimer());
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <div className="container">
      <Alert />
      <SummaryCard items={items} />
      <Button
        className="btn btn-primary w-100 fw-semibold"
        onClick={handleRestart}
      >
        Restart Survey
      </Button>
    </div>
  );
}
