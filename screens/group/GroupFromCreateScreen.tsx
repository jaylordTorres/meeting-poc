import React, { useCallback } from "react";
import GroupForm from "./component/GroupForm";
import { useGroup } from "../../hooks/useGroup";
import { v4 } from "uuid";

export default function GroupFromCreateScreen({ ...props }) {
  const { setGroup } = useGroup();
  const onCreate = useCallback((data = {}) => {
    setGroup((items = []) => {
      const id = v4();
      return {
        [id]: { id, member_count: 0, avatarUrl: "", ...data },
        ...items,
      };
    });

    props.navigation.goBack();
  }, []);

  return <GroupForm {...props} action="create" onSubmit={onCreate} />;
}
