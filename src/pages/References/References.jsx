import React from 'react'
import ReferenceBox from '../../components/ReferenceBox/ReferenceBox'
import stylesref from '../../styles/References/References.module.css'
import ReferenceIcon from '../../components/ReferenceIcon/ReferenceIcon'
import AdsBanner from '../../components/AdsBanner/AdsBanner'
import { referencesData, iconData } from '../../utils.js'

const References = () => {
  return (
    <div className={stylesref.refcontainer}>
      References
      {referencesData.map((item) => (
        <div key={item.id} className={item.className}>
          <ReferenceBox content={item.content} content2={item.content2} />
        </div>
      ))}
      {iconData.map((item) => (
        <div key={item.id} className={item.className}>
          <ReferenceIcon content={item.content} content2={item.content2} />
        </div>
      ))}
      <div className={stylesref.adscontainer}>
        <AdsBanner />
      </div>
    </div>
  )
}

export default References
