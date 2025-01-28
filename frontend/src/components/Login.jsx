import { Input, Flex, Text, Card, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";
import "./style.css";
const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
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

              <PasswordInput
                placeholder="Password"
                type="password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              ></PasswordInput>
              <Button>Log in</Button>

              <Text>
                Don't have an account?{" "}
                <Link className="link link-hover" to={"/signup"}>
                  Sign up
                </Link>
              </Text>
            </VStack>
          </Card.Body>
        </Card.Root>
      </Flex>
    </>
  );
};

export default Login;
