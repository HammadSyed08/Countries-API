import React from 'react'

export default function CountryDetailShimmer() {
  return (
    <div className="country_detail_container">
      <div className="flag_img shimmer_flag"></div>
      <div className="data-Detail shimmer_detail">
        <div className='country_title shimmer_title'></div>
        <div className='Country_info'>
          <div className="info_left">
            <p className="shimmer_p"></p>
            <p className="shimmer_p"></p>
            <p className="shimmer_p"></p>
            <p className="shimmer_p"></p>
            <p className="shimmer_p"></p>
          </div>
          <div className="info_right">
            <p className="shimmer_p"></p>
            <p className="shimmer_p"></p>
            <p className="shimmer_p"></p>
          </div>
        </div>
      </div>
    </div>
  )
}
