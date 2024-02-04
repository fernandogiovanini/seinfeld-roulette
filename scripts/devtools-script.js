/*
This is meant to be executed in Netflix's Seinfeld page to scrape data
and log a json object. Everything very manual, but it works.
*/

function scrape(season /* Change this according to the season selected */){
    const seasons = [];
    const episodes = document.getElementsByClassName('titleCardList--container');
    for(let i=0; i<episodes.length; i++){
        let episode = episodes.item(i);
        let episode_number = episode.children[0].innerHTML;
        let netflix_video_id = JSON.parse(decodeURIComponent(episode.children[1].querySelector('.ptrack-content').dataset.uiTrackingContext)).video_id;
        let thumb = episode.children[1].querySelector('img').src;
        let synopsis = episode.children[2].querySelector('.titleCard-synopsis > .ptrack-content').innerHTML;
        let duration = episode.children[2].querySelector('.duration').innerHTML;
        let title = episode.children[2].querySelector('.titleCard-title_text').innerHTML;
        
        seasons.push({
        season,
        episode_number,
        title,
        synopsis,
        netflix_video_id,
        duration,
        thumb
        });
    }
    console.log(JSON.stringify(seasons));
}
