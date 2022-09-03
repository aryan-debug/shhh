import { Spacer, Heading, Center, HStack } from "@chakra-ui/react"
import { Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"

export default function Header() {
    return (
        <Center m="30px">
            <HStack w="90%" color="accent_color">
                <Link href="/">
                    <Heading cursor="pointer">Shh</Heading>
                </Link>
                <Spacer />
                <HStack gap="20px" fontSize="lg">
                    <Link href="signup" passHref>
                        <ChakraLink>Sign Up</ChakraLink>
                    </Link>
                    <Link href="login" passHref>
                        <ChakraLink>Log In</ChakraLink>
                    </Link>
                </HStack>
            </HStack>
        </Center>
    )
}