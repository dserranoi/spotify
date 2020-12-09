import React from 'react'
import './assets/styles/Sidebar.css';
import spotifyIcon from './assets/images/spotify-image.png';
import SidebarOption from './SidebarOption';

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { useDataLayerValue} from './DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className='sidebar'>
            <img 
                className='sidebar__logo'
                src={spotifyIcon}
                alt='Spotify' />
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
            <br/>
            <strong className='sidebar__title'>PLAYLIST</strong>    
            <hr/>
            {playlists?.items?.map(playlist=>{
                return <SidebarOption title={playlist.name}/>
            })}
        </div>
    )
}

export default Sidebar
