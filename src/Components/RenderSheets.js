import React from 'react'
import './RenderSheet.css'
const RenderSheets = ({sheet}) =>{
    console.log(sheet)
    const {sheets} = sheet

    const renderActions=()=>{
        return(
           sheets.map((sheet)=>{
            return(
                <div key={sheet._id} className="timeSheet">
                <h5>{`Time: ${sheet.time}`}</h5>
                <h5>{`Reason: ${sheet.description}`}</h5>
                <h5>{`Action: ${sheet.status}`}</h5>
                </div>
            )
           })
        )
    }
    return(
        <div className="mainSheet">
            <h4>{`Date: ${sheet.date}`}</h4>
            <div className="timeSheetContainer">
            {renderActions()}
            </div>
        </div>
    )
}

export default RenderSheets