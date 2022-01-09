import { useContext } from "react";
import { UserGroupContext } from "../store/constant";

export function useUserGroup(): any {
  const { value, setter } = useContext<any>(UserGroupContext);
  return { userGroup: value, setUserGroup: setter };
}
