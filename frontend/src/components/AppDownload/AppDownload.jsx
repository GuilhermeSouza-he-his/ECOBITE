import React from 'react'
import "./AppDownload.css"
import { assets } from './../../assets/assets';
import { useTranslation } from "react-i18next"

const AppDownload = () => {
  const { t } = useTranslation()
  return (
    <div className='app-download' id='app-download'>
      <p>{t("appDownload.text")}</p>
      <div className='app-download-platforms'>
        <img src={assets.app_store}/>
        <img src={assets.app_store1}/>
      </div>
    </div>
  )
}

export default AppDownload
