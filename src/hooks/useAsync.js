import { useCallback, useReducer } from "react";
import useSafeDispatch from "./useSafeDispatch";

const ACTION = {
  PENDING: "pending",
  RESOLVED: "resolved",
  ERROR: "error"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.PENDING:
      return { ...state, status: ACTION.PENDING };
    case ACTION.RESOLVED:
      return { ...state, data: action.payload, status: ACTION.RESOLVED };
    case ACTION.ERROR:
      return {
        ...state,
        data: null,
        status: ACTION.ERROR,
        error: action.payload
      };
    default:
      throw new Error("Unhandled state in useAsync hook");
  }
};

function useAsync(initialState = { status: "idle", data: null, error: null }) {
  const [state, unSafeDispatch] = useReducer(reducer, initialState);
  const dispatch = useSafeDispatch(unSafeDispatch);
  const { status, data, error } = state;

  const run = useCallback(
    (promise) => {
      dispatch({ type: ACTION.PENDING });
      promise().then(
        (data) => {
          dispatch({ type: ACTION.RESOLVED, payload: data });
        },
        (error) => {
          dispatch({ type: ACTION.ERROR, payload: error });
        }
      );
    },
    [dispatch]
  );

  const setData = (data) => {
    dispatch({ type: ACTION.RESOLVED, payload: data });
  };

  return {
    status,
    data,
    error,
    run,
    setData
  };
}

export default useAsync;
