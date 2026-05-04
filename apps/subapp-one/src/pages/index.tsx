import { useQuery } from "@tanstack/react-query";
import { Button, Card, Space, Statistic, Tag, Typography } from "antd";

import { useSubappOneStore } from "@/stores/useSubappOneStore";

const fetchSubappOneHealth = async () => {
  return {
    app: "subapp-one",
    status: "ready",
    time: new Date().toISOString()
  };
};

const SubappOnePage = () => {
  const count = useSubappOneStore((state) => state.count);
  const increment = useSubappOneStore((state) => state.increment);
  const theme = useSubappOneStore((state) => state.theme);
  const { data } = useQuery({
    queryKey: ["subapp-one-health"],
    queryFn: fetchSubappOneHealth
  });

  return (
    <Card title="Subapp One">
      <Space direction="vertical" size="middle">
        <Typography.Text>Qiankun child app with Umi + Zustand + React Query + Antd</Typography.Text>
        <Tag color={theme === "light" ? "blue" : "purple"}>Theme: {theme}</Tag>
        <Statistic title="Local Zustand Count" value={count} />
        <Button type="primary" onClick={increment}>
          Increment
        </Button>
        <Typography.Text>
          Query result: {data?.app} / {data?.status} / {data?.time}
        </Typography.Text>
      </Space>
    </Card>
  );
};

export default SubappOnePage;
