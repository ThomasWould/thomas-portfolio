export const openGraphImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Thomas Wood — Design + Engineering",
};

export const twitterImage = {
  url: "/twitter-image",
  width: 1200,
  height: 630,
  alt: "Thomas Wood — Design + Engineering",
};

export function SocialPreview() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "64px 72px",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "#0B0C0E",
        color: "#F2F0E9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 72,
          width: 6,
          height: 64,
          background: "#5577FF",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(242, 240, 233, 0.2)",
          paddingTop: 22,
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        <span>Thomas Wood</span>
        <span style={{ color: "#969691", fontSize: 18 }}>Pennsylvania / Remote</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 112,
          fontWeight: 600,
          letterSpacing: "-0.055em",
          lineHeight: 0.88,
        }}
      >
        <span>DESIGN +</span>
        <span>ENGINEERING</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 22,
          borderTop: "1px solid rgba(242, 240, 233, 0.2)",
          paddingTop: 22,
          color: "#969691",
          fontSize: 20,
          letterSpacing: "0.13em",
          textTransform: "uppercase",
        }}
      >
        <span style={{ color: "#5577FF" }}>●</span>
        <span>Web / Product / AI</span>
      </div>
    </div>
  );
}
