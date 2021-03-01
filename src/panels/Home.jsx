import React from "react";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import { Cell } from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import Epic from "@vkontakte/vkui/dist/components/Epic/Epic";
import Tabbar from "@vkontakte/vkui/dist/components/Tabbar/Tabbar";
import View from "@vkontakte/vkui/dist/components/View/View";
import TabbarItem from "@vkontakte/vkui/dist/components/TabbarItem/TabbarItem";
import Placeholder from "@vkontakte/vkui/dist/components/Placeholder/Placeholder";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import bridge from "@vkontakte/vk-bridge";

import Settings from "./Settings";
import Game from "./Game";
import { fetchData, STORAGE_KEYS, isStateChanged } from "../store";

import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28MessageOutline,
  Icon28ClipOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
  Icon24GearOutline,
  Icon24Square4Outline,
} from "@vkontakte/icons";

const DEV_MODE = true;

const Home = ({ id, go, fetchedUser }) => {
  const [activeStory, setActiveStory] = React.useState("game");
  const [state, setState] = React.useState(null);
  const onStoryChange = (e) => setActiveStory(e);

  React.useEffect(() => {
    fetchData(STORAGE_KEYS).then((result) => {
      setState({
        theme: result.keys[0].value,
        side: result.keys[1].value,
        mode: result.keys[2].value,
        vibrationOn: result.keys[3].value,
        hintOn: result.keys[4].value,
      });
    });
    //console.log(state);
  }, [isStateChanged]);

  //console.log(state);
  return (
    <Panel id={id}>
      <Epic
        activeStory={activeStory}
        tabbar={
          <Tabbar>
            <TabbarItem
              onClick={() => onStoryChange("game")}
              selected={activeStory === "game"}
              text="Игра"
            >
              <Icon24Square4Outline />
            </TabbarItem>
            <TabbarItem
              onClick={() => onStoryChange("settings")}
              selected={activeStory === "settings"}
              text="Настройки"
            >
              <Icon24GearOutline />
            </TabbarItem>
          </Tabbar>
        }
      >
        <View id="game" activePanel="game">
          <Panel id="game">
            <PanelHeader>Игра</PanelHeader>
            <Group>
              <Game devMode={DEV_MODE} state={state} />
            </Group>
          </Panel>
        </View>
        <View id="settings" activePanel="settings">
          <Panel id="settings">
            <PanelHeader>Настройки</PanelHeader>
            <Group>
              <Settings
                devMode={DEV_MODE}
                keys={STORAGE_KEYS}
                fetchedData={state}
              />
            </Group>
          </Panel>
        </View>
      </Epic>
    </Panel>
  );
};

export default Home;
