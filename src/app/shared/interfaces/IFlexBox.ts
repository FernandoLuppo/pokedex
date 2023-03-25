export interface IFlexBox {
  direction: "row" | "column"
  justify:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit"
  align:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit"
  width?: "xsm" | "sm" | "md" | "lg" | "xl" | null
  gap?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"
  wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit"
}
