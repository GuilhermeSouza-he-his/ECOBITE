import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useTranslation } from "react-i18next";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home")
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const { t, i18n } = useTranslation()

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  const changeLanguage = () => {
    const languages = ["pt", "en", "zh"];
    const currentIndex = languages.indexOf(i18n.language);
    const nextLang = languages[(currentIndex + 1) % languages.length];
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className='navbar'>
      <Link to='/'><h2 className='logo'>ECOBITE.</h2></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>{t("navbar.home")}</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>{t("navbar.menu")}</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>{t("navbar.mobile_app")}</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}> {t("navbar.contact_us")}</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket} /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button className="lang-btn" onClick={changeLanguage}>
          {i18n.language.toUpperCase()}
        </button>
        {!token ? <button onClick={() => setShowLogin(true)}>{t("navbar.sign_in")}</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_image} />
            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate("/myorders")}><img src={assets.orders} /><p>{t("navbar.orders")}</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout} /><p>{t("navbar.logout")}</p></li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar
