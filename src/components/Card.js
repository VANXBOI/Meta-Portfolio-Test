<VStack bg="white" borderRadius="lg" overflow="hidden" align="start">
  <Image src={imageSrc} alt={title} />

  <VStack p={4} align="start" spacing={4}>
    <Heading size="md">{title}</Heading>
    <Text color="gray.600">{description}</Text>

    <HStack>
      <Text fontWeight="bold">See more</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>
  </VStack>
</VStack>