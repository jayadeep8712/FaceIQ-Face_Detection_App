const video = document.getElementById('video')
const videoContainer = document.querySelector('.glass-container') // We need this to center the canvas

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: {} })
    .then(stream => video.srcObject = stream)
    .catch(err => console.error(err))
}

video.addEventListener('playing', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
 
  videoContainer.append(canvas)
  
  const displaySize = { 
    width: video.clientWidth, 
    height: video.clientHeight 
  }
  
  faceapi.matchDimensions(canvas, displaySize)

  // 4. Fix for the resizing issue
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
    
    // DYNAMICALLY check size every frame in case window is resized
    const currentDisplaySize = { 
        width: video.clientWidth, 
        height: video.clientHeight 
    }
    faceapi.matchDimensions(canvas, currentDisplaySize)

    const resizedDetections = faceapi.resizeResults(detections, currentDisplaySize)
    
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  }, 100)
})