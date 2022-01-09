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
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useGroup, useGroupMembers, useUser } from "../../hooks";

export default function GroupScreen({ navigation, route }: any) {
  const groupId = route.params.id;
  const { groups } = useGroup();
  const { users } = useUser();
  const { members } = useGroupMembers(groupId);
  const group = groups[groupId];

  return (
    <VStack space={1} m="2">
      <VStack space={1} alignItems="center" mb="8">
        <Avatar size="20" />
        <Heading textAlign="center">{group.name}</Heading>
        <Text fontSize="md">{group.description}</Text>
      </VStack>
      <Divider />
      <Heading mt="2" mb="1">
        Members
      </Heading>

      <FlatList
        data={members}
        renderItem={({ item }) => {
          const user = users[item.userId];
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("UserGroupProfile", {
                  userId: user.id,
                  groupId: item.groupId,
                });
              }}
            >
              <Box
                borderBottomWidth="1"
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    source={{
                      uri: user.avatarUrl,
                    }}
                  />
                  <VStack>
                    <Text color="coolGray.800" bold>
                      {user.fullName}
                    </Text>
                    <Text color="coolGray.600">{user.note}</Text>
                  </VStack>
                  <Spacer />
                  <VStack>
                    <Text color="coolGray.800" bold>
                      Status
                    </Text>
                    <Text color="coolGray.600">time out</Text>
                  </VStack>
                </HStack>
              </Box>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.userId}
      />
    </VStack>
  );
}

export const GroupScreenNavigationOptions = ({ route, navigation }: any) => ({
  title: "Group",
  headerRight: () => (
    <Pressable
      onPress={() =>
        navigation.navigate("GroupUpdate", { id: route.params.id })
      }
    >
      <FontAwesome name="edit" size={25} />
    </Pressable>
  ),
});
