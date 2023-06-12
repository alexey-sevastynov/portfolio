import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
