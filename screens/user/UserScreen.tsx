import React from "react";
import { Avatar, VStack, Text, Heading, Divider } from "native-base";
import { users } from "../../data/users";

const user = users[0];

export default function UserScreen() {
  return (
    <VStack space={1} alignItems="center" mt={3}>
      <Avatar
        size="150px"
        source={{
          uri: user.avatarUrl,
        }}
      />
      <Heading textAlign="center">{user.fullName}</Heading>
      <Text fontSize="md">{user.address}</Text>
      <Divider />
      <Text fontSize="md">{user.note}</Text>
    </VStack>
  );
}
