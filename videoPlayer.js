window.addEventListener("load", () => {
    // we need to write logic for rendering video player
    // iframe
    let vdeoId = "25T8Bj_WQbY";
    if(YT){
      new YT.Player('video-container',{
          height: "500",
          width: "1000",
          videoId:vdeoId,
      })
    }
  });
  