import { theme, type ThemeConfig } from "antd";

const customTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    fontSize: 16,
    colorPrimary: "#00b96b",
  },
  components: {
    Button: {
      colorPrimary: "#00b96b",
      algorithm: true, // Enable algorithm
    },
  },
};

export default customTheme;
