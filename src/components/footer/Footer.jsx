import { Link } from 'react-router-dom'

import './footer.scss'

const navList = [
  'home',
  'who we are',
  'our work',
  'careers',
  'contact us',
  'terms and conditions',
  'popi compliance'
]

const Footer = () => {
  return (
    <footer className = 'enjoy__footer section__padding bgLight' >
        <div className = 'enjoy__footer-navList'>
            {navList.map((item, index) => (
              <div className = 'enjoy__footer-navList_item' key = {index}>
                  { item === 'home'
                      ? <Link to = '/'><p>{item}</p></Link>
                      : <Link to = {`/${item.replaceAll(' ', '')}`}><p>{item}</p></Link>
                  }
              </div>
            ))}
        </div>

        <div className = 'enjoy__footer-copyright'>
              <p>© 2022 THE ENJOY GROUP. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
