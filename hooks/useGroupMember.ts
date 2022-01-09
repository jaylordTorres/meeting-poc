import { useCallback } from "react";
import { toArray } from "../util/object";
import { useUserGroup } from "./useUserGroup";

export function useGroupMembers(id: string, userId?: string) {
  const { userGroup, setUserGroup } = useUserGroup();

  const addMember = useCallback((groupId, userId, data = {}) => {
    const userGroupId = groupId + "#" + userId;

    setUserGroup((items: any) => ({
      ...items,
      [userGroupId]: {
        id: userGroupId,
        groupId: id,
        userId,
        status: "joined",
        ...data,
      },
    }));
  }, []);

  const removeMember = useCallback((groupId, userId) => {
    const userGroupId = groupId + "#" + userId;

    setUserGroup((items: any) => {
      delete items[userGroupId];
      return {
        ...items,
      };
    });
  }, []);

  return {
    addMember,
    removeMember,
    members: toArray(userGroup).filter((i: any) => i.groupId === id),
    joined: userId
      ? toArray(userGroup).filter((i: any) => i.userId === userId)
      : [],
  };
}
