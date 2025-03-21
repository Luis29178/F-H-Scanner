import logo from "./logo.svg";
import "./App.css";

function App() {
  const handelVideoLoaded  = (event) => {




  }

  const handelFileUpload = (event) => {
    const file = event.target.file[0];

    if (file) {
      const videoElement = document.createElement("video");

      videoElement.src = URL.createObjectURL(file);

      // TODO: Make Viedo container and have vedio fill that container for better look
      videoElement.width = 1280;
      videoElement.height = 720;
      videoElement.controls = true;

      videoElement.onloadeddata = handelVideoLoaded;

      document.body.appendChild(videoElement);
    }
  };

  return (
    <div className="App">
      <h1>Face Landmark Detection With TensorFlow</h1>
      <input type="file" accept="video/*" onChange={handelFileUpload} />
    </div>
  );
}

export default App;
