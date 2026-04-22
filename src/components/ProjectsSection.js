import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware",
    imageSrc:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land",
    imageSrc:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc:
      "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
];

export default function ProjectsSection() {
  return (
    <Box id="projects-section" bg="purple.900" color="white" p={10}>
      <Heading mb={6}>Featured Projects</Heading>

      <SimpleGrid columns={[1, 2]} spacing={6}>
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}