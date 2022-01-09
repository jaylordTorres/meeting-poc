import React from "react";
import {
  Avatar,
  VStack,
  Text,
  Heading,
  Divider,
  FlatList,
  Box,
  HStack,
  Spacer,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useUser } from "../../hooks/useUser";

export default function GroupAddMemberModal() {
  const { users } = useUser();
  return (
    <FlatList
      data={users}
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
            <Pressable
              onPress={() => {
                alert("sample");
              }}
            >
              <Ionicons name="add" size={25} />
            </Pressable>
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
