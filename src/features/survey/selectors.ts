import type { RootState } from "../../app/store";

// Answers
export const selectAnswers = (state: RootState) => state.survey.answers;
export const selectAnswerByIndex = (index: number) => (state: RootState) =>
  state.survey.answers[index] ?? null;

// Timer
export const selectDeadline = (state: RootState) => state.timer.deadline;
export const selectDurationSec = (state: RootState) => state.timer.durationSec;