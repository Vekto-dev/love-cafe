export function CrochetBorder({
  position = "top",
  color = "#FDA4AF",
}: {
  position?: "top" | "bottom"
  color?: string
}) {
  const isBottom = position === "bottom"
  return (
    <div
      aria-hidden
      className={`absolute left-0 right-0 ${isBottom ? "bottom-0" : "top-0"} overflow-hidden`}
      style={{ height: 24 }}
    >
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ transform: isBottom ? "scaleY(-1)" : undefined }}
      >
        {/* Scalloped chain row — outer wave */}
        <path
          d="M0,12 Q25,0 50,12 Q75,24 100,12 Q125,0 150,12 Q175,24 200,12 Q225,0 250,12 Q275,24 300,12 Q325,0 350,12 Q375,24 400,12 Q425,0 450,12 Q475,24 500,12 Q525,0 550,12 Q575,24 600,12 Q625,0 650,12 Q675,24 700,12 Q725,0 750,12 Q775,24 800,12 Q825,0 850,12 Q875,24 900,12 Q925,0 950,12 Q975,24 1000,12 Q1025,0 1050,12 Q1075,24 1100,12 Q1125,0 1150,12 Q1175,24 1200,12"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
        />
        {/* Inner wave — gives the double-thread crochet look */}
        <path
          d="M0,16 Q25,4 50,16 Q75,28 100,16 Q125,4 150,16 Q175,28 200,16 Q225,4 250,16 Q275,28 300,16 Q325,4 350,16 Q375,28 400,16 Q425,4 450,16 Q475,28 500,16 Q525,4 550,16 Q575,28 600,16 Q625,4 650,16 Q675,28 700,16 Q725,4 750,16 Q775,28 800,16 Q825,4 850,16 Q875,28 900,16 Q925,4 950,16 Q975,28 1000,16 Q1025,4 1050,16 Q1075,28 1100,16 Q1125,4 1150,16 Q1175,28 1200,16"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
        {/* Dots at each peak — crochet stitch nodes */}
        {Array.from({ length: 25 }, (_, i) => i * 50).map((x) => (
          <circle key={x} cx={x} cy={12} r={2.5} fill={color} />
        ))}
      </svg>
    </div>
  )
}
