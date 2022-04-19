import React from 'react'
import { Link } from 'react-router-dom'

import ButtonMain from '../../components/buttonMain/ButtonMain'
import './whoSml.scss'

const WhoSml = () => {
  return (
    <section className = 'enjoy-whoSml section__margin'>
        <div className = 'enjoy__whoSml-heading'>
            <h2>We Are <span>Enjoy</span></h2>
        </div>

        <div className = 'enjoy__whoSml-content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing suspendisse curabitur vestibulum ac aliquet egestas urna. Et pellentesque feugiat sem tellus id. Est non mattis mauris vulputate ornare amet non ullamcorper. Eu at orci, id scelerisque aliquam gravida lacus, condimentum enim. Id aliquet blandit sollicitudin ut auctor commodo nulla augue. Vel, ipsum eu id cras nisl. Interdum euismod diam, orci sit. Quam condimentum nunc morbi ut. Libero donec ultrices at nullam morbi eget velit, mi. Molestie eget augue et tristique id sagittis et leo.</p>
        </div>
        
        <div className = 'enjoy__whoSml-btns'>
            <Link to = '/ourwork'>
                <ButtonMain text = 'see our work'/>
            </Link>
            <Link to = '/whoweare'>
                <ButtonMain text = 'learn more'/>
            </Link>
        </div>
    </section>
  )
}

export default WhoSml
