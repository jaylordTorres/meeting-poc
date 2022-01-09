import React, { useCallback, useState } from "react";
import { Avatar, VStack, Input, Button, Text } from "native-base";

export default function GroupForm({ action, onSubmit }: any) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const onSave = useCallback(() => {
    onSubmit({ name, description });
  }, [name, description, onSubmit]);

  return (
    <VStack space={1} m="4">
      <VStack space={1} alignItems="center">
        <Avatar size="200px" />
      </VStack>
      <Input size="md" placeholder="Name" value={name} onChangeText={setName} />
      <Input
        size="md"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button onPress={onSave}>
        {action === "update" ? "Update" : "Create"}
      </Button>
    </VStack>
  );
}
