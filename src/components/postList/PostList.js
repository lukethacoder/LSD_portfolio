import React, { Component, PropTypes } from "react";
import Link from "gatsby-link"
import styled from 'styled-components'
import { primaryGold, primaryWhite, secondaryGrey, primaryFont, evenDarkerGrey, backgroundDarkGrey} from "../../theme/variables";

const PostListWrapper = styled.div`
    position: relative;
    a {
        text-decoration: none;
        width: 100%;
        display: block;
        padding: 150px 25% 150px 10%;
        transition: .5s;
        &:hover{
            background-color: ${evenDarkerGrey};
            transition: .5s;
            div {
                opacity: .2;
                transition: .5s;
            }
        }
        h1 {
            color: ${primaryWhite};
            font-family: ${primaryFont};
            font-weight: 700;
            font-size: 5vw;
            line-height: .85;
            z-index: 5;
            position: relative;
        }
        hr {
            width: 65%;
            background-color: ${primaryGold};
            height: 4px;
        }
        p {
            color: ${primaryWhite};
            font-family: ${primaryFont};
            font-weight: 400;
            font-size: 1.75vw;
            line-height: 1.15;
            z-index: 5;
            position: relative;
        }
    }
`

const SectionBackgroundImage = styled.div`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;
    background-size: cover;
    background-position: center;
    transition: .5s;
`

export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTags: "",
            postData: "",
            postImage: ""
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
            postData: this.props,
            postImage: post.frontmatter.cover.childImageSharp.sizes.src
        }
        return (
            <PostListWrapper>
                <Link to={this.props.post.fields.slug}>
                    <h1>{this.props.post.frontmatter.title}</h1>
                    <hr/>
                    <p>{this.props.post.frontmatter.subtitle}</p>
                    <SectionBackgroundImage style={{backgroundImage: `url(${this.state.postImage})`}}/>
                </Link>
                
            </PostListWrapper>
        )
    }
}