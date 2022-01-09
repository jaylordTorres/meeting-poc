import { AntDesign } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { Pressable } from "react-native";
import { useGroup } from "../../hooks";
import GroupForm from "./component/GroupForm";

export default function GroupFromUpdateScreen({ ...props }) {
  const groupId = props.route.params.id;
  const { groups, setGroup } = useGroup();
  const group = groups[groupId];

  const onUpdate = useCallback(
    (data = {}) => {
      setGroup((items = {}) => ({
        [groupId]: { ...group, ...data },
        ...items,
      }));
      props.navigation.goBack();
    },
    [group, setGroup]
  );

  return (
    <GroupForm
      key={groupId}
      {...props}
      action="update"
      onSubmit={onUpdate}
      name={group.name}
      description={group.description}
    />
  );
}

export const groupFromUpdateScreenNavigationOptions = ({
  route,
  navigation,
}: any) => ({
  title: "Update Group",
  headerRight: () => (
    <Pressable
      onPress={() =>
        navigation.navigate("GroupAddMember", { id: route.params.id })
      }
    >
      <AntDesign name="adduser" size={25} />
    </Pressable>
  ),
});
