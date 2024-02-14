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
    const episodeDescription = `S${episode.season}E${episode.episode_number} - ${episode.title}`;
    return (
        <div className="episode">
            <p className="title">{episodeDescription}</p>
            <div className="thumbnail">
                <img src={`/thumb/${episode.netflix_video_id}.webp`} alt={episodeDescription} />
            </div>          
            <p className="synopsis">{episode.synopsis} ({episode.duration})</p>
        </div>
    );
}

export default Episode;