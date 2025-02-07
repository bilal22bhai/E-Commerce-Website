// import React, { useRef, useEffect, useState } from 'react';

// const CameraWithFrame = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     // Request camera access
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           videoRef.current.onloadedmetadata = () => {
//             // Ensure video starts playing
//             videoRef.current.play();
//             // Set video dimensions once metadata is loaded
//             setVideoDimensions({
//               width: videoRef.current.videoWidth,
//               height: videoRef.current.videoHeight,
//             });
//             console.log("Camera feed started.");
//           };
//         }
//       })
//       .catch((err) => console.error("Error accessing camera:", err));

//     // Cleanup function to stop camera feed
//     return () => {
//       const video = videoRef.current; // Store videoRef.current in a local variable
//       if (video && video.srcObject) {
//         video.srcObject.getTracks().forEach((track) => track.stop());
//         console.log("Camera feed stopped.");
//       }
//     };
//   }, []);

//   const captureImage = () => {
//     if (videoRef.current && canvasRef.current) {
//       const canvas = canvasRef.current;
//       const context = canvas.getContext('2d');

//       // Set canvas dimensions to match video
//       canvas.width = videoDimensions.width;
//       canvas.height = videoDimensions.height;

//       // Draw the current video frame onto the canvas
//       context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//       // Convert canvas content to an image
//       const imageData = canvas.toDataURL('image/png');
//       console.log("Captured Image Data URL:", imageData);

//       if (imageData) {
//         alert("Image captured successfully!");
//       } else {
//         console.error("Failed to capture image.");
//       }
//     }
//   };

//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
//       {/* Camera feed */}
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         muted
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//         }}
//       ></video>

//       {/* Frame overlay */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//           background: 'url(/frame-overlay.png) no-repeat center center',
//           backgroundSize: 'contain',
//         }}
//       ></div>

//       {/* Capture Button */}
//       <button
//         onClick={captureImage}
//         style={{
//           position: 'absolute',
//           bottom: '20px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           padding: '10px 20px',
//           backgroundColor: 'black',
//           color: '#FFF',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           zIndex: 10,
//         }}
//       >
//         Capture
//       </button>

//       {/* Hidden canvas */}
//       <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
//     </div>
//   );
// };

// export default CameraWithFrame;
