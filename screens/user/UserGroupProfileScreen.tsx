import React, { useCallback, useState } from "react";
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
  Input,
  Switch,
} from "native-base";
import { Pressable } from "react-native";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Info from "../../components/Info";
import { useGroup, useGroupMembers, useUser } from "../../hooks";

export default function UserGroupProfileScreen({ navigation, route }: any) {
  const { groupId, userId } = route.params;

  const {
    isEdit,
    onCancel,
    onEdit,
    onSave,
    hasEquipment,
    onChangeEqupment,
    setNote,
    setStatus,
    note,
    status,
    users,
    groups,
    joined,
  } = useUserGroupProfileForm({ groupId, userId });

  const user = users[userId];
  const group = groups[groupId];

  return (
    <VStack space={1} m="2">
      <VStack space={2} mb="5" alignItems="center">
        <Avatar
          size="150px"
          source={{
            uri: user.avatarUrl,
          }}
        />
        <Heading textAlign="center">{user.fullName}</Heading>
        <Text>{user.note} </Text>
        <Info title="Current Group" value={group.name} />
        <Info
          title="Status"
          value={status}
          field={
            <Input
              size="8"
              width={200}
              value={status}
              onChangeText={setStatus}
            />
          }
          isEdit={isEdit}
        />
        <Info
          title="Note"
          value={note}
          isEdit={isEdit}
          field={
            <Input size="8" width={200} value={note} onChangeText={setNote} />
          }
        />
        <Info title="Check-in" value="1:00AM" />
        <Info title="Check-out" value="3:00PM" />
        <Info
          title="Has Equipment"
          value={hasEquipment ? "yes" : "no"}
          isEdit={isEdit}
          field={
            <Switch
              onValueChange={onChangeEqupment}
              value={hasEquipment}
              key={String(hasEquipment)}
            />
          }
        />

        <HStack space={2} mt="2" mb="2">
          <Ionicons name="call" size={25} />
          <Ionicons name="mail" size={25} />
          <Spacer />
          {isEdit ? (
            <Pressable onPress={onCancel}>
              <MaterialIcons name="cancel" size={25} />
            </Pressable>
          ) : null}

          {isEdit ? (
            <Pressable onPress={onSave}>
              <Entypo name="save" size={25} />
            </Pressable>
          ) : (
            <Pressable onPress={onEdit}>
              <Entypo name="edit" size={25} />
            </Pressable>
          )}
        </HStack>
      </VStack>
      <Divider />
      <Heading>Groups</Heading>

      <FlatList
        data={joined}
        renderItem={({ item }) => {
          const group = groups[item.groupId];
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("Group", {
                  id: item.groupId,
                  groupId: item.groupId,
                })
              }
            >
              <Box borderBottomWidth="1" borderColor="coolGray.200" py="2">
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    rounded="sm"
                    // source={{
                    //   uri: group.avatarUrl,
                    // }}
                  />
                  <VStack>
                    <Text color="coolGray.800" bold>
                      {group.name}
                    </Text>
                    <Text color="coolGray.600">{group.description}</Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}

function useUserGroupProfileForm(params: any) {
  const { users } = useUser();
  const { groups } = useGroup();
  const { updateMember, joined, currentItem } = useGroupMembers(
    params.groupId,
    params.userId
  );

  const [isEdit, setEdit] = useState(false);
  const [note, setNote] = useState(currentItem?.note || "");
  const [status, setStatus] = useState(currentItem?.status || "");
  const [hasEquipment, setHasEquipment] = useState(
    currentItem?.hasEquipment || false
  );

  const onCancel = useCallback(() => {
    setEdit(false);
  }, []);

  const onEdit = useCallback(() => {
    setEdit(true);
  }, []);

  const onSave = useCallback(() => {
    updateMember({ status, note, hasEquipment });
    setEdit(false);
  }, [status, note, hasEquipment]);

  const onChangeEqupment = useCallback(() => {
    setHasEquipment((v: boolean) => !v);
  }, [setHasEquipment]);

  return {
    onChangeEqupment,
    isEdit,
    onCancel,
    onEdit,
    onSave,
    hasEquipment,
    setNote,
    setStatus,
    note,
    status,
    users,
    groups,
    joined,
  };
}
