import React from 'react'
import BenefitOneSVG from '../../images/benefit-1.svg'
import BenefitTwoSVG from '../../images/benefit-2.svg'
import BenefitThreeSVG from '../../images/benefit-3.svg'

// For now I don't see a point in splitting this up into a 'Benefit' component and rendering it
// three times (because 1. We don't need to store this kind of data separately - it is not dynamic
// 2. Unnecessary passing of props and images. Summary: will look at this again in the future - separation might be neccessary)
const Benefits = () => {
  return (
    <div class='benefits'>
      <h1>Benefits</h1>
      <div class='benefit-container'>
        <div class='benefit'>
          <div class='benefit__title'>
            <div class='benefit__title--avatar'>
              <img src={BenefitOneSVG} />
            </div>
            <div class='benefit__title--text'>Lorem, ipsum dolor sit amet cons</div>
          </div>
          <div class='benefit__description'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente excepturi eius
              expedita mollitia, facilis repudiandae tempore provident fugit aliquid quos est neque,
              sunt harum sint animi architecto, aperiam rem cumque?
            </p>
          </div>
        </div>
        <div class='benefit'>
          <div class='benefit__title'>
            <div class='benefit__title--avatar'>
              <img src={BenefitTwoSVG} />
            </div>
            <div class='benefit__title--text'>Lorem, ipsum dolor sit amet cons</div>
          </div>
          <div class='benefit__description'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente excepturi eius
              expedita mollitia, facilis repudiandae tempore provident fugit aliquid quos est neque,
              sunt harum sint animi architecto, aperiam rem cumque?
            </p>
          </div>
        </div>
        <div class='benefit'>
          <div class='benefit__title'>
            <div class='benefit__title--avatar'>
              <img src={BenefitThreeSVG} />
            </div>
            <div class='benefit__title--text'>Lorem, ipsum dolor sit amet cons</div>
          </div>
          <div class='benefit__description'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente excepturi eius
              expedita mollitia, facilis repudiandae tempore provident fugit aliquid quos est neque,
              sunt harum sint animi architecto, aperiam rem cumque?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
