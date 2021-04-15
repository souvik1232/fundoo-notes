import React, { Component } from 'react'
import NoteService from "../../services/notesservice";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import DisplayIcons from "../displayicons/displayicons"
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import RestoreFromTrashOutlinedIcon from '@material-ui/icons/RestoreFromTrashOutlined';
import CreateNote from '../createNote/createNote'
import DisplayNote from '../displayNotes/displayNotes'
import './gettrash.scss'
const noteService = new NoteService()

class getNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trash: []
        }
    }

    componentDidMount() {
        this.note()
    }

    note = () => {
        console.log('called');
        noteService.gettrashNote().then((res) => {
            console.log(res.data.data.data);
            this.setState({ trash: res.data.data.data })
            this.setState({ trash: this.state.trash.reverse() })
        })
    }
    deleteforever = (e, id) => {
        let data = {
            // cardidList:this.cardId,
            noteIdList: [id],
            isDeleted: false,
        }

        console.log(data);
        noteService.foreverDelete(data)
            .then((data) => {
                console.log(data);
                this.note()
                // props.getall();
            })
            .catch((err) => {
                console.log("error = " + err);
            });
    }
    render() {
        return (
            <div className="mainContent">
                {
                    this.state.trash.map((data) => (
                        <Card key={data.id} className='card' variant='outlined' >
                            <CardContent onClick={(e) => this.modalOpen(e, data)}>

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
                                    <IconButton aria-label="Remind me" edge="start">
                                        <DeleteForeverOutlinedIcon fontSize="small" onClick={(e)=>{this.deleteforever(e,data.id)}}/>
                                    </IconButton>
                                    <IconButton aria-label="Remind me" edge="start">
                                        <RestoreFromTrashOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </div>

                            </CardActions>

                        </Card>


                    ))
                }


            </div>
        )
    }
}
export default getNote