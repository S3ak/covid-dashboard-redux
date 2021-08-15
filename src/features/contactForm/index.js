import { useFormik } from "formik";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import validationSchema from "./validationSchema";
import { submitFormAsync } from "./contactFormSlice";

import { selectContactForm } from "./contactFormSlice";

const Form = styled.form`
  margin: auto;
  padding: var(--size-m) var(--size-m) 0;
  width: 100%;
  max-width: var(--content-container-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--size-m);
`;

const FormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--size-s);
`;

const ValidationMessage = styled.p`
  width: 100%;
  color: red;
  font-size: 0.8rem;
`;

const Label = styled.label`
  font-size: var(--f-size);
`;

const Text = styled.h2`
  font-size: var(--f-size-l);
  font-style: italic;
`;

const Input = styled.input`
  min-height: 34px;
  font-size: var(--f-size-m);
  padding: var(--size-xs);
  border: 1px solid var(--c-accent);
  border-radius: var(--radius-s);
`;

const Button = styled.button`
  outline: none;
  width: 65%;
  min-width: 170px;
  max-width: 300px;
  min-height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--f-size-m);
  color: var(--c-action);
  border: 2px solid currentColor;
  border-radius: var(--radius-s);
  background-color: transparent;
  cursor: pointer;
  transition: box-shadow 400ms, border 300ms;

  :hover {
    border: 3px solid currentColor;
    box-shadow: 4px 5px 19px -9px rgba(0, 0, 0, 0.54);
  }

  :disabled {
    cursor: blocked;
    border: 3px solid currentColor;
    color: var(--c-disabled);
  }
`;

const formSchema = [
  {
    id: "name",
    type: "text",
  },
  {
    id: "email",
    type: "email",
  },
  {
    id: "message",
    type: "text",
  },
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ContactForm() {
  const { status, isSuccess } = useSelector(selectContactForm);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(submitFormAsync());
    },
  });

  const isSubmitDisabled =
    (status === "posting" && formik.isSubmitting) || !formik.isValid;

  return (
    <>
      {isSuccess ? (
        <Text>Thank you for reaching out</Text>
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <Text>Contact Us</Text>

          {formSchema.map(({ id, type }) => (
            <FormField key={id}>
              <Label htmlFor={id}>{capitalizeFirstLetter(id)}</Label>

              <Input
                id={id}
                name={id}
                type={type}
                onChange={formik.handleChange}
                value={formik.values[id]}
              />
              <ValidationMessage>{formik.errors[id]}</ValidationMessage>
            </FormField>
          ))}

          <Button disabled={isSubmitDisabled} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </>
  );
}
