import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

import Button from "./button"
import FlexContainer from "./flexContainer"
import TransitionLink from 'gatsby-plugin-transition-link'

function Bio() {
    // query this in graphql
    const blogPath = `/blog/2019-10-04-new-site/2019-10-04-new-site/`
    
    return (
        <FlexContainer flex>
            <Profile>
                <BioWrapper>
                    <BioBg />
                </BioWrapper>
                <StaticQuery
                    query={bioQuery}
                    render={data => (
                        <Image
                            fixed={data.profile.childImageSharp.fixed}
                            alt={"Vincent Nalupta's shadow against some subway tiles."}
                        />
                    )}
                ></StaticQuery>
            </Profile>
            <BioColumn >
                <h2
                    css={`
                        margin-bottom: 10px;
                    `}
                >
                    HELLO!
                </h2>
                <p>
                    My name is Vincent Nalupta and I am currently an Engineering Manager at Grubhub.
                </p>

                <p>
                    I've won some <a href="https://www.commarts.com/webpicks/timothy-goodman" target="_blank" rel="noopener noreferrer">awards</a> for my work and some <a href="https://twitter.com/snailbites/status/917875803983147008" target="_blank" rel="noopener noreferrer">giant pencils</a> for my <a href="https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2" target="_blank" rel="noopener noreferrer">talks</a>.
                </p>

                <p
                    css={`
                        margin-bottom: 30px;
                    `}
                >
                    This is my space to flex my design chops and write about interesting tech.
                </p>
                <TransitionLink 
                    exit={{ delay: 0.35, length: 0.35 }}
                    entry={{
                        length: 0.75
                    }}
                    to={blogPath}>
                        <BioButton>Read the Blog</BioButton>
                </TransitionLink>
            </BioColumn>            
        </FlexContainer>
    )
}

const BioWrapper = styled.div`
    width: 385px;                        
    position: absolute;
    left: -145px;
    top: -113px;   
`

const BioColumn = styled.div`
    max-width: 300px;
    align-self: flex-end;

    @media (max-width: 768px) {
        text-align: center;
    }
`
const BioButton = styled(Button)`
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`
const Profile = styled(BioColumn)`
    position: relative;
    padding-right: 50px;

    @media (max-width: 768px) {
        display: none;
    }
`

const BioBg = () => (
    <svg viewBox="0 0 435 490" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient x1="65.77%" y1="68.9%" x2="14.777%" y2="7.605%" id="bioCircle">
                <stop stopColor="#3C4186" offset="0%" />
                <stop stopColor="#4F1C48" offset="100%" />
            </linearGradient>
            <linearGradient x1="22.991%" y1="0%" x2="50%" y2="83.112%" id="bioRect">
                <stop stopColor="#D6E307" offset="0%" />
                <stop stopColor="#125458" offset="100%" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <circle fill="url(#bioCircle)" cx="180" cy="180" r="180" />
            <rect fill="url(#bioRect)" x="147" y="111" width="269" height="366" rx="6" />
        </g>
    </svg>
)


const bioQuery = graphql`
    query BioQuery {
        profile: file(absolutePath: { regex: "content/assets/profile.png/" }) {
            childImageSharp {
                fixed(width: 240, height: 320) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Bio
