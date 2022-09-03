import { Heading, Center, VStack, FormControl, FormLabel, Text, Input, Button, Alert, AlertTitle, AlertIcon } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios";
import { useRouter } from "next/router";


export default function SignUp() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({})
    const router = useRouter()
    async function handleSignUp(event) {
        event.preventDefault();
        await axios.post("/api/signup", { name, password, confirmPassword })
            .then(
                setErrors({}),
                router.push("/login")
            )
            .catch((err) => {
                console.log(err)
                if (err) {
                    const recieved_errors = err.response.data.errors
                    setErrors(recieved_errors)
                    console.log(errors)
                }
            })
    }
    return (
        <Center color="accent_color">
            <VStack boxShadow="xl" p="10" borderRadius="lg" gap="8" w="md">
                <Heading fontSize="5xl">Sign Up</Heading>
                <form style={{ width: "100%" }} onSubmit={handleSignUp}>
                    <VStack gap="4">
                        <FormControl>
                            {"username" in errors && (
                                <Alert status='error' p="0">
                                    <AlertIcon color={"white"} />
                                    <AlertTitle color="white">{errors.username}</AlertTitle>
                                </Alert>
                            )}
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Name" color="white" value={name} onChange={(e) => setName(e.target.value)} required />
                        </FormControl>
                        <FormControl>
                            {"password" in errors && (
                                <Alert status='error' p="0">
                                    <AlertIcon color={"white"} />
                                    <AlertTitle color="white">{errors.password}</AlertTitle>
                                </Alert>
                            )}
                            < FormLabel > Password</FormLabel>
                            <Input type="password" color="white" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" color="white" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
                        </FormControl>
                        <Button type="submit" size="lg" fontWeight="bold">Sign Up</Button>
                    </VStack>
                </form>
            </VStack >
        </Center >
    )
}