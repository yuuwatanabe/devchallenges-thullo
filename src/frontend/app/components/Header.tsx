import React from 'react'
import { NavLink, Switch } from 'react-router-dom'
import styled from 'styled-components';
// import Logo from '../assets/svg/tweeter.svg'

const StyledLink = styled(NavLink)`
  color: #2f80ed;
  padding: 1.0rem;
  text-decoration: none; 

  &.active {
    border-bottom: 1px solid red;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #def7ff;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const HeaderStart = styled.div`
    padding-left: 4rem;
`

const HeaderMiddle = styled.div`

`

const HeaderEnd = styled.div`
    padding-right: 4rem;
`

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
          <HeaderStart>
            <a>Tweeter</a>
          </HeaderStart>
          <HeaderMiddle>
            <StyledLink exact to='/home'>
                Home
            </StyledLink>
            <StyledLink exact to='/explore'>
                Explore
            </StyledLink>
            <StyledLink exact to='/bookmark'>
                Bookmarks
            </StyledLink>
          </HeaderMiddle>
          <HeaderEnd>
              aaaa
          </HeaderEnd>
        </HeaderWrapper>
    )
}

export default Header