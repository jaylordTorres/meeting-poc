import React from "react";
import { Avatar, VStack, Text, Heading, Divider } from "native-base";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function GroupForm({ action, navigation }: any) {
  return (
    <VStack space={1} alignItems="center" mt={3}>
      <Avatar
        size="200px"
        // source={{
        //   uri: user.avatarUrl,
        // }}
      />
      <Text fontSize="md">group form content: {action}</Text>
      <Pressable onPress={() => navigation.navigate("GroupUpdate")}>
        <FontAwesome name="info-circle" size={25} style={{ marginRight: 15 }} />
      </Pressable>
    </VStack>
  );
}
