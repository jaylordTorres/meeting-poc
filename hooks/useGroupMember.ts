import { useCallback } from "react";
import { toArray } from "../util/object";
import { useUserGroup } from "./useUserGroup";

export function useGroupMembers(id: string) {
  const { userGroup, setUserGroup } = useUserGroup();

  const addMember = useCallback((groupId, userId, data = {}) => {
    const userGroupId = groupId + "#" + userId;

    setUserGroup((items: any) => ({
      [userGroupId]: {
        id: userGroupId,
        groupId: id,
        userId,
        status: "joined",
        ...data,
      },
      ...items,
    }));
  }, []);

  return {
    addMember,
    members: toArray(userGroup).filter((i: any) => i.groupId === id),
  };
}
