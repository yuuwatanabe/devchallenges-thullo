import React from 'react'
import styled from 'styled-components';

const NavButtonWrapper = styled.span`
  &.active {
      background-color: blue;
  }
`

export interface NavButtonProps {
    title: string;

  }

const NavButton: React.FC<NavButtonProps> = ({title}) => {
    return (
        <NavButtonWrapper>
            {title}
        </NavButtonWrapper>
    )
}

export default NavButton