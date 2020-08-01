import React, { useState } from "react";
import FlexContainer from "./flexContainer"
import styled from "styled-components"
import { Colors } from "../theme/global"

const projects = [
  {
    'title': 'dls',
    'link': "Grubhub Design System",
    'caption': 'Creator and core maintainer of the Grubhub Design System which has reached total adoption across all Web, Android and iOS teams across the entire company and forms the basis for all feature work at Grubhub.',
    'url': "https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2"
  },
  {
    'title': 'cfd',
    'link': "Grubhub Contact Free Delivery",
    'caption': 'Web team lead and IC for COVID-19 response critical feature launch - a full-company feature launch that went from concept to production in 3 days.'
  },
  {
    'title': 'closedbag',
    'link': "Grubhub Floating Cart",
    'caption': 'Redesigned the Grubhub web cart experience, moving it from a full height sidebar to a popover notification-style bag; unlocking valuable real estate for the design team to use for optimized layout and UX.',
    'url': 'https://www.grubhub.com/restaurant/hummus--pita-co-585-6th-ave-new-york/267853'
  },
  {
    'title': 'tgoodman',
    'link': "Tim Goodman Portfolio",
    'caption': 'Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.'
  },
  {
    'title': 'mw-searchsale',
    'link': "Madewell Search & Sale",
    'caption': 'Refactored the search experience in the MV* javascript pattern. Worked heavily on restyling the Madewell brand experience.'
  },
  {
    'title': 'jcrew-pdp',
    'link': "J.Crew Product Detail Page",
    'caption': 'Developed the front end functionality for an overhaul of the J.Crew, J.Crew Factory and Madewell product detail pages.',
    'url': 'https://www.jcrew.com/p/womens_category/sweaters/pullover/tippi-sweater/E1277'
  },
  {
    'title': 'espn-recruiting',
    'link': "ESPN Recruiting Landing Page",
    'caption': 'Designed within ESPN\'s content framework and developed the front end templates for ESPN\'s recruiting portal',
    'url': 'http://espn.go.com/college-sports/basketball/recruiting/school/_/id/120'
  },
  {
    'title': 'leadership',
    'link': "The Leadership Room",
    'caption': 'Designed and built several pages within the existing style direction of The Leadership Room branding.',
  },
  {
    'title': 'richtu',
    'link': "Rich Tu Portfolio",
    'caption': 'Worked closely with award-winning illustrator Rich Tu to develop a horizontal scrolling portfolio page.'
  }
]

const FADE_TIMING = 150;

const Work = () => {
  const [project, setProject] = useState(projects[0])
  const [loading, setLoading] = useState(false)

  

  function handleClick(e, item) {
    if (project.title === item.title) {
      return;
    }

    setLoading(true)  
    setTimeout(() => {
      setProject(item);    
      setLoading(false)
    }, FADE_TIMING)          
  }  

  return (
    <>
      <h2 css={`text-align: center`}>Featured Projects</h2>
      <FlexContainer flex>
        <StyledWorkWrapper>        
          <StyledSidebar>            
            <StyledList>
              {projects.map((item, i) => (
                <li key={i}>                  
                  <StyledLinkButton                     
                    selected={project.title === item.title}   
                    onClick={e => handleClick(e, item)}                
                    >
                      {item.link}
                  </StyledLinkButton>
                </li>
                )
              )}
            </StyledList>
          </StyledSidebar>          
          <StyledFigure className="clearfix">                  
              <StyledScreenshot className="screenshot" isLoading={loading} alt={project.link} src={`images/screenshots/${project.title}.png`} width="580" height="333" />
              <StyledCaption className="small">
                {project.caption}
                {project.url && ` `}
                {project.url && <a href={project.url} rel="noopener noreferrer" target="_blank">
                  {project.title === 'dls' ? 'Learn More' : 'Link'}
                </a>}</StyledCaption>
          </StyledFigure>
        </StyledWorkWrapper>
      </FlexContainer>
    </>
  )
}

const StyledList = styled.ul`
  list-style-type: none;

  li {
    margin-bottom: .75rem;

    @media (max-width: 1100px) {
      display: inline;
      
      &:after {
        content: '|';
      }

      &:last-child:after {
        content: none;
      }
    }
  }

`

const StyledLinkButton = styled.button`
  text-align: initial;
  background: inherit;
  border: none;
  color: ${Colors.neon};

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  text-decoration: ${props =>
    props.selected ? `underline` : `none` };
`;

const StyledWorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1100px) {
    flex-direction: row; 
    align-items: initial; 
  }  
`

const StyledSidebar = styled.aside`
  flex: 1 1 100%; 
  text-align: center;

  @media (min-width: 1100px) {
    text-align: left;
    flex: initial;  
  }  
`

const StyledFigure = styled.figure`
  flex: none;

  @media (min-width: 1100px) {
    flex: 0 0 630px;    
  }  

  position: relative;
  width: 630px;
  height: 490px;

  background: url(../images/work-imac.png) no-repeat 0 0;
`

const StyledScreenshot = styled.img`
  position: absolute;
  top: 26px;
  left: 25px;

  transition: ${FADE_TIMING}ms opacity ease-out;  
  opacity: ${props => props.isLoading ? `.3` : `1` };  
`

const StyledCaption = styled.figcaption`
  position: absolute;    
  bottom: 130px;

  margin: 0 25px;
  padding: 10px;

  background-color: ${Colors.sesame};
`;

export default Work;