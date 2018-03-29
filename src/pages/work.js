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

const PortfolioContainer = styled.div` 
  width: 100%;
  height: 100%;
  margin: 0;
  /* background-color: rgba( 33, 32, 36, 0.5); */
`;

const Portfolio = ({ data }) => (
    <PortfolioContainer>
        {data.allMarkdownRemark.edges.map(( { node }) => (        
            <PostList key={node.id} post={node}/>
        ))}
    </PortfolioContainer>
)

export default Portfolio

export const query = graphql`
    query SiteMeta {

        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        subtitle
                        category
                        date
                        tags
                    }
                    fields {
                        slug
                    }
                    html
                    excerpt
                }
            }
        }
        allImageSharp {
            edges {
                node {
                    ... on ImageSharp {
                        resolutions(width:650) {
                            src
                        }
                    }
                }
            }       
        }
    }
`
// export const imgQuery = graphql`
// query IndexQuery {

    
// }
// `
