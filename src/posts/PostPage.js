import React, { Component } from "react";
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from 'styled-components'
import { pageWidth, backgroundDarkGrey, primaryFont, primaryWhite, primaryGold, secondaryWhite, postPageTextWidth, primaryDarkGrey, otherGreyLighter, evenDarkerGrey, secondaryGrey } from "../theme/variables";
import MarkdownWrapper from '../theme/markdownTheme'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid'

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
            div:nth-of-type(1) {
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
                width: 60%;
                margin: 0 auto;
                position: absolute;
                bottom: 175px;
                h1 {
                    font-family: ${primaryFont};
                    color: ${primaryWhite};
                    font-weight: 700;
                    font-size: 6.25vw;
                    line-height: 1;
                    margin-bottom: 25px;
                }
                hr {
                    background-color: ${primaryGold};
                    color: ${primaryGold};
                    height: 4px;
                    width: 75%;
                }
                p {
                    font-family: ${primaryFont};
                    color: ${primaryWhite};
                    font-weight: 400;
                    font-size: 1.5vw;
                    line-height: 1.2;
                }
                a {
                    display: block;
                    color: ${primaryGold};
                    font-family: ${primaryFont};
                    padding: 0;
                    margin: 0;
                    font-size: 1.25vw;
                    font-weight: 700;
                }
            }
            div:nth-of-type(3) {
                position: absolute;
                bottom: 75px;
                width: ${pageWidth};
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1;
                a {
                    color: ${primaryGold};
                    font-size: 1.5vw;
                    font-family: ${primaryFont};
                }
                a:nth-of-type(1) {
                    align-self: start;
                    text-align: left;
                }
                a:nth-of-type(2) {
                    align-self: end;
                    text-align: right;
                }
            }            
        }
        .pageContent {
            width: ${pageWidth};
            height: auto;
            margin: 75px auto;
            div {
                display: grid;
                grid-template-columns: 100%;
                width: 100%;
                h1, h2, h3, h4, h5, h6, p {
                    width: 60%;
                    justify-self: end;
                    font-family: ${primaryFont};
                }
                p {
                    color: ${secondaryGrey};
                }
                hr {
                    color: ${primaryGold};
                    height: 4px;
                    width: 25%;
                    margin-left: 40%;
                }
                .image {
                    width: 100%;
                    height: auto !important;
                    display: grid !important;
                    align-content: center;
                    justify-content: center;
                    position: static;
                    margin-top: 75px;
                    margin-bottom: 75px;
                    .gatsby-resp-image-wrapper {
                        max-width: 100% !important;
                        max-height: none !important;
                        align-content: center;
                        justify-content: center;
                        overflow: hidden;
                        margin: 0 !important;
                        padding: 0 !important;
                        display: block;
                        position: relative;
                        span {
                            display: grid !important;
                            width: 100%;
                            /* bottom: 50%; */
                            align-content: center;
                            justify-content: center;
                            img {
                                position: relative;
                                width: 100% !important;
                            }
                        }
                    }
                }
                .one_image {
                    grid-template-columns: 100%;
                    grid-template-rows: 100%;
                    width: 100%;
                    /* min-height: 650px; */
                    height: auto !important;
                    background-color: #D9D9D9;
                    .gatsby-resp-image-wrapper {
                        display: block;
                        height: 100% !important;
                        width: 100%;
                        span {
                            align-content: center;
                            justify-content: center;
                            display: grid !important;
                            img {
                                align-content: center;
                                justify-content: center;
                            }
                        }
                    }
                }
                .three_portrait {
                    grid-template-rows: 100%;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 10px;
                }
                .one_big_two_smaller {
                    grid-template-rows: 1fr;
                    grid-template-columns: 1fr 1fr;
                    grid-column-gap: 10px;
                    padding: 0;
                    .gatsby-resp-image-wrapper:nth-of-type(1) {
                        height: 100% !important;
                        width: 100%;
                        span {
                            display: grid;
                            grid-template-columns: 100%;
                            grid-template-rows: 100%;
                            height: 100% !important;
                            width: auto !important;
                            padding: 0 !important;
                            margin: 0 !important;
                            img {
                                height: 100% !important;
                                width: auto !important;
                                max-width: none !important;
                                align-self: center;
                                justify-self: center;
                                position: relative !important;
                            } 
                        }
                    }
                }
                .six_images {
                    grid-auto-rows: minmax(100px, 250px);
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-template-rows: 1fr 1fr;
                    grid-gap: 10px;
                }
            }
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
        // console.log(this.props);
        const imageSource = data.markdownRemark.frontmatter.cover.childImageSharp.sizes.src;
        // console.log(imageSource);
        
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
                            <h1>{this.state.postData.markdownRemark.frontmatter.title}</h1>
                            <hr/>
                            <p>{this.state.postData.markdownRemark.frontmatter.subtitle}</p>
                            {console.log(this.state.postData.markdownRemark.frontmatter.linktoproject)}
                            <a href={`${this.state.postData.markdownRemark.frontmatter.linktoproject}`} target="_blank">Explore website</a>
                        </div>
                        {/* <div>
                            <a href="#"><FontAwesomeIcon icon={faAngleLeft}/></a>
                            <a href="#"><FontAwesomeIcon icon={faAngleRight}/></a>
                        </div>                       */}
                    </section>
                    <div className="pageContent">
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
                linktoproject
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