import React from "react";
import {IoDiamondOutline, IoMapSharp} from 'react-icons/io5'
import {FaRegCopyright} from 'react-icons/fa'

export default function Features() {
  return (
    <div className="feature-main container text-center">
      <h2>FEATURES</h2>
      <p className="fs-6">Ryoshi Billionaires are uniques</p>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="featureHead py-3 px-5">
            <IoDiamondOutline fontSize={60} color="#fff"/>
            <h3>Rarity</h3>
          </div>
          <div className="featureFoot py-3 px-5">
              <p className="mb-0">Each Ryoshi is algorithmically generated, which guarantees its uniqueness.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="featureHead py-3 px-5">
            <FaRegCopyright fontSize={60} color="#fff"/>
            <h3>Full Rights</h3>
          </div>
          <div className="featureFoot py-3 px-5">
              <p className="mb-0">As a Ryoshi owner, you have all rights and licenses for a unique avatar NFT (ERC-721)</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="featureHead py-3 px-5">
            <IoMapSharp fontSize={60} color="#fff"/>
            <h3>Roadmap</h3>
          </div>
          <div className="featureFoot py-3 px-5">
              <p className="mb-0">All the Ryoshi members will gain additional benefits through roadmap activations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
