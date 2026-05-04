import { useQuery } from "@tanstack/react-query";
import { Button, Card, Space, Statistic, Tag, Typography } from "antd";

import { useSubappTwoStore } from "@/stores/useSubappTwoStore";

const fetchSubappTwoHealth = async () => {
  return {
    app: "subapp-two",
    status: "ready",
    time: new Date().toISOString()
  };
};

const SubappTwoPage = () => {
  const clicks = useSubappTwoStore((state) => state.clicks);
  const increase = useSubappTwoStore((state) => state.increase);
  const theme = useSubappTwoStore((state) => state.theme);
  const { data } = useQuery({
    queryKey: ["subapp-two-health"],
    queryFn: fetchSubappTwoHealth
  });

  return (
    <Card title="Subapp Two">
      <Space direction="vertical" size="middle">
        <Typography.Text>Qiankun child app with independent Zustand store</Typography.Text>
        <Tag color={theme === "light" ? "green" : "volcano"}>Theme: {theme}</Tag>
        <Statistic title="Local Zustand Clicks" value={clicks} />
        <Button type="primary" onClick={increase}>
          Increase
        </Button>
        <Typography.Text>
          Query result: {data?.app} / {data?.status} / {data?.time}
        </Typography.Text>
      </Space>
    </Card>
  );
};

export default SubappTwoPage;
