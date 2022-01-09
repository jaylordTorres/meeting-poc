import { useState } from "react";
import { users as usersData } from "../data/users";
import { GroupContext, UserContext } from "../store/constant";

export const MainProvider = ({ children }: any) => {
  const [groups, setGroup] = useState([]);
  const [users, setUsers] = useState(usersData);

  return (
    <GroupContext.Provider value={{ groups, setGroup }}>
      <UserContext.Provider value={{ users, setUsers }}>
        {children}
      </UserContext.Provider>
    </GroupContext.Provider>
  );
};
