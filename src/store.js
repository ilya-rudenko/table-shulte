import bridge from "@vkontakte/vk-bridge";

const state = {
  side: "five",
  mode: "classical",
  theme: "green",
  vibration: false,
  hint: false,
};

export let isStateChanged = true;

export const STORAGE_KEYS = {
  THEME: "theme",
  SIDE: "side",
  MODE: "mode",
  VIBRATION: "vibrationOn",
  HINT: "hintOn",
}; //todo constanta

export async function fetchData(STORAGE_KEYS) {
  const data = await bridge.send("VKWebAppStorageGet", {
    keys: Object.values(STORAGE_KEYS),
  });
  isStateChanged = false;
  return data;
}

export async function setData(KEY, value) {
  //if (Object.keys(STORAGE_KEYS).includes(KEY))
  await bridge.send("VKWebAppStorageSet", {
    key: KEY,
    value: value,
  });
  isStateChanged = true;
}
