import useAsync from "../../hooks/useAsync";
import { fakeApiCall } from "../../utils";

export const Demo = () => {
  const { status, data, run } = useAsync();

  const handleApiCall = async () => {
    run(fakeApiCall);
  };

  return (
    <div>
      <p>
        <b>Status</b>: {status}
      </p>
      <p>
        <b>Data</b>: {data && JSON.stringify(data)}
      </p>
      <button onClick={handleApiCall}>Call Function</button>
    </div>
  );
};
