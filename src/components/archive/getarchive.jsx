import React, { Component } from 'react'
import NoteService from "../../services/notesservice";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import DisplayIcons from "../displayicons/displayicons"
import CreateNote from '../createNote/createNote'
import DisplayNote from '../displayNotes/displayNotes'
import './getarchive.scss'
const noteService = new NoteService()

class getNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            archive: []
        }
    }

    componentDidMount() {
        this.note()
    }

    note = () => {
        console.log('called');
        noteService.getarchiveNote().then((res) => {
            console.log(res.data.data.data);
            this.setState({ archive: res.data.data.data })
        })
    }
    render() {
        return (
            <div className="mainContent">
                {
                    this.state.archive.map((data) => (
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
                                    <DisplayIcons
                                        noteobject={data}
                                    />
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