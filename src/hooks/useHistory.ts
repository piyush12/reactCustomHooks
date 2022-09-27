import { Dispatch, useCallback, useReducer } from "react";

const initialState = {
  past: [],
  present: null,
  future: [],
};

enum ActionType {
  Undo = "undo",
  Redo = "redo",
  Set = "set",
}

interface State<T> {
  past: T[];
  present: T;
  future: T[];
}

interface Action<T> {
  type: ActionType;
  value?: T;
}

interface HistoryReturn<T> {
  state: T;
  set: (value: T) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const reducer = <T>(state: State<T>, action: Action<T>) => {
  const { past, present, future } = state;
  switch (action.type) {
    case ActionType.Set:
      return {
        ...state,
        past: [...past, present],
        present: action.value,
      };
    case ActionType.Undo:
      const newPresent = past[past.length - 1];
      return {
        past: past.slice(0, past.length - 1),
        present: newPresent,
        future: [present, ...future],
      };
    case ActionType.Redo:
      return {
        past: [...past, present],
        present: future[0],
        future: future.slice(1),
      };
  }
};

const useHistory = <T>(initialPresentState: T): HistoryReturn<T> => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    present: initialPresentState,
  }) as [State<T>, Dispatch<Action<T>>];

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const set = useCallback(
    (value: T) => {
      dispatch({ type: ActionType.Set, value });
    },
    [dispatch]
  );

  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: ActionType.Undo });
    }
  }, [canUndo]);

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: ActionType.Redo });
    }
  }, [canRedo]);

  return {
    state: state.present,
    set,
    undo,
    redo,
    canUndo,
    canRedo,
  };
};

export default useHistory;
