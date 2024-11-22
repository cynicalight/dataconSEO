import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="哋它亢的最新博客"
          paragraph="欢迎来到哋它亢科技有限公司的博客！欢迎阅读有关哋它亢的最新动态和技术文章。我们致力于分享最前沿的科技资讯和公司新闻，让您紧跟行业前沿，洞悉技术发展趋势。在这里，您会发现关于人工智能、大数据、云计算、物联网等领域的最新进展。哋它亢技术团队将定期发布技术文章，深入剖析这些领域的核心技术和应用案例，帮助您更好地理解并应用这些前沿技术。"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
