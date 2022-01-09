import { HStack, Spacer, Text } from "native-base";

export default function Info({
  title,
  value,
  field,
  isEdit = false,
}: {
  isEdit?: boolean;
  title: String;
  value: String;
  field?: any;
}) {
  return (
    <HStack>
      <Text>{title}</Text>
      <Spacer />
      {isEdit ? field : <Text>{value}</Text>}
    </HStack>
  );
}
