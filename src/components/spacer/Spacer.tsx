import React from "react";

interface Props {
  size?: number;
}
export default function Spacer({ size }: Props) {
  return (
    <div
      style={{ paddingTop: size ? size : 20, paddingBottom: size ? size : 20 }}
    ></div>
  );
}
