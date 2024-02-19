const api = "AIzaSyAtdkqZOxOSd8C3zFxFzlHqsqcEqDSwGio"; 

const base_url = "https://www.googleapis.com/youtube/v3/search";

async function fetchVideo(searchQuery, maxResults){
    const response = await fetch(`${base_url}?key=${api}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`);

    const result = await response.json();
    console.log(result.items);
}


// fetchVideo("icc",50);

async function getVideosState(videoId){
    const response = await fetch(`${base_url}/videos?key=${api}&part=statistics&id=${videoId}`);

    const data = await response.json();
    console.log(data);
}
getVideosState("YqKYpgZ9FWU");


async function getChannelLogo(channelId){
    // https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBmOfUnRNYc22e04ZmK79uRbPb6388K9AE&part=snippet&id=UC8Wd_RVw8T1O1_IWEbICkIg
    const response = await fetch(`${base_url}/channels?key=${api}&part=snippet&id=${channelId}`);
    const data = await response.json();
    console.log(data);
}


async function getComments(videoId){
    const response = await fetch(`${base_urlL}/commentThreads?key=${api}&videoId=${videoId}&maxResults=25&part=snippet`);
    const data = await response.json();
    console.log(data);
}

getComments('Kwu1yIC-ssg');
