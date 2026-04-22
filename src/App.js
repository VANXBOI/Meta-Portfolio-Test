import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import { Box } from "@chakra-ui/react";




function App() {
  return (
    <Box bg="purple.900" color="white" minH="100vh">
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
    </Box>
  );
}



export default App;