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
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { users } from "../../data/users";

export default function GroupScreen({ navigation }: any) {
  return (
    <VStack space={1} m="2">
      <VStack space={1} alignItems="center">
        <Avatar size="200px" />
        <Heading textAlign="center">Group name</Heading>
        <Text fontSize="md">Group info</Text>
        <Divider />
        <Text fontSize="md" mb="20">
          Note
        </Text>
      </VStack>
      <Divider />

      <Heading mt="2" mb="1">
        Members
      </Heading>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("User");
            }}
          >
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
                    alert("press remove user");
                  }}
                >
                  <Ionicons name="remove" size={25} />
                </Pressable>
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}

export const GroupScreenNavigationOptions = ({ navigation }: any) => ({
  title: "Group",
  headerRight: () => (
    <Pressable onPress={() => navigation.navigate("GroupUpdate")}>
      <FontAwesome name="edit" size={25} style={{ marginRight: 15 }} />
    </Pressable>
  ),
});
