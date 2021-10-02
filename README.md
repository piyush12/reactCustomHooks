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
