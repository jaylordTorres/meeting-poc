import React from "react";
import { Avatar, VStack, Text, Heading, Divider } from "native-base";

export default function GroupScreen() {
  return (
    <VStack space={1} alignItems="center" mt={3}>
      {/* <Avatar
        size="200px"
        source={{
          uri: group.avatarUrl,
        }}
      /> */}
      <Heading textAlign="center">Group name</Heading>
      <Text fontSize="md">Group info</Text>
      <Divider />
      <Text fontSize="md">Note</Text>
    </VStack>
  );
}
