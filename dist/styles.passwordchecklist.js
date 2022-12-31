import styled from "styled-components";

export const PasswordCheckContainer = styled.div`
  display: ${(props) => (props.show === true ? "block" : "none")};
  align-items: center;
  margin: 10px 0;
`;

export const Tick = styled.div`
  font-size: 11px;
  color: ${(props) => (props.icon ? props.color : "#f44336")};
  margin-right: 0.5rem;
  span {
    margin-left: 0.3rem;
  }
  &::before {
    content: ${(props) =>
      props.icon
        ? `'${String.fromCharCode(0x2713)}'`
        : `'${String.fromCharCode(0x274c)}'`};
  }
`;
