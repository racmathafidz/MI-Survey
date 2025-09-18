import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { hideAlert } from "../../features/alert/alertSlice";

export function Alert() {
  const { visible, type, text } = useAppSelector((s) => s.alert);
  const dispatch = useAppDispatch();

  if (!visible) return null;

  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
      data-testid="alert"
    >
      {text}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => dispatch(hideAlert())}
      ></button>
    </div>
  );
}
