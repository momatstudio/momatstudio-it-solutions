import React from "react";

interface Props {
  size?: number;
  id?: string;
}
export default function Spacer({ size, id }: Props) {
  return (
    <div
      id={id}
      style={{ paddingTop: size ? size : 20, paddingBottom: size ? size : 20 }}
    ></div>
  );
}
