import _ from "lodash";

const vetc = {
  scrollbar: {
    color: "#00a650ab",
    background: "#00000028",
  },
  header: {
    background: "#00a651",
    fontColor: "#ffffff",
  },
  footer: {
    background: "#00a65052",
    fontColor: "#000000",
  },
  processLoading: {
    backdrop: "#ffffff50",
    color: "#00a651",
  },
  displayBox: {
    background: "#00a651",
    fontColor: "#ffffff",
  },
  button: {
    background: "#00a651",
    fontColor: "#ffffff",
  },
};

const theme = {
  vetc,
};

const getColor = (colorQuery: string) => {
  const currentTheme = "vetc";
  const query = `${currentTheme}.${colorQuery}`;

  return _.get(theme, query, "");
};

export default getColor;