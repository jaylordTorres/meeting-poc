import { useContext } from "react";
import { GroupContext } from "../store/constant";

export function useGroup() {
  const { value, setter } = useContext<any>(GroupContext);
  return { groups: value, setGroup: setter };
}
