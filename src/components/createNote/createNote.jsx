import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import logoicon from "../icons/pin.jpeg";
import '../createNote/createNote.scss'
// import DisplayIcons from "../displayicons/displayicons"
var checkOpen = "open";

export default function AddNote(){
    const [open, setOpen] = React.useState(false);
    const NotePadOpenClose = () => {
        if (checkOpen == "close") {
          setOpen(true);
          checkOpen = "open";
        } else if (checkOpen == "open") {
          setOpen(false);
          checkOpen = "close";
        }
        console.log(checkOpen);
      }

return(
    <div className="notesone">
        {open ?
         <div className="contain container1">
         <div className="note1" >
           <div className="title pd">
             <InputBase placeholder='Title...' fullWidth/>
             <IconButton>
             <img className="logoIcon" src={logoicon} size="small"/>
             </IconButton>
           </div>
           <div className='note pd'>
             <InputBase placeholder='Take a note...' fullWidth />
           </div>
         </div>
         <br>
         </br>
        
         <div className="toolbar">
         <div className="toolbar1">
         {/* <DisplayIcons /> */}
         </div>
           <div className="close-button">
             <Button size="small" onClick={NotePadOpenClose}>Close</Button>
           </div>
         </div>
       </div> :
       <div className="contain container" >
       <div className="note">
       <InputBase placeholder='Take a note...' fullWidth onClick={NotePadOpenClose}/>
       </div>
         <IconButton>
           <CheckBoxOutlinedIcon />
         </IconButton>
         <IconButton> 
             <BrushIcon />
         </IconButton>
         <IconButton> 
             <ImageOutlinedIcon />
         </IconButton>
       </div>
       
       
    }
    </div>
)

}