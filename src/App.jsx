import "./App.css"
import qrCode from "./assets/image-qr-code.png"


export default function App() {
  return (
    <>
      <div className="container">
        <div className="img-section">
          <img src={qrCode} alt="qr code" />
        </div>
        <div className="text-section">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </>
  )
}
