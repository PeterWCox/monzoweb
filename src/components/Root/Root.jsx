import React, { Fragment } from "react";
import { Accounts } from "../Accounts/Accounts";
import { Nav } from "../Nav/Nav";

export const Root = () => {
  return (
    <main>
      <Nav />
      <Accounts />
    </main>
  );
};
