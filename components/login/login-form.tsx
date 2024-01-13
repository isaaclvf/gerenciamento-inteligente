import {
  Button,
  Container,
  Input,
  Spacer,
  Text,
  Loading,
  Card,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, SyntheticEvent, useEffect } from "react";

const LOGIN_ENDPOINT = `${process.env.ENDPOINT || 'http://localhost:8080'}/auth/login`;

type Status = "idle" | "loading" | "success" | "error";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/control-panel");
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      router.push("/control-panel");
    }
  }, [token]);

  const handleUsernameChange = (e: SyntheticEvent) => {
    const element = e.target as HTMLInputElement;
    setUsername(element.value);
  };

  const handlePasswordChange = (e: SyntheticEvent) => {
    const element = e.target as HTMLInputElement;
    setPassword(element.value);
  };

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setStatus("loading");

    const data = { login: username, password };

    let response;
    try {
      response = await fetch(LOGIN_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      setStatus("error");
      console.log({ error });
    }

    const content = await response?.json();
    
    if (!content.token) {
      setStatus("error");
      return;
    }

    setToken(content.token);
    setStatus("success");
  }

  return (
    <>
      <Container css={{ margin: "0 auto", width: "300px", padding: "0" }}>
        <Spacer y={2.5} />

        <Text h3 css={{ lineHeight: "2rem" }}>
          Bem-vindo, insira o seu login para continuar
        </Text>
        <Spacer y={1.5} />
        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            placeholder="username"
            width="300px"
            value={username}
            onChange={handleUsernameChange}
            name="username"
          />
          <Spacer y={1.5} />
          <Input.Password
            label="Password"
            placeholder="password"
            initialValue="password"
            width="300px"
            value={password}
            onChange={handlePasswordChange}
          />
          {status !== "loading" && (
            <>
              <Spacer y={1.5} />
              <Button css={{ width: "300px" }} type="submit">
                Entrar
              </Button>
            </>
          )}

          {status === "loading" && (
            <>
              <Spacer y={1.5} />
              <Button css={{ width: "300px" }} disabled>
                <Loading color={"currentColor"} size="sm" />
              </Button>
            </>
          )}

          {status === "error" && (
            <>
              <Spacer y={1.5} />
              <Card css={{ width: "300px", backgroundColor: "$error" }}>
                <Card.Header css={{ paddingBottom: "0px" }}>
                  <Text b color="white">
                    Algo deu errado
                  </Text>
                </Card.Header>
                <Card.Body css={{ paddingTop: "6px" }}>
                  <Text color="white">
                    Tente novamente ou entre em contato com o suporte.
                  </Text>
                </Card.Body>
              </Card>
            </>
          )}

          {status === "success" && (
            <>
              <Spacer y={1.5} />
              <Card css={{ width: "300px", backgroundColor: "$success" }}>
                <Card.Header css={{ paddingBottom: "0px" }}>
                  <Text b color="white">
                    Sucesso
                  </Text>
                </Card.Header>
                <Card.Body css={{ paddingTop: "6px" }}>
                  <Text color="white">Você está logado.</Text>
                </Card.Body>
              </Card>
            </>
          )}
        </form>
      </Container>
    </>
  );
};

export default LoginForm;
