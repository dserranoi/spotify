import React from 'react'
import './assets/styles/Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function Body({spotify}) {
    const [{discover_weekly},dispatch] = useDataLayerValue()
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt='Playlist Image' />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleOutlineIcon className='body__shuffle' />
                    <FavoriteIcon fontSize='large'/>
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map(item=>{
                   return( 
                       <div className='songRow'>
                        <img src={item.track.album.images[0].url} alt='' className='songRow__album'/>
                        <div className="songRow__info">
                            <h1>{item.track.name}</h1>
                            <p>
                                {item.track.artists.map((artist)=>artist.name).join(", ")}
                                {item.track.album.name}
                            </p>
                        </div> 
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Body
