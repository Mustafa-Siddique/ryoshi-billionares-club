import React from 'react'
import img1 from '../assets/images/1.gif'
import img2 from '../assets/images/2.gif'
import img3 from '../assets/images/3.gif'
import img4 from '../assets/images/4.gif'

export default function NFTs() {
  return (
    <div className='container-fluid nft-main'>
        <div className="container">
            <h2 style={{fontSize:"3em", textAlign:"center"}}>Ryoshi Billionaires NFTs</h2>
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <div className="d-flex">
                            <img src={img1} alt="" style={{borderTopLeftRadius:"20px"}}/>
                            <img src={img2} alt="" style={{borderTopRightRadius:"20px"}}/>
                        </div>
                        <div className="d-flex">
                            <img src={img3} alt="" style={{borderBottomLeftRadius:"20px"}}/>
                            <img src={img4} alt="" style={{borderBottomRightRadius:"20px"}}/>
                            </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h4>Each Ryoshi Billionaire is unique and generated from over 100 handcrafted 3D traits, clothing, weapons, and accessories.</h4>
                    <ul>
                        <li>4444 rare Ryoshi 3D Nft’s</li>
                        <li>Fair Launch &amp; Distribution: all Ryoshis cost 0.044 ETH</li>
                        <li>Control and own a unique avatar NFT (ERC-721)</li>
                        <li>Gain additional benefits through roadmap activations</li>
                        <li>Join Ryoshi Billionaire Club on the Sandbox Metaverse</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="parallax d-flex justify-content-center align-items-center">
            <h2>Join the Ryoshi Billionaires 3D club and be part of it.</h2>
        </div>
    </div>
  )
}
