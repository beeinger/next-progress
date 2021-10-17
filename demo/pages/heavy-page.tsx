import React, { ReactElement } from "react";

import PageTemplate from "components/PageTemplate";

export default function HeavyPage(): ReactElement {
  return <PageTemplate title="Heavy Page" subTitle="Light Page" link="/" />;
}

export { getServerSideProps } from "utils";
