import React from "react";
import GroupForm from "./component/GroupForm";

export default function GroupFromCreateScreen({ ...props }) {
  return <GroupForm {...props} action="create" />;
}
