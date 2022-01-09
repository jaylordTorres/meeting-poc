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
import { useGroup } from "../../hooks/useGroup";
import { toArray } from "../../util/object";

export default function GroupsScreen({ navigation }: any) {
  const { groups } = useGroup();
  return (
    <FlatList
      data={toArray(groups)}
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
                rounded={"sm"}
                size="48px"
                // source={{
                //   uri: item.avatarUrl,
                // }}
              />
              <VStack>
                <Text color="coolGray.800" bold>
                  {item.name}
                </Text>
                <Text color="coolGray.600">{item.description}</Text>
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
    <Pressable onPress={() => navigation.navigate("GroupCreate")}>
      <MaterialIcons name="create" size={25} />
    </Pressable>
  ),
});
