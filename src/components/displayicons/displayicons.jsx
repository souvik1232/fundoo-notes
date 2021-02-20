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
import '../displayicons/displayicons.scss'
import NoteService from "../../services/notesservice";
const noteService = new NoteService()

const DisplayIcons = (props) => {
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [noteId, setNoteId] = React.useState(props.editId);
    const [title, setTitle] = React.useState(props.editTitle);
    const [description, setDescription] = React.useState(props.editDisc);
    const deleteHandleOpen = (event) => {
        setAnchorE2(event.currentTarget);
      };
    
      const deletesHandleClose = () => {
        setAnchorE2(null);
      };
      const archive = () => {
        let data = {
            noteIdList:[props.noteobject.id],
            isArchived:true,
        };
        console.log(data)
        noteService.archiveNote(data)
          .then((data) => {
            console.log(data);
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
            props.getall();
          })
          .catch((err) => {
            console.log("error = " + err);
          });
        setAnchorE2(null);
        // props.setDelete();
      };
    return (
        <div className="tools">
            <IconButton aria-label="Remind me" edge="start">
                <AddAlertOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Collaborator">
                <PersonAddOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Change color">
                <ColorLensOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Add image">
                <ImageOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Archive note">
                <ArchiveOutlinedIcon fontSize="small" onClick={archive}/>
            </IconButton>
            <IconButton aria-label="More">
                <MoreVertOutlinedIcon fontSize="small" onClick={deleteHandleOpen}/>
            </IconButton>
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