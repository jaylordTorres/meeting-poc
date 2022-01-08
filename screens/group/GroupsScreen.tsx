import React from "react";
import { Avatar, VStack, Text, Heading, Divider } from "native-base";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function GroupsScreen() {
  return (
    <VStack space={1} alignItems="center" mt={3}>
      <Text fontSize="md">group list content</Text>
    </VStack>
  );
}

export const groupsScreenNavigationOptions = ({ navigation }: any) => ({
  title: "Groups",
  headerRight: () => (
    <Pressable
      onPress={() => navigation.navigate("GroupCreate")}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <MaterialIcons name="create" size={25} style={{ marginRight: 15 }} />
    </Pressable>
  ),
});
