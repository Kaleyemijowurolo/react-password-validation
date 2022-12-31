## Password Checklist Component

This component receives password and confirm password, then runs them against the parameters set in the rules.

## Installation

Run `npm i react-password-validation`

    or

Run `yarn add react-password-validation`

Use:

```
import PasswordValidationChecker from 'react-password-checker'

const PasswordChecker = () => (
     <PasswordValidationChecker
        password={"password"}
        show={true}
        confirmPassword={"password"}
        onChange={(value) => console.log(value)
        rules={"number, specialCharacter, length, lowercase, uppercase "}
        minLength={10}
        maxLength={15}
     />)
```

# Parameters:

- password: it takes password as string

- confirmPassword: it takes confirmPassword as string,

- onChange: it return a boolean value, showing the state of the checklist,

- show: it receives a boolean value to display or hide the component,

- length: 8 by default, it receives number as the length of the password

- rules: it takes check conditions and string separated by comma. e.g, rules="number, match"

NOTE: if you pass length as part of the parameters, you must provide minLength and maxLength else it will use default value
