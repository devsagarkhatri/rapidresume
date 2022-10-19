import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase.config"; // important don't remove
import { useNavigate, Link as RouteLink } from "react-router-dom";
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
    Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Blur from "../background/Blur";

const avatars = [
    {
        name: "Ryan Florence",
        url: "https://bit.ly/ryan-florence",
    },
    {
        name: "Segun Adebayo",
        url: "https://bit.ly/sage-adebayo",
    },
    {
        name: "Kent Dodds",
        url: "https://bit.ly/kent-c-dodds",
    },
    {
        name: "Prosper Otemuyiwa",
        url: "https://bit.ly/prosper-baba",
    },
    {
        name: "Christian Nwamba",
        url: "https://bit.ly/code-beast",
    },
];

export default function LoginComponent(props) {
    let [showPassword, setShowPassword] = useState();
    let [loginData, setLoginData] = useState({ email: "", password: "" });
    function handleDataChange(event) {
        let { name, value } = event.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    }
    const navigate = useNavigate();

    function LoginUser() {
        let auth = getAuth();
        console.log();
        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                props.setUserIdFunction((prev) => ({
                    ...prev,
                    ["login"]: true,
                }));
                localStorage.setItem("userLoginStatus", JSON.stringify(true));
                navigate(`/dashboard/user/${user.uid}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <Box position={"relative"}>
            <Container
                as={SimpleGrid}
                maxW={"7xl"}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}
            >
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{
                            base: "3xl",
                            sm: "4xl",
                            md: "5xl",
                            lg: "6xl",
                        }}
                    >
                        Students, Interns{" "}
                        <Text
                            as={"span"}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text"
                        >
                            &
                        </Text>{" "}
                        Experienced Professionals
                    </Heading>
                    <Stack direction={"row"} spacing={4} align={"center"}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={{ base: "md", md: "lg" }}
                                    position={"relative"}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: "full",
                                        height: "full",
                                        rounded: "full",
                                        transform: "scale(1.125)",
                                        bgGradient:
                                            "linear(to-bl, red.400,pink.400)",
                                        position: "absolute",
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text
                            fontFamily={"heading"}
                            fontSize={{ base: "4xl", md: "6xl" }}
                        >
                            +
                        </Text>
                        <Flex
                            align={"center"}
                            justify={"center"}
                            fontFamily={"heading"}
                            fontSize={{ base: "sm", md: "lg" }}
                            bg={"gray.800"}
                            color={"white"}
                            rounded={"full"}
                            width={useBreakpointValue({
                                base: "44px",
                                md: "60px",
                            })}
                            height={useBreakpointValue({
                                base: "44px",
                                md: "60px",
                            })}
                            position={"relative"}
                            _before={{
                                content: '""',
                                width: "full",
                                height: "full",
                                rounded: "full",
                                transform: "scale(1.125)",
                                bgGradient:
                                    "linear(to-bl, orange.400,yellow.400)",
                                position: "absolute",
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}
                        >
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={"gray.50"}
                    rounded={"xl"}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: "lg" }}
                >
                    <Stack spacing={4}>
                        <Heading
                            color={"gray.800"}
                            lineHeight={1.1}
                            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                        >
                            Log in your Account
                            <Text
                                as={"span"}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text"
                            >
                                !
                            </Text>
                        </Heading>
                        <Text
                            color={"gray.500"}
                            fontSize={{ base: "sm", sm: "md" }}
                        >
                            to enjoy all of our cool features
                        </Text>
                    </Stack>
                    <Box rounded={"lg"} p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    paddingX="6px"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleDataChange}
                                    type="email"
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>

                                <InputGroup>
                                    <Input
                                        name="password"
                                        paddingX="6px"
                                        value={loginData.password}
                                        onChange={handleDataChange}
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                    />
                                    <InputRightElement h={"full"}>
                                        <Button
                                            variant={"ghost"}
                                            onClick={() =>
                                                setShowPassword(
                                                    (showPassword) =>
                                                        !showPassword
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: "column", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Link color={"blue.400"}>
                                        Forgot password?
                                    </Link>
                                </Stack>
                                <Button
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={LoginUser}
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                A new user?{" "}
                                <Link href="signup" color={"blue.400"}>
                                    Sign Up
                                </Link>
                            </Text>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
