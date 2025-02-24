"use client";

export const Button = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};
