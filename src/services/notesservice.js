import axios from "axios";
import Axios from "./axiosservice";

const axiosService = new Axios()

export default class NoteService {
    addNote = (data) => {
        return axiosService.Post('notes/addNotes', data, localStorage.getItem('token'))

    }
    getNote = () => {
        return axiosService.Get('notes/getNotesList', localStorage.getItem('token'))
    }
    updateNote = (data) => {
        return axiosService.Post('notes/updateNotes', data, localStorage.getItem('token'))
    }
    deleteNote = (data) => {
        return axiosService.Post('notes/trashNotes', data, localStorage.getItem('token'))
    }
    gettrashNote = () => {
        return axiosService.Get('notes/getTrashNotesList', localStorage.getItem('token'))
    }
    archiveNote = (data) => {
        return axiosService.Post('notes/archiveNotes', data, localStorage.getItem('token'))
    }
    getarchiveNote = () => {
        return axiosService.Get('notes/getArchiveNotesList', localStorage.getItem('token'))
    }
    postColor = (data) => {
        return axiosService.Post('notes/changesColorNotes',data,localStorage.getItem('token'))
    }
}