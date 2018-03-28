import React from "react"
import Link from "gatsby-link"

const PostList = ({ post }) => (
    <article>
        <h3>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h3>
        <span>{post.frontmatter.tools}</span>
        <p>{post.excerpt}</p>
    </article>
)

export default PostList