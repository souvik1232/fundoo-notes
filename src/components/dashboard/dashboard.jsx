import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import InputBase from '@material-ui/core/InputBase';
import history from '../../components/history'
import './dashboard.scss';
import SearchIcon from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography";
import SettingsIcon from '@material-ui/icons/Settings';
import RefreshIcon from '@material-ui/icons/Refresh';
import AppsIcon from '@material-ui/icons/Apps';
import GetNote from '../getNote/getNote1'
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';

class dashboard extends Component {

    constructor(props) {
        super(props)


        this.state = {
            sidebar: false,
            sidebarOpen: true,
            notes: false,
            archive: false,
            trash: false,
            reminder: false,
            edit: false,
            Assignment: false,
        }
    }
    showSidebar = () => {
        this.setState({ sidebar: (!this.state.sidebar) })
    }
    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }
    trash = () => {
        history.push('/dashboard/trash')
        this.setState({
            trash: true,
            notes: false,
            archive: false
        })
    }
    notes = () => {
        history.push('/dashboard/notes')
        this.setState({
            notes: true,
            archive: false,
            trash: false
        })
    }
    archive = () => {
        history.push('/dashboard/archive')
        this.setState({
            archive: true,
            notes: false,
            trash: false,
        })
    }
    refresh = ()=>{
        <GetNote/>
    }

    render() {
        return (

            <div >
                <div><Navbar className='nav' bg="" variant="light" expand="xl">
                    <img className='menu-bars' onClick={this.showSidebar} />
                    <div className='img'><img /></div>
                    <div className="app_nam"><Typography variant="h5" color="textSecondary">
                        <span style={{ color: "#0606f8" }}>F</span>
                        <span style={{ color: "#d10303" }}>u</span>
                        <span style={{ color: "#f0b000" }}>n</span>
                        <span style={{ color: "#0606f8" }}>d</span>
                        <span style={{ color: "green" }}>o</span>
                        <span style={{ color: "#d10303" }}>o</span>
                    </Typography></div>


                    <div className="search">
                        <div className="searchIcon">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                        </div>
                        <InputBase
                            className="searchInput"
                            placeholder="Search…"
                            classes={{
                                root: "inputRoot",
                                input: "inputInput",
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'} >
                        <div className={this.state.notes ? 'notes active' : 'notes'} onClick={this.notes}>
                            <img className='ig' id='i1' /><span className='a'>Notes</span></div>
                        <div className='reminder'><img className='ig' id='i2' /><span className='a'>Reminder</span></div>
                        <div className='assinment'><img className='ig' id='i6' /><span className='a'>Assignment DSP</span></div>
                        <div className='edit'><img className='ig' id='i3' /><span className='a'>Edit</span></div>
                        <div className={this.state.archive ? 'archive active' : 'archive'} onClick={this.archive}> <img className='ig' id='i4' /><span className='a'>Archive</span></div>
                        <div className={this.state.trash ? 'trash active' : 'trash'} onClick={this.trash}><img className='ig' id='i5' /><span className='a'>Trash</span></div>
                    </nav>
                    <div className='icon'><RefreshIcon style={{ cursor: 'pointer' }} onClick={this.refresh}/>
                        <ViewAgendaOutlinedIcon style={{ cursor: 'pointer' }} />
                        <SettingsIcon style={{ cursor: 'pointer' }} />
                        <div className='ic'>
                            <AppsIcon style={{ cursor: 'pointer' }} />
                            <div className='profile' style={{ cursor: 'pointer' }}></div>
                        </div>

                    </div>
                </Navbar></div>
            </div>
        )
    }
}
export default dashboard