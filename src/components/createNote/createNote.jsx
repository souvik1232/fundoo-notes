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
import NoteService from "../../services/notesservice";
import DisplayIcons from "../displayicons/displayicons"
var checkOpen = "open";

const noteService = new NoteService()

export default function AddNote() {
  const [open, setOpen] = React.useState(false);
  const [title, settitle] = React.useState('');
  const [description, setdescription] = React.useState('');
  const handletitle = (Event) => {
    settitle(Event.target.value)
  }

  const handledescription = (Event) => {
    setdescription(Event.target.value)
  }
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

  const handleNote=()=>{
    let data = {
      title : title,
      description : description,
    }
    console.log(data)
    noteService.addNote(data).then((data)=>{
      console.log(data);
    })
    .catch ((error)=>{
      console.log(error)
    })
    if (checkOpen == "close") {
      setOpen(true);
      checkOpen = "open";
    } else if (checkOpen == "open") {
      setOpen(false);
      checkOpen = "close";
    }
    window.location.href='http://localhost:4200/dashboard/notes'
  }

  return (
    <div className="notesone">
      {open ?
        <div className="contain container1">
          <div className="note1" >
            <div className="title pd">
              <InputBase placeholder='Title...' fullWidth name='title' onChange={handletitle} />
              <IconButton>
                <img className="logoIcon" src={logoicon} size="small" />
              </IconButton>
            </div>
            <div className='note pd'>
              <InputBase placeholder='Take a note...' fullWidth name='description' onChange={handledescription} />
            </div>
          </div>
          <br>
          </br>

          <div className="toolbar">
            <div className="toolbar1">
              <DisplayIcons />
            </div>
            <div className="close-button">
              <Button size="small" onClick={handleNote}>Close</Button>
            </div>
          </div>
        </div> :
        <div className="contain container" >
          <div className="note">
            <InputBase placeholder='Take a note...' fullWidth onClick={NotePadOpenClose} />
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