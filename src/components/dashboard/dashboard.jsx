import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import InputBase from '@material-ui/core/InputBase';
import * as VscIcons from 'react-icons/vsc';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as CgIcons from "react-icons/cg";
import * as BsIcons from "react-icons/bs";
import './dashboard.scss';
import SearchIcon from "@material-ui/icons/Search"
import Typography from "@material-ui/core/Typography";
import SettingsIcon from '@material-ui/icons/Settings';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import { Link, Redirect } from "react-router-dom";

class dashboard extends Component {

    constructor(props) {
        super(props)


        this.state = {
            sidebar: false,
            sidebarOpen: true
        }
    }
    showSidebar = () => {
        this.setState({ sidebar: (!this.state.sidebar) })
    }
    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }
    trash=()=>{
        window.location.href='http://localhost:4200/dashboard/trash'
    }
    notes=()=>{
        window.location.href='http://localhost:4200/dashboard/notes'
    }
    archive=()=>{
        window.location.href='http://localhost:4200/dashboard/archive'
    }

    render() {
        return (

            <div >



                {/* <Link to='#' className='menu-bars3'>
                                <FiIcons.FiServer />
                            </Link>
                            
                            <Link to='#' className='menu-bars3'>
                                <AiIcons.AiTwotoneSetting />
                            </Link>
                            <Link to='#' className='menu-bars3'>
                                <CgIcons.CgMenuGridO />
                            </Link> */}
                <div><Navbar className='nav' bg="" variant="light" expand="xl">
                    <img className='menu-bars' onClick={this.showSidebar} />


                    {/* <Link to='#' className='menu-bars'>
                        <VscIcons.VscThreeBars onClick={this.showSidebar} />
                    </Link> */}
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
                        <ul className='nav-menu-items' onClick={this.showSidebar}>
                            {/* <Link to='#' className='menu-bars1'>
                                <AiIcons.AiOutlineClose />
                            </Link> */}
                            <li className="navbar-toggle">
                                <div className='notes' onClick={()=>{<Redirect to="dashboard/notes"/>}}>
                                    <img className='ig' id='i1' /><span className='a'>Notes</span></div>

                            </li>
                            <li className="navbar-toggle">
                                <div className='reminder'><img className='ig' id='i2' /><span className='a'>Reminder</span></div>

                            </li>
                            <li className="navbar-toggle">
                                <div className='assinment'><img className='ig' id='i6' /><span className='a'>assignment DSP</span></div>

                            </li>
                            <li className="navbar-toggle">
                                <div className='edit'><img className='ig' id='i3' /><span className='a'>Edit</span></div>

                            </li>
                            <li className="navbar-toggle">
                                <div className='archive' onClick={this.archive}> <img className='ig' id='i4' /><span className='a'>Archive</span></div>

                            </li>
                            <li className="navbar-toggle">
                                <div className='trash' onClick={this.trash}><img className='ig' id='i5' /><span className='a'>Trash</span></div>

                            </li>
                        </ul>
                    </nav>
                    <div className='icon'><li className='list'><img className='help' /></li>
                        <li className='list'><ViewAgendaOutlinedIcon /></li>
                        <li className='list'><SettingsIcon /></li></div>




                </Navbar></div>


            </div>



        )
    }


}
export default dashboard