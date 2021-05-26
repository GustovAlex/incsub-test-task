import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './selectStyles.scss'

export default function CustomSelect({ label, onChange, width, valueArr, className}) {
    const [targetValue, setTargetValue] = useState(label)

    const onChangeHandler = onChange ? (event) => {
        onChange(event)
        setTargetValue(event.target.value)
    } : (event) =>  setTargetValue(event.target.value)

    return (
        <div className={`select ${className}`} style={{width:width}}>
           <input value={targetValue} onChange={()=>{}}/>
           <div className="arrowIcon"> <FontAwesomeIcon icon={faChevronDown}/> </div>
           <select className="select-styles" onChange={onChangeHandler}>
               {valueArr && valueArr.map((value)=>
                   <option key={value} value={value} className="select-styles-option">
                        {value}
                   </option>
               )}
                
           </select> 
        </div>
        )
}