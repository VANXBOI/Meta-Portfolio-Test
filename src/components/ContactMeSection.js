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

import { useFormik } from "formik";
import * as Yup from "yup";

const ContactMeSection = () => {
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
      console.log(values);
    },
  });

  return (
    <Box p={10} bg="purple.700" color="white">
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4}>

          <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
            <FormLabel>Name</FormLabel>
            <Input {...formik.getFieldProps("firstName")} />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...formik.getFieldProps("email")} />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Type of enquiry</FormLabel>
            <Select {...formik.getFieldProps("type")}>
              <option value="hireMe">Hire me</option>
              <option value="openSource">Open source</option>
            </Select>
          </FormControl>

          <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
            <FormLabel>Your message</FormLabel>
            <Textarea {...formik.getFieldProps("comment")} />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Submit
          </Button>

        </VStack>
      </form>
    </Box>
  );
};

export default ContactMeSection;