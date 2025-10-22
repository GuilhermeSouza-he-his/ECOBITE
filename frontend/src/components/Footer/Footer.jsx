import React from 'react'
import "./Footer.css"
import { assets } from './../../assets/assets';
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <h2>{t("footer.title_left")}</h2>
            <p>{t("footer.description")}</p>
            <div className='footer-social-icons'>
                <img src={assets.instagram}/>
                <img src={assets.whatsapp}/>
                <img src={assets.facebook}/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>{t("footer.title_center")}</h2>
            <ul>
                <li>{t("footer.link_home")}</li>
                <li>{t("footer.link_about")}</li>
                <li>{t("footer.link_delivery")}</li>
                <li>{t("footer.link_privacy")}</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>{t("footer.title_right")}</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@ecobite.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>{t("footer.copyright")}</p>
    </div>
  )
}

export default Footer
