import { useState } from "react";
import { users as usersData } from "../data/users";
import { groups as groupsData } from "../data/groups";
import { GroupContext, UserContext } from "../store/constant";

export const MainProvider = ({ children }: any) => {
  const [groups, setGroup] = useState(tomap(groupsData));
  const [users, setUsers] = useState(usersData);

  return (
    <GroupContext.Provider value={{ groups, setGroup }}>
      <UserContext.Provider value={{ users, setUsers }}>
        {children}
      </UserContext.Provider>
    </GroupContext.Provider>
  );
};

function tomap(o: any) {
  return o.reduce((c: any, n: any) => ({ ...c, [n.id]: n }), {});
}
