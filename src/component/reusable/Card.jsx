export default function Card({ label, image, text, type = "default" }) {
  const cardHijau = type === "hijau";

  const cardBg = cardHijau
    ? "bg-gradient-to-b from-[#003835] to-[#007471]"
    : "bg-gradient-to-b from-[#ffffff] to-[#c1e1de]";

  const labelBg = cardHijau
    ? "bg-gradient-to-b from-[#ffffff] to-[#c1e1de]"
    : "bg-gradient-to-r from-[#004c48] to-[#007471]";

  const teksLabel = cardHijau ? "text-[#007471]" : "text-white";

  const bengkokanLabel = cardHijau ? "#d5ebe8fc" : "#007471";

  return (
    <div className={`h-[450px] ${cardBg} rounded-lg shadow-sm py-5 px-4`}>
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <div className={`Label w-11/12 inline-flex justify-center items-center ${labelBg} ${teksLabel} font-semibold px-1 py-1 text-[15px] relative rounded-l-lg`}>
          {label}
          <div
            className="absolute right-[-20px] top-0 h-0 w-0 border-b-[31px]  border-l-[20px] border-b-transparent rounded-r-xl"
            style={{ borderLeftColor: bengkokanLabel}}>
          </div>
        </div>
        <div className="gambar w-full overflow-hidden flex justify-center items-center">
          {image}
        </div>
        <div className={`teks w-full font-semibold flex justify-center items-center text-sm h-2/5 text-center ${
          cardHijau ? "text-white" : "text-[#007471]"
        }`}>
          {text}
        </div>

      </div>
    </div>
  );
}
