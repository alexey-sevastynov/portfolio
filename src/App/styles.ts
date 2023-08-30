import styled from "styled-components";

export const UpScreen = styled.div`
  width: 50px;
  height: 60px;
  position: fixed;
  display: flex;

  bottom: 20px;
  right: 10px;

  & svg {
    cursor: pointer;
    &:hover {
      & rect {
        &:first-child {
          fill: black;
        }
      }
      & circle {
        fill: black;
      }
    }
  }
`;
