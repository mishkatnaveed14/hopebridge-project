import { FaCalendarAlt } from "react-icons/fa";
import { blog } from "../data/siteData.js";

export default function Blog() {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <div className="section-head center">
          <p className="kicker">{blog.kicker}</p>
          <h2>{blog.title}</h2>
        </div>
        <div className="card-grid two stagger-grid">
          {blog.posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <div className="blog-image">
                <img src={post.image} alt={post.alt} width="1024" height="768" loading="lazy" />
              </div>
              <div className="blog-body">
                <p className="blog-date">
                  <FaCalendarAlt aria-hidden="true" /> {post.date}
                </p>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <a className="text-link" href="#blog">
                  {blog.buttonLabel} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
