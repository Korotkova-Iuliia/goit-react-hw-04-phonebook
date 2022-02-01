import styled from "styled-components";
export const Input = styled.input.attrs((props) => ({
  type: "text",
  color: "green",
  size: props.size || "0.8em",
}))`
  color: palevioletred;
  font-size: 1em;
  width: 100%;
  margin: 0;
  border: 2px solid #ccc;
  border-radius: 3px;
  padding: ${(props) => props.size};
  ::placeholder {
    color: #ccc;
    font-size: 1em;
  }
`;
export const Label = styled.label`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "palevioletred"};
`;
