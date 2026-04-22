import { useState } from "react";

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = (values) => {
    setIsLoading(true);

    // simulate API delay
    setTimeout(() => {
      const isSuccess = Math.random() < 0.5;

      if (isSuccess) {
        setResponse({
          type: "success",
          message: "Thanks for your submission, we will get back to you shortly!",
        });
      } else {
        setResponse({
          type: "error",
          message: "Something went wrong, please try again later!",
        });
      }

      setIsLoading(false);
    }, 1500);
  };

  return { isLoading, response, submit };
};