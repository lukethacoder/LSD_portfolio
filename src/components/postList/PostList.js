import React, { Component, PropTypes } from "react";
import Link from "gatsby-link"
import styled from 'styled-components'
import { primaryGold, primaryWhite, secondaryGrey, primaryFont, evenDarkerGrey, backgroundDarkGrey} from "../../theme/variables";

const PostListWrapper = styled.div`
    
    a {
        text-decoration: none;
        width: 100%;
        display: block;
        padding: 150px 10%;
        transition: .5s;
        &:hover{
            background-color: ${evenDarkerGrey};
            transition: .5s;
        }
        h1 {
            color: ${primaryWhite};
            font-family: ${primaryFont};
            font-weight: 700;
            font-size: 5vw;
            line-height: .85;
        }
        h2 {
            color: ${primaryWhite};
            font-family: ${primaryFont};
            font-weight: 400;
            font-size: 1.95vw;
        }
        ul {
            display: block;
            color: ${primaryGold};
            font-family: ${primaryFont};
            list-style-type: none;
            padding: 0;
            margin: 0;
            li {
                display: inline-block;
                margin-right: 20px;
                font-size: 28px;
            }
        }
    }
`

export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTags: "",
            postData: ""
        }
    }
    render() {
        const { post } = this.props;
        console.log(this.props);
        const theTags = post.frontmatter.tags;
        const tags4days = theTags.split(', ');
        let tagsArray = Array.from(tags4days);

        this.state = {
            postTags: tagsArray,
            postData: this.props
        }
        return (
            <PostListWrapper>
                <Link to={this.props.post.fields.slug}>
                    
                    <h2>{this.props.post.frontmatter.subtitle}</h2>
                    <h1>{this.props.post.frontmatter.title}</h1>
                    <ul>{this.state.postTags.map(d => <li>
                        {d}
                        </li>)}
                    </ul>
                </Link>
            </PostListWrapper>
        )
    }
}