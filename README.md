<div align="center">
  <img src="./IQ/IQlogo.png" alt="FaceIQ Logo" width="100">
  <h1 align="center">FaceIQ</h1>
  <p align="center">
    <b>Browser-Based Emotion Recognition</b>
  </p>

  <p align="center">
    <a href="https://jayadeep8712.github.io/FaceIQ-Browser-Based-Emotion-Recognition/">
      <img src="https://img.shields.io/badge/LIVE_DEMO-Click_Here-FF00B7?style=for-the-badge&logo=github" alt="Live Demo" />
    </a>
  </p>

</div>

**FaceIQ** is a privacy-first, browser-based biometric analysis tool. It performs real-time face detection, landmark recognition, and emotion analysis directly in the client's browser using **Edge AI** technology.


## 🚀 Features
- **Client-Side Inference:** No video data is ever sent to a server. All processing happens locally on the user's device.
- **Real-Time Performance:** Optimized for low latency (< 100ms) using WebGL-accelerated inference.
- **Biometric Analysis:** Detects 68 facial landmarks and predicts 7 distinct emotions (Happy, Sad, Neutral, etc.).
- **Responsive UI:** Glassmorphism design system built with CSS3 Flexbox and transitions.

## 🛠 Tech Stack
- **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **AI/ML Engine:** [face-api.js](https://github.com/justadudewhohacks/face-api.js) (built on TensorFlow.js)
- **Models Used:** SSD Mobilenet V1, Face Landmark 68, Face Expression Net


## 📊 Model Accuracy & Performance

The application utilizes the **SSD Mobilenet V1** neural network for face detection, chosen for its balance between speed and accuracy on consumer hardware.

> **Note:** The stated **99.7% accuracy** is based on the benchmark performance of the SSD Mobilenet V1 model used by `face-api.js` on the **LFW (Labeled Faces in the Wild)** dataset.


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