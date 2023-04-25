import React, { ReactElement } from "react";

import { GetServerSideProps } from "next";
import PageTemplate from "components/PageTemplate";

export default function HeavyPage(): ReactElement {
  return <PageTemplate title="Heavy Page" subTitle="Light Page" link="/" />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //? Something that takes a long time, simulating a heavy page
  await new Promise((resolve) => setTimeout(resolve, 4500));

  return {
    props: {},
  };
};
