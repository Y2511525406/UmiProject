import { useQuery } from "@tanstack/react-query";
import { Button, Card, Layout, Menu, Select, Space, Typography } from "antd";

import { getEventBus } from "@repo/shared";

import { useShellStore } from "@/stores/useShellStore";

const { Header, Content } = Layout;

const navigateTo = (path: string) => {
  window.history.pushState(null, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const fetchHealth = async (): Promise<{ status: string; time: string }> => {
  return {
    status: "ok",
    time: new Date().toISOString()
  };
};

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ["shell-health"],
    queryFn: fetchHealth
  });
  const theme = useShellStore((state) => state.theme);
  const setTheme = useShellStore((state) => state.setTheme);
  const username = useShellStore((state) => state.username);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[window.location.pathname]}
          items={[
            { key: "/", label: "Home", onClick: () => navigateTo("/") },
            { key: "/subapp-one", label: "Subapp One", onClick: () => navigateTo("/subapp-one") },
            { key: "/subapp-two", label: "Subapp Two", onClick: () => navigateTo("/subapp-two") }
          ]}
          style={{ flex: 1 }}
        />
        <Space>
          <Typography.Text style={{ color: "#fff" }}>{username}</Typography.Text>
          <Select
            value={theme}
            options={[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" }
            ]}
            style={{ width: 120 }}
            onChange={(nextTheme) => {
              setTheme(nextTheme);
              getEventBus().emit("THEME_CHANGED", { theme: nextTheme });
            }}
          />
        </Space>
      </Header>
      <Content style={{ padding: 24 }}>
        <Card title="Main Shell (Umi + Qiankun)">
          <Space direction="vertical">
            <Typography.Text>
              React Query health: {data?.status} ({data?.time})
            </Typography.Text>
            <Button type="primary" onClick={() => navigateTo("/subapp-one")}>
              Open Subapp One
            </Button>
            <Button onClick={() => navigateTo("/subapp-two")}>Open Subapp Two</Button>
            <div id="subapp-container" />
          </Space>
        </Card>
      </Content>
    </Layout>
  );
};

export default HomePage;
