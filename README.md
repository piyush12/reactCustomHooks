# reactCustomHooks

# useThrottle

```
const [value, setValue] = useState("");
const [throtlledvalue, throttledEventHandle] = useThrottle(value, 1500);

const handleChange = (event) => {
  setValue(event.target.value);
  throttledEventHandle(event.target.value);
};

useEffect(() => {
  console.log("throttledValue", throtlledvalue);
}, [throtlledvalue]);

return (
  <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <input type="text" value={value} onChange={handleChange} />
  </div>
);

```

# useIsMounted

```
const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      console.log("Mounted");
    }
  }, [isMounted]);

```

# useAsync

```
  const asyncData = () =>
  new Promise((resolve, reject) => {
    return resolve("success");
  });

export default function App() {
  const { status, data, run } = useAsync();

  useEffect(() => {
    run(asyncData);
  }, [run]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

```

# useSafeDispatch

```
  const [state, unSafeDispatch] = useReducer(reducer, initialState);
  const dispatch = useSafeDispatch(unSafeDispatch);
```

# useFetch

```
  const { status, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
```

# useToggle

```
export default function App() {
  const { isToggle, toggle } = useToggle();

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      {isToggle && "Show"}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

```

# useClickOutside

```
  export default function App() {
  const ref = useRef();
  const clickOutside = () => {
    console.log("clickOutside");
  };
  useClickOutside(ref, clickOutside);
  const clickedInside = () => {
    console.log("clicked button");
  };

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <button ref={ref} onClick={clickedInside}>
        Toggle
      </button>
    </div>
  );
}

```

# usePrevious

```
  export default function App() {
  const [value, setValue] = useState(0);
  const previousValue = usePrevious(value);

  const handleIncrement = () => {
    setValue((v) => v + 1);
  };

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <p>{value}</p>
      <p>previousValue : {previousValue} </p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
```

# useLocalStorage

```
   const { value, addValueToStorage, removeValueFromStorage } = useLocalStorage(
    "user"
  );

  const handleChange = (e) => {
    const value = e.target.value;
    addValueToStorage({ user: value });
  };

  const removeItem = () => {
    removeValueFromStorage("user");
  };

  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <p>{JSON.stringify(value)}</p>
      <p>
        <input type="text" onChange={handleChange} />
      </p>
      <p>
        <button onClick={removeItem}>Remove</button>
      </p>
    </div>
  );
```

# useMap

```
const initialValues = [["key", "🆕"]];

const [map, actions] = useMap(initialValues);

const set = () => actions.set("hello", "33");
const reset = () => actions.reset();
const remove = () => actions.remove("hello");

return (
  <div className="App">
    <button onClick={set}>Add</button>
    <button onClick={reset}>Reset</button>
    <button onClick={remove}>{'Remove "hello"'}</button>

    <pre>
      Map (
      {Array.from(map.entries()).map(([key, value]) => (
        <Fragment key={key}>{`\n  ${key}: ${value}`}</Fragment>
      ))}
      <br />)
    </pre>
  </div>
```

# useGeoLocation

```
const { position, getLocation } = useGeoLocation();

  useEffect(() => {
    getLocation();
  }, []);

```

# useCopyToClipboard

```

  const [text, setText] = React.useState("");
  const [value, error, copyToClipboard] = useCopyToClipboard();

  return (
    <div className="App">
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" onClick={() => copyToClipboard(text)}>
          copy text
        </button>

        {error && <p>Unable to copy value: {error}</p>}
        {value && <p>Copied </p>}
      </div>
    </div>
  );

```

# useDateArray

## helpful to build calendar or datepicker

```
  const now = new Date();
  const [currentMonth, setCurrentMonth] = React.useState(now.getMonth());
  const [currentYear, setCurrentYear] = React.useState(now.getFullYear());
  const dateArray = useDateArray(currentMonth, currentYear);

  return (
    <div className="App">
      {dateArray.map((date, index) => (
        <div>{date}</div>
      ))}
    </div>
  );

```

# useHistory

## helpful for undo redo related tasks

```

  const { state, set, undo, redo, canUndo, canRedo, clear } = useHistory(0);

  return (
    <div className='App'>
      <button onClick={() => set(state + 1)}>Increment</button>
      <button style={{ margin: "0 15px" }} onClick={undo} disabled={!canUndo}>
        Undo
      </button>
      <button disabled={!canRedo} onClick={redo}>
        Redo
      </button>
      <button onClick={clear}>Clear</button>
      <h2>{state}</h2>
    </div>
  );

```
