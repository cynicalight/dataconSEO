import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于 | 哋它亢datacon专注于高科技研发的创新型研究机构",
  description: "关于 | 哋它亢datacon专注于高科技研发的创新型研究机构",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="关于哋它亢"
        description="哋它亢科技有限公司（Datacon Technologies Inc.）是由哋它亢研究中心孵化而来的高科技企业，以突破性的技术研发和跨领域的创新能力为核心，致力于将前沿科学研究转化为卓越的商业价值。公司以“让未来触手可及”为愿景，致力于在全球范围内为不同行业提供领先的技术解决方案。"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
