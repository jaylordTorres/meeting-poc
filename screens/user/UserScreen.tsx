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
} from "native-base";
import { users } from "../../data/users";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const user = users[0];

export default function UserScreen({ navigation }: any) {
  return (
    <VStack space={1} mt={3}>
      <VStack space={1} mb="5" alignItems="center">
        <Avatar
          size="150px"
          source={{
            uri: user.avatarUrl,
          }}
        />
        <Heading textAlign="center">{user.fullName}</Heading>
        <Text fontSize="md">{user.address}</Text>
        <Text fontSize="md">{user.note}</Text>
      </VStack>
      <Divider />
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("Group")}>
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
                  rounded="sm"
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
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}
