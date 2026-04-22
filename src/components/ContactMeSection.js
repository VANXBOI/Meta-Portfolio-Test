import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { useSubmit } from "../hooks/useSubmit";
import { useAlertContext } from "../context/AlertContext";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      submit(values);
    },
  });

  useEffect(() => {
    if (!response) return;

    if (response.type === "success") {
      onOpen(
        "success",
        `Thanks ${formik.values.firstName}`,
        response.message
      );
      formik.resetForm();
    } else {
      onOpen("error", "Oops!", response.message);
    }
  }, [response]);

  return (
    <Box id="contactme-section" p={10} bg="purple.700" color="white">
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4}>

          <FormControl
            isInvalid={
              formik.touched.firstName && Boolean(formik.errors.firstName)
            }
          >
            <FormLabel>Name</FormLabel>
            <Input {...formik.getFieldProps("firstName")} />
            <FormErrorMessage>
              {formik.errors.firstName}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              formik.touched.email && Boolean(formik.errors.email)
            }
          >
            <FormLabel>Email</FormLabel>
            <Input {...formik.getFieldProps("email")} />
            <FormErrorMessage>
              {formik.errors.email}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Type of enquiry</FormLabel>
            <Select {...formik.getFieldProps("type")}>
              <option value="hireMe">Hire me</option>
              <option value="openSource">Open source</option>
            </Select>
          </FormControl>

          <FormControl
            isInvalid={
              formik.touched.comment && Boolean(formik.errors.comment)
            }
          >
            <FormLabel>Your message</FormLabel>
            <Textarea {...formik.getFieldProps("comment")} />
            <FormErrorMessage>
              {formik.errors.comment}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            isLoading={isLoading}
          >
            Submit
          </Button>

        </VStack>
      </form>
    </Box>
  );
};

export default ContactMeSection;