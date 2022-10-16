import React, { useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import googleLogo from "../../../assets/google-logo.svg";
import { useNavigate } from "react-router-dom";
import { app } from "../../../firebase.config"; // important don't remove
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Image,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    HStack,
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

export default function SignupComponent() {
    let [showPassword, setShowPassword] = useState();
    let [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    let [displayWarning, setDisplayWarning] = useState(false);
    function handleUserDataChange(event) {
        const { name, value } = event.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
        if (name === "password") {
            let mediumPassword = new RegExp(
                "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
            );
            let passwordCheck = mediumPassword.test(value);
            if (passwordCheck) {
                setUserData((prev) => ({ ...prev, [name]: value }));
                setDisplayWarning(false);
            } else {
                if (value !== "") {
                    setDisplayWarning(true);
                } else {
                    setDisplayWarning(false);
                }
            }
        }
    }
    let navigate = useNavigate();
    function submitUserData() {
        const filter = new RegExp(
            /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
            "gm"
        );
        if (displayWarning) {
            alert("Enter a strong Password");
        } else if (userData.firstName === "" || userData.lastName === "") {
            alert("Enter a valid Name ");
        } else if (userData.email === "" && !filter.test(userData.email)) {
            alert("Enter a valid Email");
        } else {
            const auth = getAuth();

            createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password
            )
                .then((userCredential) => {
                    console.log(userCredential.user);
                    navigate("/login");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage, errorCode);
                });
        }
    }
    function signUpWithGmail() {
        let provider = new GoogleAuthProvider();
        let auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(token, user);
                navigate("/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, "->", errorMessage);
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
                    boxShadow="2xl"
                >
                    <Stack spacing={4}>
                        <Heading
                            color={"gray.800"}
                            lineHeight={1.1}
                            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                            paddingBottom="13px"
                        >
                            Join Us
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
                            We’re looking for amazing engineers just like you!
                            Become a part of our rockstar community and
                            skyrocket your career!
                        </Text>
                    </Stack>
                    <Box as={"form"} mt={10}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input
                                            paddingX="6px"
                                            name="firstName"
                                            value={userData.firstName}
                                            type="text"
                                            onChange={handleUserDataChange}
                                        />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input
                                            paddingX="6px"
                                            name="lastName"
                                            value={userData.lastName}
                                            type="text"
                                            onChange={handleUserDataChange}
                                        />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    paddingX="6px"
                                    name="email"
                                    value={userData.email}
                                    type="email"
                                    onChange={handleUserDataChange}
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        paddingX="6px"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        value={userData.password}
                                        onChange={handleUserDataChange}
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
                            {displayWarning && (
                                <Text
                                    fontFamily={"heading"}
                                    fontSize={{ base: "xs", md: "sm" }}
                                    color={"red"}
                                >
                                    Password is weak !
                                </Text>
                            )}
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={submitUserData}
                                >
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={"center"}>
                                    Already a user?{" "}
                                    <Link href="/login" color={"blue.400"}>
                                        Login
                                    </Link>
                                </Text>
                            </Stack>
                            <Stack spacing={10} pt={5}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={"white"}
                                    color={"blue.500"}
                                    onClick={signUpWithGmail}
                                    shadow="lg"
                                    _hover={{
                                        shadow: "xl",
                                    }}
                                    marginBottom="15px"
                                    border="2px"
                                    borderColor="gray.200"
                                    padding="6"
                                >
                                    <Image
                                        src={googleLogo}
                                        alt="logo og google"
                                        mr="3"
                                    />{" "}
                                    Sign up with Google
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
