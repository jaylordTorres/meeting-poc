import React from "react";
import { Avatar, VStack, Text, Heading, Divider } from "native-base";

export default function GroupAddMemberModal() {
  return (
    <VStack space={1} alignItems="center" mt={3}>
      <Heading textAlign="center">Group name</Heading>
      <Text fontSize="md">non member list</Text>
    </VStack>
  );
}
