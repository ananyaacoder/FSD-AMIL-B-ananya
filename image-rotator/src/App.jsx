import { useState } from 'react';
    const ROTATION_QUEUE = [0, 90, 180, 270]; 
    const QUEUE_SIZE = ROTATION_QUEUE.length;

    const DEFAULT_IMAGE_URL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopmKaiFi6FISwoOSOzCo9iwY_wwqDImLl8Oyeaz5BPzOw94s4JKlpKrw&s=10";

    const FALLBACK_IMAGE_URL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopmKaiFi6FISwoOSOzCo9iwY_wwqDImLl8Oyeaz5BPzOw94s4JKlpKrw&s=10";

    const RotateImage = () => {
      const [queueIndex, setQueueIndex] = useState(0);

      const [visualAngle, setVisualAngle] = useState(0);

      const [imgSrc, setImgSrc] = useState(DEFAULT_IMAGE_URL);
      const handleLeft = () => {
        setQueueIndex((prev) => (prev - 1 + QUEUE_SIZE) % QUEUE_SIZE);
        setVisualAngle((prev) => prev - 90);
      };

      const handleRight = () => {
        setQueueIndex((prev) => (prev + 1) % QUEUE_SIZE);

        setVisualAngle((prev) => prev + 90);
      };
      const normalizedAngle = ROTATION_QUEUE[queueIndex];

      return (
        <div style={{ textAlign: "center", fontFamily: "system-ui, sans-serif", padding: "30px 20px" }}>
          <h1
            style={{
              backgroundColor: "#1e293b",
              color: "#f8fafc",
              padding: "14px 20px",
              borderRadius: "8px",
              maxWidth: "500px",
              margin: "0 auto 20px"
            }}
          >Drums
          </h1>
 <p style={{ fontWeight: "600", color: "#64748b" }}>
      Current Angle: <span style={{ color: "#2563eb" }}>{normalizedAngle}°</span> (Index: {queueIndex})
    </p>
          

          <div
            style={{
              margin: "30px auto",
              width: "220px",
              height: "220px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible"
            }}
          >
            <img
              src={imgSrc}
              alt="Rotatable preview"
              onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                transform: `rotate(${visualAngle}deg)`,
                transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "24px" }}>
            <button
              type="button"
              onClick={handleLeft}
              aria-label="Rotate Left 90 degrees"
              style={{
                backgroundColor: "#475569",
                color: "#ffffff",
                border: "none",
                padding: "10px 22px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.15s"
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#334155")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#475569")}
            >
            Left
            </button>

            <button
              type="button"
              onClick={handleRight}
              aria-label="Rotate Right 90 degrees"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                border: "none",
                padding: "10px 22px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.15s"
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
            >
              Right
            </button>
          </div>
        </div>
      );
    };

    export default RotateImage;