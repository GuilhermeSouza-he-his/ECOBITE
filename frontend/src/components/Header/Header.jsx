import React from 'react'
import './Header.css'
import { useTranslation } from "react-i18next"

const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="header">
        <div className="header-contents">
            {/*<h2>{t("header.title")}</h2>*/}
            {/*<p>{t("header.description")}</p>*/}
            <button>{t("header.button")}</button>
        </div>
    </div>
  )
}

export default Header
