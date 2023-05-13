import React, { useEffect, useState } from "react";
import { UserCollection } from "../../firebase/collection/user";
import { UserType } from "../../firebase/type/user";

const Home = () => {
  useEffect(() => {
    console.log("Home");
  }, []);
  const [email, setEmail] = useState("email");

  const test = async () => {
    const data = await UserCollection.readUser("mXjlGHOIDkjz7YMuofHU");
    setEmail(String(data));
  };
  return (
    <>
      <div onClick={() => test()}>Home</div>
      <p>{email}</p>
    </>
  );
};

export default Home;
