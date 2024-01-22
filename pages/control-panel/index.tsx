import { useEffect } from "react";
import { ControlPanel } from "../../components/control-panel";
import { Layout } from "../../components/layout/layout";
import { useRouter } from "next/router";
import { isTokenExpired } from "../../utils/auth";

const controlPanel = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
      return;
    }

    if (isTokenExpired(token)) {
      localStorage.removeItem("token");
      router.push("/");
    }
  }, []);

  return (
    <Layout>
      <ControlPanel />
    </Layout>
  );
};

export default controlPanel;
