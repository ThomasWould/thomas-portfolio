import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#0B0C0E",
          color: "#F2F0E9",
          fontFamily: "Arial, sans-serif",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "-0.07em",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 5,
            background: "#5577FF",
          }}
        />
        <span style={{ transform: "translateX(-1px)" }}>TW</span>
      </div>
    ),
    size,
  );
}
