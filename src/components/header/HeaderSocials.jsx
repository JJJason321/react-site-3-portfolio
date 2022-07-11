import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub, FaSteam} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/xinyu-feng-41695b172/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/JJJason321' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='https://steamcommunity.com/id/XIInyu' target='_blank' rel="noreferrer"><FaSteam /></a>
    </div>
  )
}

export default HeaderSocials