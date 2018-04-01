import React, { Component } from "react";
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from 'styled-components'
import { pageWidth, backgroundDarkGrey, primaryFont, primaryWhite, primaryGold, secondaryWhite, postPageTextWidth, primaryDarkGrey, otherGreyLighter, evenDarkerGrey } from "../theme/variables";
import MarkdownWrapper from '../theme/markdownTheme'

import bg_img from '../images/bg_img.jpg'

const PostPageWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    div {
        section {
            height: 110vh;
            margin-top: -20vh;
            padding: 10% 10%;
            width: 100%;
            background-color: ${backgroundDarkGrey};
            position: relative;
            z-index: 0;
            div:nth-of-type(1){
                /* background-image: url(${bg_img}); */
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                position: absolute;
                top: 0;
                left: 0;
                &:after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: ${primaryDarkGrey};
                    opacity: .95;
                }
            }
            div:nth-of-type(2) {
                position: absolute;
                bottom: 150px;
                h1 {
                    font-family: ${primaryFont};
                    color: ${primaryWhite};
                    font-weight: 700;
                    font-size: 7.5vw;
                    line-height: 1;
                    margin-bottom: 25px;
                }
                h2 {
                    font-family: ${primaryFont};
                    color: ${primaryWhite};
                    font-weight: 400;
                    font-size: 2vw;
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
        }
        > div {
            width: ${pageWidth};
            margin: 75px auto;
        }
    }
`

export default class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTags: "",
            postData: "",
            postImage: ""
        }
    }

    render() {
        const { data } = this.props;
        console.log(this.props);
        const imageSource = data.markdownRemark.frontmatter.cover.childImageSharp.sizes.src;
        console.log(imageSource);
        
        const theTags = data.markdownRemark.frontmatter.tags;
        const tags4days = theTags.split(', ');
        let tagsArray = Array.from(tags4days);

        this.state = {
            postTags: tagsArray,
            postData: data,
            postImage: imageSource
        }
        return (
            <PostPageWrapper>
                <div>
                    <section>
                        <div style={{backgroundImage: `url(${this.state.postImage})`}}></div>
                        <div>
                            <h2>{this.state.postData.markdownRemark.frontmatter.subtitle}</h2>
                            <h1>{this.state.postData.markdownRemark.frontmatter.title}</h1>
                            <ul>{this.state.postTags.map(d => <li>{d}</li>)}</ul>
                        </div>
                    </section>
                    <div>
                        <MarkdownWrapper
                            dangerouslySetInnerHTML={{
                                __html: this.state.postData.markdownRemark.html
                            }}
                        />
                    </div>        
                </div>
            </PostPageWrapper>
        )
    }
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                subtitle
                category
                date
                tags
                cover {
                    childImageSharp {
                      sizes(maxWidth: 670) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        originalImg
                        originalName
                      }
                  }
                }
            }
        }
    }
`;