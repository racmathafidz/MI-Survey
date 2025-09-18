import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/molecules/Stepper";
import Button from "../components/atoms/Button";
import QuestionCard from "../components/organisms/QuestionCard";
import { surveyQuestions } from "../constants/surveyQuestions";
import {
  useAppDispatch,
  useAppSelector,
  useDisableBack,
  useSurveyTimer,
} from "../app/hooks";
import { setAnswer } from "../features/survey/answersSlice";
import {
  selectAnswerByIndex,
  selectAnswers,
} from "../features/survey/selectors";
import { showAlert } from "../features/alert/alertSlice";

export default function SurveyPage() {
  useDisableBack();
  const { timerText } = useSurveyTimer({
    redirectPath: "/summary",
    autoStart: true,
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const allAnswers = useAppSelector(selectAnswers);
  const savedCurrentStep =
    Object.keys(allAnswers).length < 10 ? Object.keys(allAnswers).length : 9;
  const [currentStep, setCurrentStep] = useState(
    Math.max(0, savedCurrentStep ?? 0)
  );
  const currentAnswer = useAppSelector(selectAnswerByIndex(currentStep));
  const total = surveyQuestions.length;
  const currentQuestion = surveyQuestions[currentStep];

  const handleAnswerChange = (value: string) => {
    dispatch(setAnswer({ index: currentStep, value }));
  };

  const handleNext = () => {
    if (currentStep < total - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      navigate("/summary", { replace: true });
      dispatch(
        showAlert({
          type: "success",
          text: "✅ Your answers have been submitted successfully!",
        })
      );
    }
  };

  return (
    <div className="container" data-testid="survey-page">
      <Stepper totalSteps={total} currentStep={currentStep + 1} />
      <QuestionCard
        qIndex={currentStep + 1}
        title={currentQuestion.title}
        options={currentQuestion.options}
        value={currentAnswer}
        onChange={handleAnswerChange}
        timer={timerText}
      />
      <Button
        className="btn btn-primary w-100 fw-semibold"
        onClick={handleNext}
        disabled={!currentAnswer}
        data-testid="next-btn"
      >
        {currentStep === total - 1 ? "Submit" : "Next"}
      </Button>
    </div>
  );
}
