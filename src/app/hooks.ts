import { useDispatch, useSelector } from "react-redux";
import type {TypedUseSelectorHook} from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectDeadline, selectDurationSec } from "../features/survey/selectors";
import { startTimer } from "../features/survey/timerSlice";
import { showAlert } from "../features/alert/alertSlice";
import { formatTime } from "../utils/helpers";

// Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Disable Back Button
export const useDisableBack = (path: string = "/") => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate(path, { replace: true });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate, path]);
}

// Timer Coundown
type Options = {
  redirectPath?: string;   
  autoStart?: boolean;     
  onExpire?: () => void;   
};

export function useSurveyTimer(opts: Options = {}) {
  const {
    redirectPath = "/summary",
    autoStart = true,
    onExpire,
  } = opts;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deadline = useAppSelector(selectDeadline);
  const durationSec = useAppSelector(selectDurationSec);

  useEffect(() => {
    if (autoStart && !deadline) {
      dispatch(startTimer(durationSec));
    }
  }, [autoStart, deadline, durationSec, dispatch]);

  const remaining = usePersistedCountdown(deadline);

  useEffect(() => {
    if (remaining === 0) {
      if (onExpire) onExpire();
      dispatch(
        showAlert({
          type: "danger",
          text: "⏰ Time’s up! Your answers have been submitted automatically.",
        })
      );
      navigate(redirectPath, { replace: true });
    }
  }, [remaining, dispatch, navigate, redirectPath, onExpire]);

  const timerText = useMemo(
    () => formatTime(remaining ?? durationSec),
    [remaining, durationSec]
  );

  return { remaining, timerText, deadline, durationSec };
}

export function usePersistedCountdown(deadline: number | null) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (!deadline) {
      setRemaining(null);
      return;
    }

    const tick = () => {
      const secs = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
      setRemaining(secs);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  return remaining;
}
