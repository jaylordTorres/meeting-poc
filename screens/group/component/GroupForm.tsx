import React from "react";
import { Avatar, VStack, Input, Button } from "native-base";

export default function GroupForm({ action, navigation }: any) {
  return (
    <VStack space={1} m="4">
      <VStack space={1} alignItems="center">
        <Avatar size="200px" />
      </VStack>
      <Input size="md" placeholder="Name" />
      <Input size="md" placeholder="Description" />

      {action === "update" ? <Button>Update</Button> : <Button>Create</Button>}
    </VStack>
  );
}
