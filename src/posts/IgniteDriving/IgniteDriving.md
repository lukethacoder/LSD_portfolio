---
title: "Ignite Driving"
subtitle: "Branding | Web Design | Web Development"
linktoproject: "https://ignitedriving.com.au"
cover: "./ignite_driving_cover.jpg"
category: "Clients"
date: "2018-03-29"
tags: "Adobe XD, GatsbyJS, Illustrator, inDesign, Photoshop, React, SASS"
---
### Check out the website <a href="https://ignitedriving.com.au" target="_blank">here</a>

> "Everything you need to get that relaxed driving that brings consistency only comes with practice." - John Surtees

#Brief
The brief for this project was to brand, design and develop a business from nothing. Using the current industry players as a starting point, a fresh and ellegant design solution was needed.

#Design Direction
###### images of inspiration / mood

#Logo 
The client brought a few initial ideas to the table, which aided with the design process. The client wanted a flowy cursaive type of font, with emphasis on looking "like a flame". The main 'ignite' text uses <a href="https://allbestfonts.com/skachat-shrift-brotherhood-script-besplatno/" target="_blank">Brotherhood Script</a>, and the 'driving' font is <a href="https://fonts.google.com/specimen/Raleway" target="_blank">Raleway Light</a>. The ignite text was rasterised and then thickened as to contrast better with the thin serif font. After thickening, the font was adjusted to remove and smooth of any odd shapes and/or curves.

#Website Design
talk about mobile responsiveness (differnet nav bar - why not just a burger nav)

#Website Development
The website was created using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>, a static site generator built on <a href="https://reactjs.org/" target="_blank">React</a>. <a href="http://sass-lang.com/" target="_blank">SASS</a> was also used to utalise varialbes, mixins and other cool SASS features. 

One main hurdle was the responsive navigation menu. On desktop it would be displayed as a simple navigation bar, but when the viewport is dropped down to a mobile device a fixed bottom navigation bar was used. This took some time to make just right, hiding and showing certain elements at certain times. CSS Grid was used on some parts of the navigation, and even more throughout the whole website. Certain elements wouldnt have been able to achieve the same look without CSS Grid

### Mobile Viewport
##### IMAGE OF MOBILE NAVIGATION

````
.bottomNavigation {
    position: fixed;
    display: flex;
    background-color: $lightGrey;
    .navigationMenu {
        order: 2;
        li {
            a {
                svg {
                    display: block;
                }
            }
            .activeClassName {
                background-color: $mediumpurple;
            }
        }
    }
    .bookNowNav {
        order: 1;
    }
}
````
### Destkop Viewport
##### IMAGE OF DESKTOP NAVIGATION
````
// Desktop Viewport
.bottomNavigation {
    position: relative;
    display: flex;
    background-color: transparent;
    .navigationMenu {
        order: 1;
        li {
            a {
                svg {
                    display: none;
                }
            }
            .activeClassName {
                background-color: transparent;
            }
        }
    }
    .bookNowNav {
        order: 2;
    }
}
````


# Gallery
###### put random mock ups and other design stuff here