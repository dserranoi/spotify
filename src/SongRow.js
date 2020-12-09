import React from 'react'
import './assets/styles/SongRow.css';

function SongRow({track}) {
    return (
        <div className='songRow'>
            <img src='' alt='' className='songRow__album' />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {/* {track.artists.map((artist)=>artist.name).join(", ")}
                    {track.album.name} */}
                </p>
            </div>
            {track}
        </div>
    )
}

export default SongRow
