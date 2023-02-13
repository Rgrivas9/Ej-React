import { useEffect, useState } from "react";

const ToModify = () => {
  const [value, setValue] = useState(0);
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    setValue(value+1);
  }, [confirm]);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setConfirm(true)}>add 1</button>
    </div>
  );
};
export default ToModify;
