import React from "react";
import PropTypes from "prop-types";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";

import persik from "../img/persik.png";
import "./Persik.css";

const Persik = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader left={<PanelHeaderBack onClick={() => go("home")} />}>
      Persik
    </PanelHeader>
    <img className="Persik" src={persik} alt="Persik The Cat" />
  </Panel>
);

export default Persik;
