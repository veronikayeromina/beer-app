import React from "react";
import Button from "@mui/material/Button";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import SportsBarIcon from "@mui/icons-material/SportsBar";

export const TAB = {
  pizza: "pizza",
  meat: "meat",
  all: "",
} as const;

type Props = {
  setTab: (tab: "pizza" | "meat" | "") => void;
};

function ButtonGroup({ setTab }: Props) {
  return (
    <div className="button_group">
      <Button onClick={() => setTab(TAB.pizza)}>
        <LocalPizzaIcon />
      </Button>
      <Button onClick={() => setTab(TAB.meat)}>
        <KebabDiningIcon />
      </Button>
      <Button onClick={() => setTab(TAB.all)}>
        <SportsBarIcon />
      </Button>
    </div>
  );
}

export default ButtonGroup;
