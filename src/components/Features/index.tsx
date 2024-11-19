import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="核心技术特点"
            paragraph="  哋它亢科技有限公司以突破性的技术研发和跨领域的创新能力为核心，致力于将前沿科学研究转化为卓越的商业价值。作为科技创新的先锋，哋它亢凭借强大的科研实力和敏锐的技术洞察力，与百度等科技领军企业深度合作，共同探索人工智能、大数据、云计算、无人驾驶、物联网以及区块链等前沿科技领域的最新成果。我们致力于将这些尖端科技转化为推动全球产业革新与业务智能化升级的卓越解决方案，为客户提供涵盖智能制造、智慧城市、智慧医疗、智慧交通等多个领域的高质量、高效率、高价值的科技服务。通过不断的技术创新和跨领域合作，哋它亢科技有限公司正引领着全球科技发展的潮流，共同开创智慧未来的新篇章。"
            center
          />
          <SectionTitle
            title="相应国家号召"
            title="承担社会责任"
            paragraph=" 哋它亢科技有限公司积极响应国家政策导向，深度结合“新基建”、“数字经济”、“智能制造”等国家重大战略，依托自身在人工智能、大数据、云计算、无人驾驶等前沿科技领域的深厚积累，与中国政府及企业紧密合作，共同推动产业升级与数字化转型。我们致力于将技术创新与国家需求紧密结合，不仅为经济高质量发展贡献力量，还积极促进就业、提升公共服务水平，助力中国在全球科技竞争中占据领先地位，共同书写科技创新与国家发展同频共振的新篇章。"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
