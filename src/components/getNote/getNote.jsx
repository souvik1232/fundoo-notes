import React, { Component } from 'react'
import NoteService from "../../services/notesservice";
import CreateNote from '../createNote/createNote'
import DisplayNote from '../displayNotes/displayNotes'
const noteService = new NoteService()

class GetNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes:[]

        }

    }
    componentDidMout(){
        this.note()
    }
    note = () => {
        console.log('Called');
        noteService.getNote().then((res) => {
            console.log(res);
            this.setState({notes:res.data.data.data})
        })
    }
    render(){
        return (
            <div>
                <CreateNote/>
                <DisplayNote NotesArray={this.state.notes} />
                
            </div>
        )
    }



}

export default GetNote
