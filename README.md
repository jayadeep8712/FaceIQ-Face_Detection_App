<div align="center">
  <img src="./IQ/IQlogo.png" alt="FaceIQ Logo" width="100">
  <h1 align="center">FaceIQ</h1>
  <p align="center">
    <b>Browser-Based Emotion Recognition</b>
  </p>
</div>

<br />

## 🚀 Features
- **Client-Side Inference:** Runs entirely in the browser using TensorFlow.js (no server latency).
- **Privacy First:** Biometric data never leaves the user's device.
- **Real-Time Performance:** Optimized for low-latency detection.

NOTE: *99.7% is based on the benchmark performance of the SSD Mobilenet V1 model used by face-api.js on the LFW (Labeled Faces in the Wild) dataset.*

## 🛠 Tech Stack
- **Core:** JavaScript
- **ML Engine:** face-api.js / TensorFlow.js
- **UI:** CSS3 Glassmorphism & Flexbox

## ⚡ Quick Start
1. Clone the repo
   ```bash
   git clone https://github.com/jayadeep8712/FaceIQ-Browser-Based-Emotion-Recognition.git
   ```

2. Navigate to the project
   ```bash
   cd IQ
   ```
3. Start the local server (using Python)
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and go to:
   ```bash
   http://localhost:8000
   ```