import React, { ReactElement } from "react";

import Link from "next/link";
import styled from "styled-components";

const PageTemplateStyle = styled.div`
  margin-top: 80px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  font-size: 2rem;

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 525px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }

  > h1 {
    margin-bottom: 32px;
    white-space: nowrap;
  }

  > span {
    font-size: 0.5em;
  }

  > a {
    font-size: 0.9em;
    margin-top: 8px;
  }
`;
PageTemplateStyle.displayName = "PageTemplateStyle";

interface PageTemplateProps {
  title: string;
  link: string;
  subTitle: string;
}

export default function PageTemplate({
  title,
  link,
  subTitle,
}: PageTemplateProps): ReactElement {
  return (
    <PageTemplateStyle>
      <h1>{title.toUpperCase()}</h1>
      <span>try going to</span>
      <Link href={link}>
        <a>{subTitle.toUpperCase()}</a>
      </Link>
    </PageTemplateStyle>
  );
}
