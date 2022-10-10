import { Dispatch, useCallback, useReducer } from "react";
import useSafeDispatch from "./useSafeDispatch";

type Status = "idle" | "pending" | "resolved" | "error";

enum ActionType {
  PENDING = "pending",
  RESOLVED = "resolved",
  ERROR = "error",
}

interface Action<T> {
  type: ActionType;
  payload?: T;
}

interface State<T> {
  status: string;
  data: T | null;
  error: T | null;
}

interface AsynReturn<T> {
  status: string;
  data: T | null;
  error: T | null;
  run: (args: any) => void;
  setData: (data: T) => void;
}

const initialState: {
  status: Status;
  data: null;
  error: null;
} = { status: "idle", data: null, error: null };

const reducer = <T>(state: State<T>, action: Action<T>) => {
  switch (action.type) {
    case ActionType.PENDING:
      return { ...state, status: "pending" };
    case ActionType.RESOLVED:
      return { ...state, data: action.payload, status: "resolved" };
    case ActionType.ERROR:
      return {
        ...state,
        data: null,
        status: "error",
        error: action.payload,
      };
    default:
      throw new Error("Unhandled state in useAsync hook");
  }
};

const useAsync = <T>(
  userInitialState: State<T> = initialState
): AsynReturn<T> => {
  const [state, unSafeDispatch] = useReducer(reducer, {
    ...userInitialState,
  }) as [State<T>, Dispatch<Action<T>>];
  const dispatch = useSafeDispatch(unSafeDispatch);
  const { status, data, error } = state;

  const run = useCallback(
    (promise: any) => {
      dispatch({ type: ActionType.PENDING });
      promise().then(
        (data: T) => {
          dispatch({ type: ActionType.RESOLVED, payload: data });
        },
        (error: T) => {
          dispatch({ type: ActionType.ERROR, payload: error });
        }
      );
    },
    [dispatch]
  );

  const setData = (data: T) => {
    dispatch({ type: ActionType.RESOLVED, payload: data });
  };

  return {
    status,
    data,
    error,
    run,
    setData,
  };
};

export default useAsync;
