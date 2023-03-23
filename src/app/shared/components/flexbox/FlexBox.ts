import styled from "styled-components"

import type { IFlexBox } from "./IFlexBox"

export const FlexBox = styled.div<IFlexBox>`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  max-width: ${props =>
    props?.width !== null && props?.width !== undefined
      ? props?.theme?.breakpoints?.[props?.width]
      : "100%"};
  width: 100%;
  gap: ${props =>
    props?.gap !== undefined ? props?.theme?.spacing?.[props?.gap] : 0};
  flex-wrap: ${props => (props.wrap !== null ? props.wrap : null)};
`
