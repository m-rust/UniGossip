import {
  Input,
  Flex,
  Text,
  Card,
  VStack,
  Button,
  Box,
  Alert,
} from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router-dom";
import "./style.css";
import SigninUsingEmailAndPsw from "@/hooks/SigninUsingEmailAndPsw";

import { useState } from "react";

import "./style.css";
const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const Demo = (msg) => {
    return (
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Error</Alert.Title>
          <Alert.Description>{msg}</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    );
  };

  const { loading, signup, error } = SigninUsingEmailAndPsw();

  return (
    <>
      <Flex align="center" justifyContent="center" width="100%" height="100vh">
        <Card.Root
          maxW="lg"
          w="400px"
          p={6}
          boxShadow="lg"
          borderRadius="md"
          minW="sm"
        >
          <Card.Header>
            <Card.Title color="gray.300" fontSize={"3xl"}>
              UniGossip
            </Card.Title>
            <Text color="pink">xoxo gossip girl</Text>
          </Card.Header>

          <Card.Body>
            <VStack spaceY={3}>
              <Input
                placeholder="Username"
                type="text"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              ></Input>
              <Input
                placeholder="Email"
                type="email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
              ></Input>
              <PasswordInput
                placeholder="Password"
                type="password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              ></PasswordInput>
              <PasswordInput
                placeholder="Confirm password"
                type="password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              ></PasswordInput>
              {inputs.password !== inputs.confirmPassword ? (
                <Text color="red.500">Passwords don't match</Text>
              ) : null}

              {error && Demo(error.message)}

              <Button isLoading={loading} onClick={() => signup(inputs)}>
                Sign up
              </Button>

              <Text>
                Already have an account?{" "}
                <Link className="link link-hover" to={"/login"}>
                  Log in
                </Link>
              </Text>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Flex>
    </>
  );
};
export default Signup;
