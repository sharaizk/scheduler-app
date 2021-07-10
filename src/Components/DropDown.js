import React, { useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import './LoginForm.css'
const DropDown = ({ changeType }) => {
  const [state, setState] = React.useState({
    role: "Employee",
  });

  useEffect(() => {
    if (state.role !== "") {
      changeType((preVal) => ({
        ...preVal,
        role: state.role,
      }));
    }
  }, [state.role, changeType]);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div style={{marginTop:'10px'}}>
      <FormControl variant="outlined" className="DropDown">
        <InputLabel htmlFor="outlined-age-native-simple">Person Role</InputLabel>
        <Select
          native
          value={state.gender}
          onChange={handleChange}
          label="User role"
          inputProps={{
            name: "role",
            id: "outlined-age-native-simple",
          }}
        >
          <option value={"Employee"}>Employee</option>
          <option value={"Admin"}>Admin</option>
        </Select>
      </FormControl>
    </div>
  );
};
export default DropDown;
