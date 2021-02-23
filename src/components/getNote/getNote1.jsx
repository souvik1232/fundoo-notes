import React, { Component } from 'react'
import NoteService from "../../services/notesservice";
import CreateNote from '../createNote/createNote'
import DisplayNote from '../displayNotes/displayNotes'
const noteService = new NoteService()

class getNote extends Component {
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
    }

    componentDidMount(){
        this.note()
    }

    note =()=>{
        console.log('called');
        noteService.getNote().then((res)=>{
            console.log(res.data.data.data);
            this.setState({notes:res.data.data.data})
        })
    }
    render(){
        return (
            <div>
                <CreateNote 
                getnoteupdate={this.note} />
                <DisplayNote
                getnoteupdate={this.note}
                NotesArray={this.state.notes} />
                
            </div>
        )
    }
}
export default getNote