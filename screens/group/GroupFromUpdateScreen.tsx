import { FontAwesome, AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import GroupForm from "./component/GroupForm";

export default function GroupFromUpdateScreen({ ...props }) {
  return <GroupForm {...props} action="update" />;
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
