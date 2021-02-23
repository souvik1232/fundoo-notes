import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DisplayIcons from "../displayicons/displayicons"
import logoicon from "../icons/pin.jpeg";
import './displayNotes.scss'
import NoteService from "../../services/notesservice";
import Modal from 'react-modal'


Modal.setAppElement('#root')

const noteService = new NoteService()


class DisplayNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteId: '',
            title: '',
            description: '',
            modalIsOpen: false,
            open: '',
            clr:'#fafafa'
        }
    }

    handleNoteChange = (e) => {
        // e.preventDefault();
        console.log("on change calling", e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }

    handleUpdateNote = (e) => {
        e.preventDefault();
        let data = {
            noteId: this.state.noteId,
            title: this.state.title,
            description: this.state.description

        }

        noteService.updateNote(data).then((data) => {
            console.log(data);
            this.props.getnoteupdate()
        }).catch((err) => {
            console.log(err);
        })
        this.setState({ modalIsOpen: false })
    }

    modalOpen = (e, data) => {
        e.stopPropagation();
        this.setState({
            modalIsOpen: true,
            noteId: data.id
        });
        console.log(this.state.noteId);


    }
    handleClickOpen = (e, data) => {
        e.stopPropagation();
        this.setState({
            open: true,
            noteId: data.id,
            title: data.title,
            description: data.description
        })
    };
    handleClose = () => {
        this.setState({ open: false })
    };
    setColor =(color)=>{
        console.log(color);
        this.setState=({
            clr:color
        })
    }



    render() {

        return (
            <div>
                <div className='container-card'>
                    {
                        this.props.NotesArray.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).map((data) => (
                            <Card key={data.id} className='card' variant='outlined' style={{background: data.color}}>
                                <CardContent onClick={(e) => this.handleClickOpen(e, data)}>

                                    <Typography variant="h5" key={data.index} component="h2" >
                                        {data.title}
                                    </Typography>
                                    <Typography variant="body2" key={data.index} component="p" >
                                        {data.description}
                                    </Typography>

                                    {/* <GetNote /> */}


                                </CardContent>
                                <CardActions>
                                    <div className='icons'>
                                        <DisplayIcons
                                            noteobject={data}
                                            setcolor={this.setColor}
                                            edit={false}
                                        />
                                    </div>

                                </CardActions>

                            </Card>


                        ))
                    }
                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} >
                        <div className='modalnote'>
                            <div className="title pd">
                                <InputBase placeholder='title' value={this.state.title} fullWidth name='title' onChange={this.handleNoteChange} />
                                <IconButton>
                                    <img className="logoIcon" src={logoicon} size="small" />
                                </IconButton>
                            </div>
                            <div className='note pd'>
                                <InputBase placeholder='desc' value={this.state.description} fullWidth name='description' onChange={this.handleNoteChange} />
                            </div>
                            <div >

                            </div>
                            <div><DisplayIcons
                            id={this.state.noteId}
                            edit={true}
                            setClr={this.state.clr}/></div>

                            <div className="close">
                                <Button size="small" onClick={this.handleUpdateNote}>Close</Button>
                            </div>
                        </div>
                    </Dialog>
                </div>
            </div>



        )
    }


}
export default DisplayNotes
