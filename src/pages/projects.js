import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import LandingPage from '../components/LandingPage';
import bg_img_old from '../images/bg_img_old.jpg';
import { primaryWhite, primaryDarkGrey, primaryGold, primaryFont, pageWidth } from '../theme/variables';

import PostList from '../components/postList/PostList'
import { DynamicBackgroundImage } from '../components/globalCompontents/theme-context'

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
        <ProjectsContainer>
            {this.state.data.allMarkdownRemark.edges.map(( { node }) => (        
                <PostList key={node.id} post={node}/>
            ))}
        </ProjectsContainer>
        );
    }
};

// const Projects01 = ({ data }) => ( 
//     <DynamicBackgroundImage.Provider image={bg_img} value={{
//         image: bg_img,
//         updateLocale: e => this.setState(appLocales[e.target.value])
//     }}>
//         <ProjectsContainer>
//             {data.allMarkdownRemark.edges.map(( { node }) => (        
//                 <PostList key={node.id} post={node}/>
//             ))}
//         </ProjectsContainer>
//     </DynamicBackgroundImage.Provider>
// )

export default Projects

export const query = graphql`
    query SiteMetaProjects {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "Projects"}}} sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        subtitle
                        category
                        date(formatString: "MMMM DD, YYYY")
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

const ProjectsContainer = styled.div` 
  width: 100%;
  height: 100%;
  margin: 0 0 50px 0;
  /* background-color: rgba( 33, 32, 36, 0.5); */
`;