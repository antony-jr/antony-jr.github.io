import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Textarea,
  FormHelperText,
  Button,
  Center,
  Box,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";

import axios from "axios";

export default function ContactForm(props) {
  const toast = useToast();

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "E-Mail is required";
    }
    return error;
  }

  function validateMessage(value) {
    let error;
    if (!value) {
      error = "Message is required";
    }
    return error;
  }

  return (
    <Box>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values, actions) => {
          axios
            .post(props.api ? props.api : "/api/contact", values)
            .then(({ data }) => {
              actions.setSubmitting(false);
              actions.resetForm();
              if (!data.error) {
                toast({
                  title: "Message Sent",
                  description:
                    "Hi " +
                    values.name +
                    ", Thanks for contacting, your message has been sent. 💕",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: "Failed to Send",
                  description:
                    "Sorry " + values.name + ", Something went wrong. 😥",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                console.log(data);
              }
            });
        }}
      >
        {(props) => {
          return (
            <Form>
              <Field name="email" validate={validateEmail}>
                {({ field, form }) => {
                  return (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                      id="email"
                      isRequired
                    >
                      <FormLabel>Email address</FormLabel>
                      <Input
                        {...field}
                        id="email"
                        _focus={{
                          boxShadow:
                            "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        _hover={{ borderColor: "black" }}
                        size="lg"
                        placeholder="Contact Email"
                        type="email"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <br />
              <Field name="name" validate={validateName}>
                {({ field, form }) => {
                  return (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                      id="name"
                      isRequired
                    >
                      <FormLabel>Name</FormLabel>
                      <Input
                        {...field}
                        id="name"
                        _focus={{
                          boxShadow:
                            "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        _hover={{ borderColor: "black" }}
                        size="lg"
                        placeholder="What you want me to call you?"
                        type="text"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <br />

              <Field name="message" validate={validateMessage}>
                {({ field, form }) => {
                  return (
                    <FormControl
                      id="message"
                      isInvalid={form.errors.message && form.touched.message}
                      isRequired
                    >
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        {...field}
                        _focus={{
                          boxShadow:
                            "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        _hover={{ borderColor: "black" }}
                        id="message"
                        rows={10}
                        size="lg"
                        placeholder="Message"
                        type="text"
                      />
                      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <br />
              <Center>
                <Button
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(255, 255, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                  _hover={{ borderColor: "black" }}
                  isLoading={props.isSubmitting}
                  size="lg"
                  height="48px"
                  width="200px"
                  type="submit"
                >
                  Send
                </Button>
              </Center>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
