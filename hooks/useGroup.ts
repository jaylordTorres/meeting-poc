import { useContext } from "react";
import { GroupContext } from "../store/constant";

export function useGroup() {
  const { groups, setGroup } = useContext<any>(GroupContext);
  return { groups, setGroup };
}
