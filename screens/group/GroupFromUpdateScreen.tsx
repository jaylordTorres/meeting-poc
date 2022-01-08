import React from "react";
import GroupForm from "./component/GroupForm";

export default function GroupFromUpdateScreen({ ...props }) {
  return <GroupForm {...props} action="update" />;
}
