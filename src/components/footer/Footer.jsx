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
                  <p>{item}</p>
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
