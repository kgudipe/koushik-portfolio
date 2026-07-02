export default function Orbs() {
  return (
    <div className="pointer-events-none select-none" aria-hidden="true">
      <div
        className="absolute rounded-full animate-orb1"
        style={{
          width: 340, height: 340,
          background: "#4338CA", opacity: 0.13,
          top: -90, right: -60,
          filter: "blur(65px)",
        }}
      />
      <div
        className="absolute rounded-full animate-orb2"
        style={{
          width: 250, height: 250,
          background: "#7C3AED", opacity: 0.1,
          top: 320, left: -40,
          filter: "blur(55px)",
        }}
      />
      <div
        className="absolute rounded-full animate-orb3"
        style={{
          width: 190, height: 190,
          background: "#2563EB", opacity: 0.09,
          top: 820, right: 30,
          filter: "blur(48px)",
        }}
      />
    </div>
  );
}
