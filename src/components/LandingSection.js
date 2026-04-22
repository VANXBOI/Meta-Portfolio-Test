import { VStack, Avatar, Heading } from "@chakra-ui/react";

const greeting = "Hello, I am Vansh Agarwal!";
const bio1 = "Learning to Become a Front End Developer";
const bio2 = "Learning React";

export default function LandingSection() {
  return (
    <VStack justify="center" align="center" h="100vh" spacing={6}>
      <Avatar size="2xl" src="https://avatars.githubusercontent.com/u/110280254?s=400&u=2680937abb1aa5be44255c48a9d509ea3c728044&v=4" />
      <Heading size="md">{greeting}</Heading>
      <Heading size="2xl" textAlign="center">
        {bio1}
        <br />
        {bio2}
      </Heading>
    </VStack>
  );
}