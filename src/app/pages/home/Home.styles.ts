import styled from "styled-components"
import { FlexBox } from "../../shared/components"

export const Main = styled(FlexBox)`
  width: 100%;
  min-height: 100vh;

  input {
    padding: 3px 5px;
    outline: none;
  }
  button {
    cursor: pointer;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.xxxs};
    transition: ${({ theme }) => theme.transition.time};
    color: ${({ theme }) => theme.font.colors.white};
    background-color: #199cd4;
  }
  button:hover {
    background-color: #29ade6;
  }
`
