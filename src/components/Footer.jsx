import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-logo" href="#home" aria-label="Back to home">
          Yudi<span>.</span>
        </a>

        <p className="footer-credit">
          Designed with purpose. Built with code.
        </p>

        <a className="footer-back-to-top" href="#home">
          Back to top <span>↑</span>
        </a>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Yudhishthir. All rights reserved.</p>
        <p>Made with React <span>♥</span></p>
      </div>
    </footer>
  )
}

export default Footer