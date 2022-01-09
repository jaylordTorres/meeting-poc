import React from "react";
import {
  Avatar,
  VStack,
  Text,
  FlatList,
  Box,
  HStack,
  Spacer,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useUser } from "../../hooks/useUser";
import { useGroupMembers } from "../../hooks";
import { toArray } from "../../util/object";

export default function GroupAddMemberModal({ route }: any) {
  const groupId = route.params.id;
  const { users } = useUser();
  const { members, addMember } = useGroupMembers(groupId);

  return (
    <FlatList
      data={toArray(users).filter(
        (u) => !members.find((m: any) => m.userId === u.id)
      )}
      renderItem={({ item }: any) => (
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
                uri: item.avatarUrl,
              }}
            />
            <VStack>
              <Text color="coolGray.800" bold>
                {item.fullName}
              </Text>
              <Text color="coolGray.600">{item.note}</Text>
            </VStack>
            <Spacer />
            <Pressable onPress={() => addMember(groupId, item.id)}>
              <Ionicons name="add" size={25} />
            </Pressable>
          </HStack>
        </Box>
      )}
      keyExtractor={(item: any) => item.id}
    />
  );
}
