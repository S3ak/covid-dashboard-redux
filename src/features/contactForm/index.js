import { useFormik } from "formik";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import validationSchema from "./validationSchema";
import { submitFormAsync } from "./contactFormSlice";

import { selectContactForm } from "./contactFormSlice";

const Form = styled.form`
  margin: auto;
  padding: 32px;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ValidationMessage = styled.div`
  width: 100%;
  color: red;
  font-size: 0.8rem;
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
    <div>
      {isSuccess ? (
        <p>Thank you for reaching out</p>
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <h2>Contact Us</h2>

          {formSchema.map(({ id, type }) => (
            <FormField key={id}>
              <label htmlFor={id}>{id}</label>

              <input
                id={id}
                name={id}
                type={type}
                onChange={formik.handleChange}
                value={formik.values[id]}
              />
              <ValidationMessage>{formik.errors[id]}</ValidationMessage>
            </FormField>
          ))}

          <button disabled={isSubmitDisabled} type="submit">
            Submit
          </button>
        </Form>
      )}
    </div>
  );
}
