import React from "react";
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
  Button,
} from "native-base";
import { users } from "../../data/users";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Info from "../../components/Info";

const user = users[0];

export default function UserScreen({ navigation }: any) {
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
        <Text>"Handsome, Straightx" </Text>
        <Info title="Status" info="Single" />
        <Info title="Check-in" info="1:00AM" />
        <Info title="Check-out" info="3:00PM" />
        <Info title="Has Equipment" info="no" />
        <HStack space={2} mt="2" mb="2">
          <Spacer />
          <Ionicons name="call" size={25} />
          <Ionicons name="mail" size={25} />
        </HStack>
      </VStack>
      <Divider />
      <Heading>Groups</Heading>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("Group")}>
            <Box borderBottomWidth="1" borderColor="coolGray.200" py="2">
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  rounded="sm"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text color="coolGray.800" bold>
                    {item.fullName}
                  </Text>
                  <Text color="coolGray.600">{item.note}</Text>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}
