import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

export default function CustomButton({ children, ...props }) {
  return (
    <CustomButtonContainer className="custom-button" {...props}>
      {children}
    </CustomButtonContainer>
  );
}
