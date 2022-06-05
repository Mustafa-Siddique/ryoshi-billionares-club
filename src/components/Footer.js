import React from 'react'
import {FaReddit, FaTwitter, FaTelegram, FaDiscord} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='container-fluid' style={{borderTop:"1px solid #E5E5E5",paddingLeft:"0", paddingRight:"0"}}>
        <div className="fSocials">
            <a href="https://www.reddit.com/r/RyoshiTokenBSC/" target="_blank" rel="noreferrer"><FaReddit/></a>
            <a href="https://twitter.com/ToshiroNft" target="_blank" rel="noreferrer"><FaTwitter/></a>
            <a href="https://discord.gg/5432xGbw" target="_blank" rel="noreferrer"><FaDiscord/></a>
            <a href="https://t.me/ryoshitokenofficial" target="_blank" rel="noreferrer"><FaTelegram/></a>
        </div>
        <div className="container-fluid py-3 text-center" style={{backgroundColor:"#E9E9E9", color:"#6D6D6D",paddingLeft:"0", paddingRight:"0"}}>
            <p>Copyright 2021 | All Rights Reserved</p>
        </div>
    </div>
  )
}
