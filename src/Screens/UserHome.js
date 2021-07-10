import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { checkPageToken, createSheet, getSheet } from "../redux/actions";
import "./UserHome.css";
import DataBreach from "../Components/DataBreach";
import InputField from "../Components/InputField";
import RenderSheets from "../Components/RenderSheets";
import ScaleLoader from "react-spinners/ScaleLoader";
const UserHome = ({checkPageToken,isRole,dateSheet,createSheet,getSheet})=>{

  const [loading, setLoading]=useState(true)

  useEffect(() => {
    const data = async () => {
      await checkPageToken();
      await getSheet();
      let timer=setTimeout(()=>{
        setLoading(false)
      },250)
      return () => {
        clearTimeout(timer)
      }
    };
    data();
  }, [getSheet, checkPageToken]);


  const [formValue, setFormValues] = useState({
    description: "",
  });


  const onCLockOut = async() => {
    if(formValue.description === ""){
        alert("Please Tell the reason")
    }
    else{
        await createSheet(formValue);
        setFormValues({description:""})
        getSheet();
    }
  };
  const onClockIn=async()=>{
    await createSheet(formValue);
    setFormValues({description:""})
    getSheet(); 
  }

  const renderSheet = () =>{
    return(
      <RenderSheets sheet={dateSheet}/>
    )
}

  const renderForm = () =>{
      if(dateSheet.sheets[dateSheet.sheets.length - 1].status === "Clock-In"){
        return(
            <div className="container">
            <div className="infoContainer">
              <h4 className="labelSheet">Today's TimeSheet</h4>
              {dateSheet.length !== 0 ? renderSheet() : noSheetFound() }
            </div>
            <div className="inputArea">
              <InputField
                name="description"
                label="What's the Reason?"
                type="text"
                value={formValue.description}
                setFormValues={setFormValues}
              />
              <button className="clkBtn" onClick={onCLockOut}>
                Clock Out
              </button>
            </div>
          </div>
        )
      }
      else if(dateSheet.sheets[dateSheet.sheets.length - 1].status === "Clock-Out"){
          return(
            <div className="container">
            <div className="infoContainer">
              <h4 className="labelSheet">Today's TimeSheet</h4>
              {dateSheet.length !== 0 ? renderSheet() : noSheetFound() }
            </div>
            <div className="inputArea">
              <button className="clkBtn" onClick={onClockIn}>
                Clock In
              </button>
            </div>
          </div>
          )
      }
  }

  const noSheetFound = ()=>{
      return(
        <div className="container">
        <div className="infoContainer">
          <h4 className="labelSheet">Today's TimeSheet</h4>
          <p>No Sheet Found</p>
        </div>
        <div className="inputArea">

              <button className="clkBtn" onClick={onClockIn}>
                Clock In
              </button>
        </div>
      </div>
      )
  }

  const renderPage=()=>{
    return (
      <>
        {isRole === "Employee" ? (
            <>
            {dateSheet.length !== 0 ? renderForm() : noSheetFound() }
            </>
        ) : (
          <DataBreach
            heading="SECURITY BREACH"
            notRole="EMPLOYEE"
            to="/admin/home"
            whereTo="ADMIN"
          />
        )}
      </>
    );
  }
  
  return (
    <>
      {loading ?       <div className="sweet-loading">
      <ScaleLoader color={"#432344"} loading={loading}   size={150} className="loader"/>
    </div>:
    renderPage()}
    </>
  );
};

const mapSateToProps = (state) => {
  return {
    isRole: state.auth.userType,
    dateSheet: state.sheet.sheetData,
  };
};
export default connect(mapSateToProps, {checkPageToken,createSheet,getSheet})(UserHome);
