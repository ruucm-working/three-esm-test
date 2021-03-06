import * as React from "react";
import styles from "./Button.modules.css";
import styled from "styled-components";

const Box = styled.span`
  background: red;
`;

export function Button({ title = "Title" }) {
  return (
    <button className={styles.button}>
      {title}
      <Box>Box</Box>
    </button>
  );
}
