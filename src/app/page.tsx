"use server";

import { Button } from "./_components/button";

const HomePage = () => {
  const data = ["item1", "item2", "item3"];

  const handleClick = async () => {
    data.push("new item");
    console.log("clicked");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {data.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default HomePage;
