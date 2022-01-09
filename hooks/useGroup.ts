import { useCallback, useContext } from "react";
import { GroupContext } from "../store/constant";

export function useGroup() {
  const { value, setter } = useContext<any>(GroupContext);

  const updateGroup = useCallback(
    (groupId, data = {}) => {
      setter((items: any) => ({
        ...items,
        [groupId]: { ...items[groupId], ...data },
      }));
    },
    [setter]
  );

  return { groups: value, setGroup: setter, updateGroup };
}
