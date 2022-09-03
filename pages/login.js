import { Heading, Center, VStack, FormControl, FormLabel, Text, Input, Button, Alert, AlertTitle, AlertIcon } from "@chakra-ui/react"
import { useState } from "react"

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        return
    }

    return (
        <Center color="accent_color">
            <VStack boxShadow="xl" p="10" borderRadius="lg" gap="8" w="md">
                <Heading fontSize="5xl">Log In</Heading>
                <form style={{ width: "100%" }} onSubmit={handleSignUp}>
                    <VStack gap="4">
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Name" color="white" value={name} onChange={(e) => setName(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                            < FormLabel > Password</FormLabel>
                            <Input type="password" color="white" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </FormControl>
                        <Button type="submit" size="lg" fontWeight="bold">Log In</Button>
                    </VStack>
                </form>
            </VStack >
        </Center >
    )
}