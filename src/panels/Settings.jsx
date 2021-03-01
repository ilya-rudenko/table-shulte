import React, { useState, useEffect } from "react";

import {
  Div,
  FormItem,
  NativeSelect,
  FormLayout,
  Group,
  Header,
  Cell,
  SimpleCell,
  Switch,
} from "@vkontakte/vkui";

const sides = {
  three: "3 x 3",
  four: "4 x 4",
  five: "5 x 5",
  six: "6 x 6",
  seven: "7 x 7",
};
const modes = {
  classical: "Классический",
  alphabetical: "Алфавитный",
  hard: "Hard mode",
};
const themes = {
  green: "Классическая",
  red: "Красно-черная",
  white: "Черно-белая",
};

import { setData } from "../store";

const Settings = ({ fetchedData, id, devMode, keys }) => {
  const [currentSide, setCurrentSide] = useState(fetchedData.side);
  const [currentMode, setCurrentMode] = useState(fetchedData.mode);
  const [currentTheme, setCurrentTheme] = useState(fetchedData.theme); //

  const [isVibrationOn, setIsVibrationOn] = useState(
    fetchedData.vibrationOn == "true"
  );
  const [isHintOn, setIsHintOn] = useState(fetchedData.hintOn == "true");

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await bridge.send("VKWebAppStorageGet", {
  //       keys: Object.values(STORAGE_KEYS),
  //     });
  //     console.log(data);
  //   }
  //   //console.log(data);

  //   //updateData();
  //   fetchData();
  // }, []);

  //TODO: апишку прокинуть в другое место

  const handleSideChange = (e) => {
    setCurrentSide(e.target.value);
    setData(keys.SIDE, e.target.value);
  };
  const handleModeChange = (e) => {
    setCurrentMode(e.target.value);
    setData(keys.MODE, e.target.value);
  };
  const handleVibrationChange = () => {
    setIsVibrationOn(!isVibrationOn);

    setData(keys.VIBRATION, isVibrationOn ? "false" : "true");
    //console.log(keys.VIBRATION, isVibrationOn.toString());
  };

  const handleThemeChange = (e) => {
    setCurrentTheme(e.target.value);
    setData(keys.THEME, e.target.value);
  };

  const handleHintChange = () => {
    setIsHintOn((isHintOn) => !isHintOn);

    setData(keys.HINT, isHintOn ? "false" : "true");
  };

  return (
    <Div>
      <FormLayout>
        <Group header={<Header mode="secondary">Режим</Header>}>
          <Div>
            <NativeSelect
              defaultValue={currentMode}
              onChange={handleModeChange}
            >
              {Object.keys(modes).map((key, index) => (
                <option value={key} key={index}>
                  {modes[key]}
                </option>
              ))}
            </NativeSelect>
          </Div>
        </Group>
        <Group header={<Header mode="secondary">Размер таблицы</Header>}>
          <Div>
            <NativeSelect
              defaultValue={currentSide}
              onChange={handleSideChange}
            >
              {Object.keys(sides).map((key, index) => (
                <option value={key} key={index}>
                  {sides[key]}
                </option>
              ))}
            </NativeSelect>
          </Div>
        </Group>

        <Group
          header={<Header mode="secondary">Цветовая палитра таблицы</Header>}
        >
          <Div>
            <NativeSelect
              defaultValue={currentTheme}
              onChange={handleThemeChange}
            >
              {Object.keys(themes).map((key, index) => (
                <option value={key} key={index}>
                  {themes[key]}
                </option>
              ))}
            </NativeSelect>
          </Div>
        </Group>

        <FormItem>
          <SimpleCell
            disabled
            after={
              <Switch
                defaultChecked={isVibrationOn ? true : false}
                onClick={handleVibrationChange}
              />
            }
          >
            Виброотклик
          </SimpleCell>
          <SimpleCell
            disabled
            after={
              <Switch
                defaultChecked={isHintOn ? true : false}
                onClick={handleHintChange}
              />
            }
          >
            Подсказка
          </SimpleCell>
        </FormItem>

        {devMode && (
          <FormItem top="Тестовая информация">
            <div>current mode: {currentMode}</div>
            <div>current side: {currentSide}</div>
            <div>theme: {currentTheme}</div>
            <div>vibration: {isVibrationOn ? "true" : "false"}</div>
            <div>hint: {isHintOn ? "true" : "false"}</div>
          </FormItem>
        )}
      </FormLayout>
    </Div>
  );
};

export default Settings;
