import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  Button,
  ErrorText,
  Input,
  Label,
} from './MyForm.styled';
const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz
 de Castelmore d'Artagnan`,
    )
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: yup
    .string()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/,
      `Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`,
    )
    .min(5, 'Too Short!')
    .max(13, 'Too Long!')
    .required(),
});
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
const MyForm = ({ onSubmit }) => {
  const change = e => {
    const CustomInput = e.currentTarget.value;
    console.log(CustomInput);
  };
  const CustomInputComponent = props => <Input type="text" {...props} />;
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      validateOnMount
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {() => (
        <Form autoComplete="off">
          <FormContainer>
            <Label htmlFor="name">Name</Label>
            <FormError name="name" />
            <Field
              type="text"
              name="name"
              placeholder="Input new Name"
              as={CustomInputComponent}
            />
            <Label htmlFor="number">Number</Label>
            <FormError name="number" />
            <Field
              type="tel"
              name="number"
              placeholder="+380503589900"
              as={CustomInputComponent}
            />
            <Button type="submit">Add</Button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};
export default MyForm;
