import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "../assets/fonts/Icons/config.json";

// #region Размер шрифтов заголовков

export const HEADER = 32;
export const HEADER_ARTICLE = 16;
export const HEADER_2 = 18;

// #endregion

export const ICON_SIZE = 20;
export const REGULAR_TEXT = 14;

export const Icon = createIconSetFromFontello(
    fontelloConfig,
    "Icons",
    "fontello.ttf"
);
