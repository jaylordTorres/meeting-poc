import { StyleSheet } from "react-native";

import React from "react";
import {
  Box,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
} from "native-base";
import { users } from "../../data/users";
import { View } from "../../components/Themed";

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => (
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
                  {item.fullName}
                </Text>
                <Text color="coolGray.600">{item.note}</Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
                info
                {/* {item.timeStamp} */}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
