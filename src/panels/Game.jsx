import { Div, FormItem, Input } from "@vkontakte/vkui";
import React from "react";

const Game = ({ devMode, state }) => {
  return (
    <Div>
      {devMode && state && (
        <FormItem top="Тестовая информация">
          <div>current mode: {state.mode}</div>
          <div>current side: {state.side}</div>
          <div>theme: {state.theme}</div>
          <div>vibration: {state.vibrationOn}</div>
          <div>hint: {state.hintOn}</div>
        </FormItem>
      )}
    </Div>
  );
};

export default Game;
