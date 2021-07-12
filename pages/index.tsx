import Link from 'next/link';
import * as React from 'react';
import MainLayout from "../layouts/MainLayout";

const Index: React.FC = () => {
  const styles = {
    display: "flex",
    height: "50px",
    borderRadius: "8px",
    background: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  }
  return (
    <MainLayout>
      <Link href="/reader"><a style={styles}>Reader</a></Link>
    </MainLayout>
  );
};
export default Index
