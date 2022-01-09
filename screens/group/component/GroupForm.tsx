import React, { useCallback, useRef, useState } from "react";
import { Avatar, VStack, Input, Button, Text } from "native-base";

export default function GroupForm({ action, navigation }: any) {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const onCreate = useCallback(() => {
    alert(name + description);
  }, [name, description, nameRef]);

  return (
    <VStack space={1} m="4">
      <VStack space={1} alignItems="center">
        <Avatar size="200px" />
      </VStack>
      <Input size="md" placeholder="Name" value={name} onChangeText={setName} />
      <Text>{name}</Text>
      <Input
        size="md"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      {action === "update" ? (
        <Button>Update</Button>
      ) : (
        <Button onPress={onCreate}>Create</Button>
      )}
    </VStack>
  );
}
