import { Box, Button, Flex, Heading, Input, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaBook, FaCheckCircle, FaMusic, FaStickyNote, FaUserCircle, FaUsers } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.800", "gray.900");
  const textColor = useColorModeValue("white", "gray.100");
  const accentColor = "red.500";

  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh">
      <Flex px={8} py={4} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">
          GPT Engineer
        </Text>
        <Button leftIcon={<FaBook />} variant="ghost" colorScheme="whiteAlpha">
          Docs
        </Button>
        <Flex alignItems="center">
          <Image borderRadius="full" boxSize="40px" src="https://images.unsplash.com/photo-1592160884144-921e26cb84e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbnRvbiUyME9zaWthfGVufDB8fHx8MTcxMzg5OTE4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
          <Text ml={2}>Anton Osika</Text>
        </Flex>
      </Flex>
      <VStack spacing={4} mt={10} alignItems="center">
        <Heading as="h1" size="2xl">
          What do you want to build?
        </Heading>
        <Input placeholder="Enter your project idea" size="lg" w="80%" />
        <Flex gap={2}>
          <Button leftIcon={<FaCheckCircle />} variant="outline">
            Todo
          </Button>
          <Button leftIcon={<FaUserCircle />} variant="outline">
            Personal website
          </Button>
          <Button leftIcon={<FaStickyNote />} variant="outline">
            Notes
          </Button>
          <Button leftIcon={<FaMusic />} variant="solid" colorScheme="red">
            Band website
          </Button>
          <Button leftIcon={<FaUsers />} variant="outline">
            Chat
          </Button>
          <Button leftIcon={<FaBook />} variant="outline">
            Dashboard
          </Button>
        </Flex>
        <Button size="lg" colorScheme="red" px={12} py={6}>
          Create
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
