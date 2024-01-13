import { Button, Loading, Tooltip } from "@nextui-org/react";
import { useState } from "react";

interface Props {
  equipment: AirConditioner;
}

type AirConditioner = {
  id: number;
  [key: string]: any;
};

type RequestStatus = "idle" | "loading" | "success" | "error";

const ENDPOINT = `${process.env.ENDPOINT || 'http://localhost:8080'}/air/test/turnOn`;

export const ToggleAirConditionerButton = ({ equipment }: Props) => {
  const [status, setStatus] = useState<RequestStatus>("idle");

  const handleTurnOnPress = async () => {
    setStatus("loading");

    const token = localStorage.getItem("token");

    const response = await fetch(ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((err) => {
      setStatus("error");
      console.log(err); 
    });

    const content = await response?.text();

    if (content !== "ok") {
      setStatus("error");
      return;
    }

    setStatus("success");
  };

  return (
    <>
      {status === "idle" && (
        <Tooltip content="Ligar">
          <Button onPress={handleTurnOnPress} size="xs">
            Ligar
          </Button>
        </Tooltip>
      )}
      {status === "loading" && (
        <Tooltip content="Processando">
          <Button size="xs" disabled>
            <Loading color={"currentColor"} size="sm" />
          </Button>
        </Tooltip>
      )}
      {status === "success" && (
        <Tooltip content="Desligar">
          <Button size="xs">Desligar</Button>
        </Tooltip>
      )}
      {status === "error" && (
        <Tooltip content="Erro">
          <Button size="xs" disabled>
            Algo deu errado
          </Button>
        </Tooltip>
      )}
    </>
  );
};
