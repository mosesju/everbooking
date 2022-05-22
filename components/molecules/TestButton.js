import { Container, Flex, VStack } from '@chakra-ui/react'


export default function TestButton () {
    return(
        <Container maxWidth="container.xl" padding={0}>
            <Flex h="100vh" py={20}>
                <VStack w="full" h='full' p={10} spacing={10} alignItems="flex-start">
                    <h1>dfaß</h1>
                </VStack>
                <VStack w="full" h='full' p={10} spacing={10} alignItems="flex-start" bg="gray.50">
                    qewrf
                </VStack>
            </Flex>
        </Container>
    )
}