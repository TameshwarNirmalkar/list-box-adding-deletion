"use client";

import { memo, useEffect } from "react";

const DateTimeComponent: React.FC<{ datetime: string }> = ({ datetime }) => {
  const now = new Date();
  useEffect(() => {
    console.log("Render child");
  }, []);
  return (
    <>
      <p>{now.toLocaleTimeString()}</p>
      <div>{datetime && <p>Current Time: {datetime}</p>}</div>
    </>
  );
};

export default memo(DateTimeComponent);
