import "./style.css";

function Bandeiras () {
    return (
              <div className="varal-container">
        <svg
          viewBox="0 0 100 30"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "97vw",
            height: "60px",
            zIndex: 1,
          }}
        >
          <path
            d="M 0 0 Q 50 30 100 0"
            stroke="brown"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div className="bandeira" style={{ backgroundColor: "red", left: "0%", top: "3px", transform: "rotate(18deg)" }}></div>
        <div className="bandeira" style={{ backgroundColor: "blue", left: "15%", top: "16px", transform: "rotate(11deg)" }}></div>
        <div className="bandeira" style={{ backgroundColor: "green", left: "30%", top: "24px", transform: "rotate(6deg)" }}></div>
        <div className="bandeira" style={{ backgroundColor: "yellow", left: "45%", top: "27px", transform: "rotate(1deg)" }}></div>
        <div className="bandeira" style={{ backgroundColor: "orange", left: "62%", top: "25px", transform: "rotate(-3deg)" }}></div>
        <div className="bandeira" style={{ backgroundColor: "purple", left: "78%", top: "18px", transform: "rotate(-7deg)" }}></div>
        <div className="bandeira" style={{ backgroundColor: "cyan", left: "91%", top: "4px", transform: "rotate(-17deg)" }}></div>
      </div>
    )
}

export default Bandeiras