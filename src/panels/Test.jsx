import React, { useState } from "react";

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

import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28MessageOutline,
  Icon28ClipOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
} from "@vkontakte/icons";

import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import T from "./T";

const Test = ({ id, go }) => {
  const [activeStory, setActiveStory] = React.useState("feed");
  const onStoryChange = (e) => setActiveStory(e);

  return (
    <View activePanel="new-user">
      <Panel id="new-user">
        <PanelHeader>Регистрация</PanelHeader>
        <Group>
          <FormLayout>
            <FormItem
              top="E-mail"
              status={email ? "valid" : "error"}
              bottom={
                email
                  ? "Электронная почта введена верно!"
                  : "Пожалуйста, введите электронную почту"
              }
            >
              <Input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </FormItem>

            <FormItem top="Пароль">
              <Input type="password" placeholder="Введите пароль" />
            </FormItem>

            <FormItem bottom="Пароль может содержать только латинские буквы и цифры.">
              <Input type="password" placeholder="Повторите пароль" />
            </FormItem>

            <FormLayoutGroup mode="horizontal">
              <FormItem top="Имя">
                <Input />
              </FormItem>
              <FormItem top="Фамилия">
                <Input />
              </FormItem>
            </FormLayoutGroup>

            {!this.state.showPatronym ? (
              <CellButton onClick={() => this.setState({ showPatronym: true })}>
                Указать отчество
              </CellButton>
            ) : (
              <FormItem
                removable
                onRemove={this.onRemove}
                top="Отчество"
                bottom="Если у вас нет отчества — удалите этот пункт."
              >
                <Input />
              </FormItem>
            )}

            <FormItem top="Пол">
              <Select
                placeholder="Выберите пол"
                options={[
                  {
                    value: "0",
                    label: "Мужской",
                  },
                  {
                    value: "1",
                    label: "Женский",
                  },
                ]}
              />
            </FormItem>

            <FormItem top="Тип документа">
              <Radio name="type">Паспорт</Radio>
              <Radio name="type">Загран</Radio>
            </FormItem>

            {this.addressItems.map(({ label, name }) => (
              <FormItem top={label} key={name}>
                <Input name={name} />
              </FormItem>
            ))}
            <FormItem
              top="Цель поездки"
              bottom={purpose ? "" : "Пожалуйста, укажите цель поездки"}
              status={purpose ? "valid" : "error"}
            >
              <Select
                placeholder="Выберите цель поездки"
                onChange={this.onChange}
                value={purpose}
                name="purpose"
                options={[
                  {
                    value: "0",
                    label: "Бизнес или работа",
                  },
                  {
                    value: "1",
                    label: "Индивидуальный туризм",
                  },
                  {
                    value: "2",
                    label: "Посещение близких родственников",
                  },
                ]}
              />
            </FormItem>
            <FormItem top="О себе">
              <Textarea />
            </FormItem>
            <Checkbox>
              Согласен со всем <Link>этим</Link>
            </Checkbox>
            <FormItem>
              <Button size="l" stretched>
                Зарегистрироваться
              </Button>
            </FormItem>
          </FormLayout>
        </Group>
      </Panel>
    </View>
  );
};

export default Test;
