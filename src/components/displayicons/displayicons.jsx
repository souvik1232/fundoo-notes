import React from "react";
import IconButton from '@material-ui/core/IconButton';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import '../displayicons/displayicons.scss'
import NoteService from "../../services/notesservice";
import { PowerInputSharp } from "@material-ui/icons";
const noteService = new NoteService()

const useStyles = makeStyles((theme) => ({
  colorMenu: {
    width: "150px",
    height: "120px",
    padding: "1px",
    display: "flex",
    flexFlow: " column wrap",
  },
  colorButton: {
    margin: "2px",
    width: "30px",
    height: "30px",
    "&:hover": {
      border: "black 1px solid",
    },
  },
}))

const DisplayIcons = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState(false);
  const [showColorList, setShowColorList] = React.useState(false);
  const [noteId, setNoteId] = React.useState(props.editId);
  const [title, setTitle] = React.useState(props.editTitle);
  const [description, setDescription] = React.useState(props.editDisc);
  // let Bgcolor = props.color
  const colorsHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const colorsHandleClose = () => {
    setAnchorEl(null);
  }

  const passColor = (e, colr) => {
    e.stopPropagation();
    if (!props.edit) {
      let data = {
        color: colr,
        noteIdList: [props.noteobject.id],
      };
      noteService.postColor(data)
        .then((data) => {
          console.log("Update Color: " + data);
          console.log(colr);
          // props.getall();
        })
        .catch((err) => {
          console.log("Update Color Error = " + err);
        });
    }else if(props.edit) {
      let data = {
        color: colr,
        noteIdList: [props.id],
      };
      noteService.postColor(data)
        .then((data) => {
          console.log("Update Color: " + data);
          console.log(colr);
          // props.getall();
        })
        .catch((err) => {
          console.log("Update Color Error = " + err);
        });
    }
    // props.setcolor=colr;
    props.setcolor(colr)
  };
  const deleteHandleOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const deletesHandleClose = () => {
    setAnchorE2(null);
  };
  const archive = () => {
    let data = {
      noteIdList: [props.noteobject.id],
      isArchived: true,
    };
    console.log(data)
    noteService.archiveNote(data)
      .then((data) => {
        console.log(data);
        // props.getupdate()
        props.getUpdate()
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  };
  const deleted = () => {
    let data = {
      // cardidList:this.cardId,
      noteIdList: [props.noteobject.id],
      isDeleted: true,
    }

    console.log(data);
    noteService.deleteNote(data)
      .then((data) => {
        console.log(data);
        // props.getall();
        props.getUpdate()
      })
      .catch((err) => {
        console.log("error = " + err);
      });
    setAnchorE2(null);
    // props.setDelete();
  };

  //   const selectColor =()=>{
  //       PowerInputSharp.setBg
  //   }
  const handlecolor = () => {
    setColor(true)
  }
  const handlecolorOut = () => {
    setColor(false)
  }
  const DATA = [
    { id: "#e6c9a8" },
    { id: "#FFFFFF" },
    // { id: "#CFAFAF" },
    { id: "#D0C0C0" },
    { id: "#DBA9A9" },
    // { id: "#DF9D9D" },
    { id: "#fbbc04" },
    { id: "#00FF00" },
    // { id: "#008000" },
    { id: "#00FFFF" },
    // { id: "#008080" },
    // { id: "#000080" },
    // { id: "#CD5C5C" },
    { id: "#ccff90" },
    { id: "#e8eaed" },
    { id: "#d7aefb" },
    { id: "#a7ffeb" },
    { id: "#fff475" },
  ];
  //   const selectColor = (value) => {
  //     setBgColor(value);
  //   };
  const ColorBlock = () => {
    return (
      <div className={classes.colorMenu} onMouseLeave={colorsHandleClose}>
        {DATA.map((color) => (
          <IconButton
            className={classes.colorButton}
            onClick={(e) => passColor(e, color.id)}
            style={{ backgroundColor: color.id }}
          ></IconButton>
        ))}
      </div>
    );
  };
  return (
    <div className="tools">
      <IconButton aria-label="Remind me" edge="start">
        <AddAlertOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Collaborator">
        <PersonAddOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Change color"
        onMouseOver={colorsHandleClick}>
        <ColorLensOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Add image">
        <ImageOutlinedIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="Archive note">
        <ArchiveOutlinedIcon fontSize="small" onClick={archive} />
      </IconButton>
      <IconButton aria-label="More">
        <MoreVertOutlinedIcon fontSize="small" onClick={deleteHandleOpen} />
      </IconButton>
      <div
        className={classes.colorWindow}
        style={{ display: open ? "block" : "none" }}
        onClick={colorsHandleClose}
      >
        <Paper open={Boolean(open)}>
          <Menu
            open={Boolean(open)}
            className={classes.colorPaper}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
          >
            <ColorBlock className="colorBlock" />
          </Menu>
        </Paper>
      </div>
      <div>
        <Paper>
          <Menu
            anchorEl={anchorE2}
            open={Boolean(anchorE2)}
            onClose={deletesHandleClose}
          >
            <MenuItem onClick={deleted}>Delete</MenuItem>
          </Menu>
        </Paper>
      </div>
    </div>

  )
}

export default DisplayIcons;