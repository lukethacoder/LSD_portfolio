import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import LandingPage from '../components/LandingPage';
import DayOfWeek from '../components/DayOfWeek';
import RandomWord from '../components/globalCompontents/RandomWord';
import bg_img from '../images/bg_img.jpg';
import { primaryWhite, primaryDarkGrey, primaryGold, primaryFont, pageWidth } from '../theme/variables';

import PostList from '../components/postList/PostList'

const ProjectsContainer = styled.div` 
  width: 100%;
  height: 100%;
  margin: 0 0 50px 0;
  /* background-color: rgba( 33, 32, 36, 0.5); */
`;

const Projects = ({ data }) => (
    <ProjectsContainer>
        {data.allMarkdownRemark.edges.map(( { node }) => (        
            <PostList key={node.id} post={node}/>
        ))}
    </ProjectsContainer>
)

export default Projects

export const query = graphql`
    query SiteMetaProjects {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "Projects"}}}) {
            edges {
                node {
                    id
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
                    fields {
                        slug
                    }
                    html
                    excerpt
                }
            }
        }
    }
`
// allImageSharp {
//     edges {
//         node {
//             ... on ImageSharp {
//                 resolutions(width:650) {
//                     src
//                 }
//             }
//         }
//     }       
// }