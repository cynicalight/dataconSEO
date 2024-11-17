import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "合作伙伴 | 哋它亢",
  description: "联系哋它亢科技有限公司，了解更多合作机会",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="合作伙伴"
        description="我们与百度、CSDN等国内知名互联网企业建立了紧密的合作关系。这些合作伙伴不仅为我们提供了最新的技术动态和市场信息，还在品牌推广、技术研发等方面带来了显著的协同效应。通过与这些大站的深度合作，我们能够更准确地把握市场需求，为用户提供更优质的服务。"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
