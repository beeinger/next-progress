import React, { ReactElement } from "react";

import Link from "next/link";
import pageTemplateStyle from "./PageTemplate.module.css";

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
    <div className={pageTemplateStyle.container}>
      <h1>{title.toUpperCase()}</h1>
      <span>try going to</span>
      <Link href={link}>
        <a>{subTitle.toUpperCase()}</a>
      </Link>
    </div>
  );
}
