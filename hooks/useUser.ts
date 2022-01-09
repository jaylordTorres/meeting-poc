import { useContext } from "react";
import { UserContext } from "../store/constant";

export function useUser(): any {
  const { value, setter } = useContext<any>(UserContext);
  return { users: value, setUser: setter };
}
