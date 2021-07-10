import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Divider from '@material-ui/core/Divider';
import history from "../history";
import {connect} from 'react-redux'
import {signOut} from '../../redux/actions'
import './Modal.css'
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 'auto',
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
}));

const ModalComponent =({signOut})=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    history.goBack()
  };

  const body = (
    <div
      style={{
        borderRadius:'10px'
      }}
      className={classes.paper}
    >
      <h2 id="simple-modal-title">Are you sure you want to logout?</h2>
      <Divider style={{ height:'5px'}} />
      <p id="simple-modal-description" style={{marginTop:'5px'}}>
        Logging out will result in minimal access to the Site.
      </p>
      <Divider style={{ height:'5px'}}  />
      <div id="simdivle-modal-description" style={{marginTop:'5px'}}>
        <button className="button no" onClick={()=>history.goBack()}>NO</button>
        <button className="button yes" onClick={()=>{
            signOut()
            history.push('/')
        }}>YES</button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    <div style={{height:'500px'}}>
      <Modal
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>,
    document.querySelector("#modal")
  );
}

export default connect(null, {signOut})(ModalComponent);
