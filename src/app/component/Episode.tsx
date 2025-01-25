
export interface EpisodeProps {
    season: number;
    episode_number: string;
    title: string;
    synopsis: string;
    netflix_video_id: number;
    duration: string;
}


const Episode = (props: { episode: EpisodeProps, onRefresh: () => void }) => {
    const { episode, onRefresh } = props;
    const episodeDescription = `S${episode.season}E${episode.episode_number} - ${episode.title}`;
    return (
        <div className="episode">
            <p className="title">{episodeDescription}</p>
            <div className="thumbnail">
                <img src={`/thumb/${episode.netflix_video_id}.webp`} alt={episodeDescription} />
            </div>
            <p className="synopsis">{episode.synopsis} ({episode.duration})</p>
            <div className="actions">
                <button className="btn-refresh" onClick={onRefresh}>Refresh</button>
                <a href={`https://www.netflix.com/watch/${episode.netflix_video_id}`} target="_blank" className="btn-watch">Watch it on Netflix</a>
            </div>
        </div>
    );
}

export default Episode;