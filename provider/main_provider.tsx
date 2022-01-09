import { useMemo, useState } from "react";
import { users as usersData } from "../data/users";
import { GroupContext, UserContext, UserGroupContext } from "../store/constant";
import { toMap } from "../util/object";

const UserProvider = MainStore(UserContext, usersData);
const GroupProvider = MainStore(GroupContext, {});
const UserGroupProvider = MainStore(UserGroupContext, []);

export const MainProvider = ({ children }: any) => {
  return (
    <GroupProvider>
      <UserProvider>
        <UserGroupProvider>{children}</UserGroupProvider>
      </UserProvider>
    </GroupProvider>
  );
};

function MainStore(Context: React.Context<{}>, defaultValue: any) {
  return ({ children }: any) => {
    const [value, setter] = useState(toMap(defaultValue));
    const cache = useMemo(() => ({ value, setter }), [value, setter]);

    return <Context.Provider value={cache}>{children}</Context.Provider>;
  };
}
