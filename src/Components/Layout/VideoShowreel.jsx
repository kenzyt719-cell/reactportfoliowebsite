// import React, { useRef, useState } from "react";
// import "./VideoShowreel.css";
// import showreel from "../../Assets/showreel2.mp4"; 

// const VideoShowreel = () => {
//   const videoRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const handleToggle = () => {
//     if (isPaused) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//     }
//     setIsPaused(!isPaused);
//   };

//   return (
//     <div className="video-container">
//       <video
//         ref={videoRef}
//         src={showreel}
//         autoPlay
//         loop
//         muted
//         className={isPaused ? "paused" : ""}
//       ></video>
//       <button onClick={handleToggle} className="btn">
//         {isPaused ? "Play" : "Pause"}
//       </button>
//     </div>
//   );
// };

// export default VideoShowreel;