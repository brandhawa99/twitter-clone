import React from 'react'
import './Sidebar.css';
import home from './sidebar_images/twitterHome.svg'
import more from './sidebar_images/twitterMore.svg'
import expplore from './sidebar_images/twitterExplore.svg'
import profile from './sidebar_images/twiterProfile.svg'
import SideBarButtons from './SideBarButtons';
import twitterLogo from '../../icons/twitterlogo.svg'
import TweetButton from './TweetButton';


function Sidebar() {
  return (
    <div className='sidebar'>
      <img className='twitter-logo' src={twitterLogo} alt='twitter-logo'/>
      <div className='actual-sidebar'>
      <SideBarButtons title='Home' image={home} alt='home button' />
      <SideBarButtons title='Explore' image={expplore} alt='explore-button'/>
      <SideBarButtons title='Profile' image={profile} alt='profile-button'/>
      <SideBarButtons title='more' image={more} alt='explore-button'/>
      <TweetButton />
      </div>
     
    </div>
  )
}

export default Sidebar