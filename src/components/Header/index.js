import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import Headroom from 'react-headroom'
import theme from '../../themes/main.js'

const MainHeader = styled.header`
  background: ${props => props.theme.colorGreyDarkest};
  color: ${props => props.theme.colorWhite};
  width: 100%;
  padding: ${rem(30)};
  margin-left: auto;
  margin-right: auto;

  @media ${props => props.theme.smallUp} {
    padding: ${rem(75)};
  }
  @media ${props => props.theme.mediumUp} {
    padding: ${rem(100)};
  }
  @media ${props => props.theme.largeUp} {
    padding: ${rem(120)};
  }
  @media ${props => props.theme.xlargeUp} {
    padding: ${rem(150)};
  }

  ${props => props.size === 'small' && css`
    padding: ${rem(20)};
    margin-bottom: ${rem(50)};
    background: ${props => props.theme.colorGreyDarkest};
    color: ${props => props.theme.colorWhite};
    border-bottom: 1px solid ${props => props.theme.colorGreyDarker};
    position: relative;
    transition: background 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
    z-index: 9;

    small {
      display: none;
    }

    @media ${props => props.theme.smallUp} {
      padding: ${rem(20)};
    }
    @media ${props => props.theme.mediumUp} {
      padding: ${rem(20)};
      height: ${rem(80)};

      a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      strong,
      small {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
      strong {
        transition: transform 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
      }
      small {
        display: inline-block;
        transition: transform 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955), opacity 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
      }

      small {
        opacity: 0;
      }
    }
    @media ${props => props.theme.largeUp} {
      padding: ${rem(20)};
    }
    @media ${props => props.theme.xlargeUp} {
      padding: ${rem(20)};
    }
    @media ${props => props.theme.xxxlargeUp} {
      padding: ${rem(20)};
      margin-bottom: ${rem(100)};
    }

    &:hover {
      background: ${props => props.theme.colorGreyDarker};
      border-color: ${props => props.theme.colorGreyDarker};

      strong {
        transform: translateX(-190%) translateY(-50%);
      }
      small {
        opacity: 1;
        transform: translateX(-31%) translateY(-50%);
        transition: transform 0.2s cubic-bezier(0.455, 0.030, 0.515, 0.955), opacity 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955);
      }
    }
  `}
`

const SiteTitle = styled.h1`
  font-family: ${props => props.theme.ffPrimary};
  font-size: ${rem(28)};
  line-height: 1.2;
  font-weight: 300;

  strong {
    font-weight: 700;
  }

  @media ${props => props.theme.smallUp} {
    font-size: 5vw;
    max-width: 55vw;
    line-height: 1;
  }

  @media ${props => props.theme.xlargeUp} {
    font-size: 4.5vw;
    max-width: 50vw;
  }

  ${props => props.size === 'small' && css`
    width: 100%;
    max-width: 100%;
    font-size: ${rem(18)};
    font-weight: 300;
    line-height: 1;
    transition: border 0.4s;
    display: table;
    transition: background 0.2s;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    @media ${props => props.theme.smallUp} {
      font-size: ${rem(20)};
      width: 100%;
      max-width: 100%;
    }

    @media ${props => props.theme.xlargeUp} {
      font-size: ${rem(24)};
      width: 100%;
      max-width: 100%;
    }
  `}
`

const SiteByline = styled.p`
  font-family: ${props => props.theme.ffSecondary};
  font-size: ${rem(14)};
  line-height: 1.4;
  font-weight: 300;
  margin-top: ${rem(20)};

  a {
    text-decoration: underline;

    &:hover {
      color: ${props => props.theme.colorGreyDark};
    }
  }

  @media ${props => props.theme.mediumDown} {
    br {
      display: none;
    }
  }

  @media ${props => props.theme.smallUp} {
    font-size: ${rem(20)};
    line-height: 1.5;
    margin-top: ${rem(50)};
  }
`

class Header extends React.Component {
  render() {
    if(this.props.headerSize === "small") {
      return (
        <Headroom>
          <MainHeader size="small">
            <Link to="/" title="Go to homepage">
              <SiteTitle size="small">
                <strong>Chalmers Cards</strong><small> fighting to end homeless in Toronto</small>
              </SiteTitle>
            </Link>
          </MainHeader>
        </Headroom>
      )
    } else {
      return (
        <MainHeader>
          <SiteTitle><strong>chalmerscards.com</strong> is a guerilla project fighting homelessness in Toronto, Ontario.</SiteTitle>
          <SiteByline> <br />

          </SiteByline>
        </MainHeader>
      )
    }
  }
}

export default Header
