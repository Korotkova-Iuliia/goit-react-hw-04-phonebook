import styled from "styled-components";
export const ErrorText = styled.p`
  color: darkred;
`;
export const Button = styled.button`
  background-color: gray;
  color: white;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid lightgray;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    color: white;
    border: 3px solid gray;
    background-color: palevioletred;
  }
`;
export const FormContainer = styled.div`
  background-color: pink;
  padding: 1em 1em;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "0.8em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid #ccc;
  border-radius: 3px;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  ::placeholder {
    color: #ccc;
    font-size: 1em;
  }
`;
export const Label = styled.label`
  display: flex;
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "palevioletred"};
`;
