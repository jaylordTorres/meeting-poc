import React, { useCallback } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Spacer,
  VStack,
  Text,
  Divider,
} from "native-base";
import { Pressable } from "react-native";
import { useGroup, useGroupMembers, useUser } from "../../hooks";
import GroupForm from "./component/GroupForm";

export default function GroupFromUpdateScreen({ ...props }) {
  const groupId = props.route.params.id;
  const { groups, updateGroup } = useGroup();
  const group = groups[groupId];
  const onUpdate = useCallback(
    (data = {}) => {
      updateGroup(groupId, data);
      props.navigation.goBack();
    },
    [updateGroup]
  );
  const { users } = useUser();
  const { members, removeMember } = useGroupMembers(groupId);

  return (
    <GroupForm
      key={groupId}
      {...props}
      action="update"
      onSubmit={onUpdate}
      name={group.name}
      description={group.description}
    >
      <Divider />
      <FlatList
        data={members}
        renderItem={({ item }: any) => {
          const user = users[item.userId];

          return (
            <Box
              borderBottomWidth="1"
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: user.avatarUrl,
                  }}
                />
                <VStack>
                  <Text color="coolGray.800" bold>
                    {user.fullName}
                  </Text>
                  <Text color="coolGray.600">{user.note}</Text>
                </VStack>
                <Spacer />
                <Pressable onPress={() => removeMember(groupId, user.id)}>
                  <Entypo name="remove-user" size={25} />
                </Pressable>
              </HStack>
            </Box>
          );
        }}
        keyExtractor={(item: any) => item.id}
      />
    </GroupForm>
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
