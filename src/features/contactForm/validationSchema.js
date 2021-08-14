import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too short!")
    .max(256, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .min(25, "Too short")
    .max(500, "Too long!")
    .required("Required"),
});

export default validationSchema;
