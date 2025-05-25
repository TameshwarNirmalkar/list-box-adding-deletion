import AddListWrapper from "@/components/AddListWrapper";
import theme from "@/theme/themeConfig";
import { ConfigProvider } from "antd";

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <div className="grid grid-rows-[20px_1fr_20px]">
          <AddListWrapper />
        </div>
      </div>
    </ConfigProvider>
  );
}
