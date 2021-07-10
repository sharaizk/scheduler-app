import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DataBreach from "../Components/DataBreach";
import { checkPageToken, getEmployee } from "../redux/actions";
import "./AdminHome.css";
import EmployeeList from "../Components/RenderEmployeeList";
import ScaleLoader from "react-spinners/ScaleLoader";

const AdminHome = ({ checkPageToken, isRole, getEmployee, employees }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const data = async () => {
      await checkPageToken();
      await getEmployee();
      let timer=setTimeout(()=>{
        setLoading(false)
      },500)
      return () => {
        clearTimeout(timer)
      }
    };

    data();
  }, [getEmployee, checkPageToken]);

  const renderEmployees = ()=>{
      return(
          <>
          {employees.length !==0 ? <EmployeeList employees={employees} /> : <div>No Employee Found</div>}
          </>
      )
  }

  const renderPage =()=>{
    return(
      <>
      {isRole === "Admin" ? (
          <div className="mainContainer">
              <div className="headerContainer">
              <h3>WELCOME ADMIN</h3>
              </div>
              <div className="employeesContainer">
              {renderEmployees()}
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

  const renderLoading = ()=>{
    return(
      <div className="sweet-loading">
      <ScaleLoader color={"#432344"} loading={loading}  size={150} className="loader"/>
    </div>
    )
  }

  return (
    <>
      {loading ? renderLoading() : renderPage()}
    </>
  );
};
const mapSateToProps = (state) => {
  return {
    isRole: state.auth.userType,
    employees: state.employee.employeeList,
  };
};
export default connect(mapSateToProps, { checkPageToken, getEmployee })(
  AdminHome
);
