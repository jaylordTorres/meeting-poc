import { useContext } from "react";
import { UserContext } from "../store/constant";

export function useUser(): any {
  return useContext(UserContext);
}
