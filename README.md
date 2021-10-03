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
