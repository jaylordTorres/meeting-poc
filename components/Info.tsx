import { HStack, Spacer, Text } from "native-base";

export default function Info({ title, info }: { title: String; info: String }) {
  return (
    <HStack>
      <Text>{title}</Text>
      <Spacer />
      <Text>{info}</Text>
    </HStack>
  );
}
