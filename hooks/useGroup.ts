import { useContext } from "react";
import { GroupContext } from "../store/constant";

export function useGroup() {
  return useContext(GroupContext);
}
