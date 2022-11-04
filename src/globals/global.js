import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable";
import {
  ADD_GLOBAL_USER_MESSAGE,
  CLEAR_GLOBAL_USER_MESSAGE,
} from "../store/actions/types";

export const getCSSVarValue = (name) => {
  const r = document.querySelector(":root");
  const rs = getComputedStyle(r);
  return rs.getPropertyValue(name);
};

export const setCSSVarValue = (name, value) => {
  if (typeof window === "undefined") return;
  const r = document.querySelector(":root");
  r.style.setProperty(name, value);
};

export const convertRemToPixels = (rem) => {
  const baseFontSize = getCSSVarValue("--base-font-size").trim();
  return rem * parseFloat(baseFontSize);
};

export const getBase64 = (file, cb) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {};
};

export const isWindow = () => {
  return typeof window !== "undefined";
};

export const getMonths = () => {
  const options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return options.map((month, index) => ({
    key: index,
    value: month,
    text: month,
  }));
};

export const getYears = () => {
  const startYear = 1950;
  const endYear = new Date().getFullYear();
  const yearOptions = [];

  for (var i = startYear; i <= endYear; i++) {
    yearOptions.push({ key: i, text: i, value: i });
  }

  return yearOptions;
};

export const chunkSubstr = (str, size) => {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
};

export const removeHTML = (str) => {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = str;
  return tmp.textContent || tmp.innerText || "";
};

export const containsHTML = (str) => /<[a-z][\s\S]*>/i.test(str);

export const replaceNBSPWithSpace = (str) => str.replace(/&nbsp;/g, " ");

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const removeAtIndex = (array, index) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertAtIndex = (array, index, item) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export const arrayMove = (array, oldIndex, newIndex) => {
  return dndKitArrayMove(array, oldIndex, newIndex);
};

export const handleGlobalUserMessage = (dispatch, message, type, timer) => {
  dispatch({
    type: ADD_GLOBAL_USER_MESSAGE,
    payload: {
      type: type,
      message: message,
    },
  });

  if (timer) {
    setTimeout(() => {
      dispatch({
        type: CLEAR_GLOBAL_USER_MESSAGE,
      });
    }, timer);
  }
};
