import React, { createContext, useState } from "react";

export interface IUser {
  user: { email: "" };
  searchedId: "";
}

const K9Context = createContext<[IUser, any]>([{
  user: { email: "" },
  searchedId: "",
},
()=>{}]);

//K9Context.Provider
const K9Provider = (props: any) => {
  const [state, setState] = useState<IUser>({
    user: { email: "" },
    searchedId: "",
  });
  return (
    <>
      <K9Context.Provider value={[state, setState]}>
        {props.children}
      </K9Context.Provider>
    </>
  );
};

export { K9Context, K9Provider };
