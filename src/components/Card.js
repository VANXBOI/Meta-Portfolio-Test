import { HStack, VStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      bg="white"
      borderRadius="lg"
      overflow="hidden"
      spacing={0}
    >
      {/* Image */}
      <Image src={imageSrc} alt={title} w="100%" h="200px" objectFit="cover" />

      {/* Content */}
      <VStack align="start" p={4} spacing={3}>
        <Heading size="md" color="black">
          {title}
        </Heading>

        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>

        {/* See more */}
        <HStack spacing={2} color="black" fontWeight="medium">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;