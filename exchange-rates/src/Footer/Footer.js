import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <p>Все права защищены</p>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/">Контакты</a></li>
                    <li><a href="/">Гарантии</a></li>
                    <li><a href="/">О сервисе</a></li>
                    <li><a href="/">Соглашение о использовании сервиса</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
