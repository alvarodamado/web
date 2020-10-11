import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import IconLinkedIn from './IconLinkedIn'
import IconTwitter from './IconTwitter'

const Wrapper = styled.div`
  display: flex;
  color: var(--accent-color-1);
  align-items: center;
`

const Link = styled.a`
  padding: 4px;
`

function SocialIcons(props) {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  return (
    <Wrapper className={props.className}>
      <Link href={data.site.siteMetadata.social.twitter}>
        <IconTwitter />
      </Link>
      <Link href={data.site.siteMetadata.social.linkedin}>
        <IconLinkedIn />
      </Link>
    </Wrapper>
  )
}

export default SocialIcons
