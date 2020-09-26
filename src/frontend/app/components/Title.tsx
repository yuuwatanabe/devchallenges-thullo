import React from 'react'

export interface TitleProps {
    /**
    * Is this the principal call to action on the page?
    */
    title: string;
  }

export const Title: React.FC<TitleProps> = ({title}) => {
    return (
        <p>{title}</p>
    )
}
