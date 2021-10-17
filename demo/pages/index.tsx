import React, { ReactElement } from "react";

import PageTemplate from "components/PageTemplate";

export default function Index(): ReactElement {
  return (
    <PageTemplate title="Light Page" subTitle="Heavy Page" link="/heavy-page" />
  );
}
