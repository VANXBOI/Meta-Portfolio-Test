import { createContext, useContext, useState } from "react";
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box } from "@chakra-ui/react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const onOpen = (type, title, message) => {
    setAlert({ type, title, message });

    // auto close after 3 sec
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ onOpen }}>
      {alert && (
        <Box position="fixed" top="20px" left="50%" transform="translateX(-50%)" zIndex="1000">
          <Alert status={alert.type} borderRadius="md" p={4}>
            <AlertIcon />
            <Box>
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </Box>
          </Alert>
        </Box>
      )}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  return useContext(AlertContext);
};