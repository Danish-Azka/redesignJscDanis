export default function Card({ label, image, text, type = "default" }) {
  const cardHijau = type === "hijau";

  const cardBg = cardHijau
    ? "bg-gradient-to-b from-[#003835] to-[#007471]"
    : "bg-gradient-to-b from-[#ffffff] to-[#c1e1de]";

  const labelBg = cardHijau
    ? "bg-gradient-to-b from-[#ffffff] to-[#c1e1de]"
    : "bg-gradient-to-r from-[#004c48] to-[#007471]";

  const teksLabel = cardHijau ? "text-[#007471]" : "text-white";


  return (
    <div className={`h-[450px] ${cardBg} rounded-lg shadow-sm py-5 px-4`}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className={`Label w-full inline-flex justify-center items-center ${labelBg} ${teksLabel} font-semibold px-1 py-1 text-[17px] relative rounded-md lg:mb-3 mb-3`}>
          {label}
      
        </div>
        <div className="gambar w-full lg:mb-3 mb-3">
          {image}
        </div>
        <div className={`teks w-full font-semibold  text-sm h-2/5 text-center ${
          cardHijau ? "text-white" : "text-[#007471]"
        }`}>
          {text}
        </div>

      </div>
    </div>
  );
}
