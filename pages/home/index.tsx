import type { NextPage } from "next";
import { Content } from "../../components/home/content";
import { Layout } from "../../components/layout/layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { isTokenExpired } from "../../utils/auth";

const Home: NextPage = () => {
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
  }, [router]);

  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Home;
