import React from "react";
import { Avatar, VStack, Text, Heading, Divider } from "native-base";

export default function GroupFormScreen() {
  return (
    <VStack space={1} alignItems="center" mt={3}>
      <Avatar
        size="200px"
        // source={{
        //   uri: user.avatarUrl,
        // }}
      />
      <Text fontSize="md">group form content</Text>
    </VStack>
  );
}
