import React from "react";
import { PasswordCheckContainer, Tick } from "./styles.passwordchecklist";

const PasswordValidationChecker = ({
  show,
  password,
  onChange,
  rules = "",
  minLength = 8,
  maxLength = 15,
  confirmPassword,
}) => {
  let hasSpecialCharacter = false;
  let hasNumber = false;
  let hasUppercase = false;
  let hasLowercase = false;
  let isNotLongEnough = false;
  let isLongEnough = false;
  let passwordsMatch = false;

  if (rules.includes("specialCharacter")) {
    hasSpecialCharacter = /[!@#$%^&*)(+=._-]/.test(password);
  }
  if (rules.includes("number")) {
    hasNumber = /\d/.test(password);
  }
  if (rules.includes("uppercase")) {
    hasUppercase = /[A-Z]/.test(password);
  }
  if (rules.includes("lowercase")) {
    hasLowercase = /[a-z]/.test(password);
  }
  if (rules.includes("length")) {
    isLongEnough = password.length >= minLength;
    isNotLongEnough = maxLength;
  }
  if (rules.includes("match")) {
    passwordsMatch = password === confirmPassword;
  }
  if (password.length < 1) {
    passwordsMatch = false;
  }

  const valid =
    hasSpecialCharacter &&
    hasNumber &&
    hasUppercase &&
    hasLowercase &&
    isNotLongEnough &&
    isLongEnough &&
    passwordsMatch;

  React.useEffect(() => {
    onChange(valid);
  }, [valid, onChange]);

  return (
    <PasswordCheckContainer show={show}>
      {rules.includes("specialCharacter") ? (
        <Tick icon={hasSpecialCharacter} color="#4caf50">
          <span>Special character</span>
        </Tick>
      ) : null}
      {rules.includes("number") ? (
        <Tick icon={hasNumber} color="#4caf50">
          <span>Number</span>
        </Tick>
      ) : null}

      {rules.includes("uppercase") ? (
        <Tick icon={hasUppercase} color="#4caf50">
          <span>Uppercase letter</span>
        </Tick>
      ) : null}

      {rules.includes("lowercase") ? (
        <Tick icon={hasLowercase} color="#4caf50">
          <span>Lowercase letter</span>
        </Tick>
      ) : null}

      {rules.includes("length") ? (
        <Tick icon={isLongEnough} color="#4caf50">
          <span>Not too long</span>
        </Tick>
      ) : null}
      {rules.includes("length") ? (
        <Tick icon={isNotLongEnough} color="#4caf50">
          <span>Not too short</span>
        </Tick>
      ) : null}

      {rules.includes("match") ? (
        <Tick icon={passwordsMatch} color="#4caf50">
          <span>Passwords match</span>
        </Tick>
      ) : null}
    </PasswordCheckContainer>
  );
};
export default PasswordValidationChecker;
