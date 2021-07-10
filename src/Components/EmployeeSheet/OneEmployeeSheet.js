import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getEmployeeSheet,checkPageToken } from "../../redux/actions";
import RenderSheets from "../RenderSheets";
import PuffLoader from "react-spinners/PuffLoader";
import DataBreach from "../DataBreach";
import './OneEmployee.css'
function OneEmployeeSheet({ location, getEmployeeSheet, singleSheet,checkPageToken, isRole }) {
  const[loading,setLoading] = useState(true)
  let id
  if(location.state){
    id = location.state.id;
  }


  useEffect(() => {
    const data = async () => {
      await checkPageToken()
      await getEmployeeSheet(id);
      let timer=setTimeout(()=>{
        setLoading(false)
      },250)
      return () => {
        clearTimeout(timer)
      }
    };
    data();
  }, [getEmployeeSheet, id, checkPageToken]);

  const renderSheet = () => {
    return <RenderSheets sheet={singleSheet} />;
  };

  const noSheetFound = () => {
    return <p>No Sheet Found</p>;
  };

  const renderPage=()=>{
    return(
      <>
      {isRole === "Admin" ? (
      <div className="container">
      <div className="infoContainer">
        <h4 className="labelSheet">Today's TimeSheet</h4>
        {singleSheet.length !== 0 ? renderSheet() : noSheetFound()}
      </div>
    </div>
      ) : (
        <DataBreach
          heading="SECURITY BREACH"
          notRole="ADMIN"
          to="/user/home"
          whereTo="Employee"
        />
      )}
    </>
    )
  }

  const renderLoading =()=>{
    return(
      <div className="sweet-loading">
      <PuffLoader color={"#432344"} loading={loading}  size={150} className="loader"/>
    </div>
    )
  }

  return (
    <>
    {loading?renderLoading():renderPage()}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isRole: state.auth.userType,
    singleSheet: state.employee.employeeSheet,
  };
};

export default connect(mapStateToProps, { getEmployeeSheet,checkPageToken })(OneEmployeeSheet);
