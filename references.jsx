import { useSelector } from 'react-redux'
import ReferenceBox from '../../components/ReferenceBox/ReferenceBox'
import stylesref from '../../styles/References/References.module.css'
import ReferenceIcon from '../../components/ReferenceIcon/ReferenceIcon'
import AdsBanner from '../../components/AdsBanner/AdsBanner'
import { referencesData as refData, iconData as iData } from '../../utils.js'
import RefSummary from '../../components/RefSummary/RefSummary'

const References = () => {
    const { referencesData, iconData } = useSelector((state) => state)

    const references = refData || referencesData
    const icons = iData || iconData

    return (
            <div className={stylesref.refcontainer}>
                References
                {references.map((item) => (
                        <div key={item.id} className={item.className}>
                            <ReferenceBox content={item.content} content2={item.content2} />
                        </div>
                        ))}
                <RefSummary />
                {icons.map((item) => (
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

