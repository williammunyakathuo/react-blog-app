import { NavLink } from "react-router-dom";

const BlogList = ({ blogs, title, }) => {

  return (
    <div className="blogList">
      <h1>{title}</h1>
      {
        blogs.map((blog) => (
          <div className="blogShow" key={blog.id}>
            <NavLink to={`/blogsdetails/${blog.id}`} >
              <h1>{blog.title}</h1>
              <p>Written by {blog.author}</p>
            </NavLink>


          </div>

        ))
      }
    </div>
  );
}

export default BlogList;