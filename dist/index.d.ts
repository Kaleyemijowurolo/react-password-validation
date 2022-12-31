import React from "react";

interface PasswordProps {
  password: string;
  show: boolean;
  confirmPassword?: string;
  minLength?: number;
  maxLength?: number;
  onChange?: (valid: boolean) => any;
}
export declare type RuleNames =
  | "minLength"
  | "maxLength"
  | "specialCharacter"
  | "number"
  | "length"
  | "uppercase"
  | "match"
  | "lowercase";

export interface PasswordValidationCheckerProps extends PasswordProps {
  className?: string;
  style?: React.CSSProperties;
  rules: RuleNames;
}

declare const PasswordValidationChecker: React.FC<PasswordValidationCheckerProps>;
export default PasswordValidationChecker;
