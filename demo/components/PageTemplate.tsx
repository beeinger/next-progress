import React, { ReactElement } from "react";

import Link from "next/link";
import pageTemplateStyle from "./PageTemplate.module.css";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <div className={pageTemplateStyle.container}>
      <Link href={router.route}>
        <h1>{title.toUpperCase()}</h1>
      </Link>
      <span>try going to</span>
      <Link href={link}>{subTitle.toUpperCase()}</Link>
    </div>
  );
}
