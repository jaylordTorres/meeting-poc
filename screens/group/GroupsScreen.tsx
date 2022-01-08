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
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { groups } from "../../data/groups";

export default function GroupsScreen({ navigation }: any) {
  return (
    <FlatList
      data={groups}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate("Group")}>
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
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text color="coolGray.800" bold>
                  {item.name}
                </Text>
                <Text color="coolGray.600">{item.note}</Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
                {item.members_count}
              </Text>
            </HStack>
          </Box>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export const groupsScreenNavigationOptions = ({ navigation }: any) => ({
  title: "Groups",
  headerRight: () => (
    <Pressable
      onPress={() => navigation.navigate("GroupCreate")}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <MaterialIcons name="create" size={25} style={{ marginRight: 15 }} />
    </Pressable>
  ),
});
