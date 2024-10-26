import React from 'react'

const SocialMediaCard = ({link, svg}) => {
  return (
    <div>
      <a href={link}>
        {svg}
      </a>
    </div>
  )
}

export default SocialMediaCard