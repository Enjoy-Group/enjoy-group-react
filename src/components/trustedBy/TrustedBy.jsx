import React from 'react'
import PropTypes from 'prop-types'

import './trustedBy.scss'

const companiesList = [
  'company logo',
  'company logo',
  'company logo',
  'company logo',
  'company logo',
  'company logo',
  'company logo',
  'company logo',
  'company logo',
  'company logo',
  'company logo',
  'company logo'
]

const TrustedBy = ({companies}) => {
  return (
    <section className = 'enjoy__trustedBy section__margin'>
        <div className = 'enjoy__trustedBy-heading'>
            <h2 className = 'section__heading'>trusted by</h2>
        </div>
        <div className = 'enjoy__trustedBy-content'>
            {companiesList.map((company, index) => (
                <div className = 'enjoy__trustedBy-content_companyLogo' key = {index}>
                    <p>{company}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

TrustedBy.propTypes = {

}

export default TrustedBy
