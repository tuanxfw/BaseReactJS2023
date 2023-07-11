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
  modal: {
    header: {
      background: "#00a651",
      fontColor: "#ffffff",
    },
  },
  processLoading: {
    backdrop: "#ffffff63",
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
  table: {
    borderColor: "#00a651",
    footer: {
      fontColor: "#00a651",
    },
  },
  notFound: {
    background: "#c5c5c52d",
  },
  errorBoundary: {
    background: "#c5c5c52d",
    title: {
      background: "red",
      color: "#ffffff",
    },
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
