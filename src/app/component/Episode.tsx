import React from 'react';

export interface EpisodeProps {
    season: number;
    episode_number: string;
    title: string;
    synopsis: string;
    netflix_video_id: number;
    duration: string;
  }
  

const Episode = (episode: EpisodeProps) => {
    return (
        <div className="episode">
            <p className="title">S{episode.season}E{episode.episode_number} - {episode.title}</p>
            <div className="thumbnail">
                <img src={`/thumb/${episode.netflix_video_id}.webp`} alt="Seinfeld episode" />
            </div>          
            <p className="synopsis">{episode.synopsis} ({episode.duration})</p>
        </div>
    );
}

export default Episode;