import { Col, Row, User, Text, Tooltip } from "@nextui-org/react";
import React, { useState } from "react";
import { equipments } from "./data";
import { StyledBadge } from "./table.styled";
import { Button } from "@nextui-org/react";
import { ToggleAirConditionerButton } from "./toggle-air-conditioner-button";

interface Props {
  equipment: (typeof equipments)[number];
  columnKey: string | React.Key;
}

type Status =
  | "success"
  | "warning"
  | "error"
  | "default"
  | "primary"
  | "secondary"
  | "gradient"
  | undefined;

function getColor(str: string): Status {
  if (str === "ligado") {
    return "success";
  }
  if (str === "desligado") {
    return "warning";
  }

  if (str === "reparo") {
    return "error";
  }

  return undefined;
}

export const RenderCell = ({ equipment, columnKey }: Props) => {
    // @ts-ignore
  const cellValue = equipment[columnKey];
  switch (columnKey) {
    case "name":
      return (
        <User
          name={cellValue}
          css={{ p: 0 }}
          size="xs"
          color={getColor(equipment.status)}
        >
          {equipment.count}
        </User>
      );
    case "role":
      return (
        <Col>
          <Row>
            <Text b size={14} css={{ tt: "capitalize" }}>
              {cellValue}
            </Text>
          </Row>
          <Row>
            <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
              {equipment.team}
            </Text>
          </Row>
        </Col>
      );
    case "status":
      return (
        // @ts-ignore
        <StyledBadge type={String(equipment.status)}>{cellValue}</StyledBadge>
      );

    case "actions":
      return (
        <Row
          justify="center"
          align="center"
          css={{ gap: "$8", "@md": { gap: 0 } }}
        >
          <Col css={{ d: "flex" }}>
            {/* <Tooltip content="Ligar">
              <Button
                onPress={handleTurnOnPress}
                size="xs"
              >
                Ligar
              </Button>
            </Tooltip> */}
            <ToggleAirConditionerButton equipment={equipment}/>
          </Col>
        </Row>
      );
    default:
      return cellValue;
  }
};
