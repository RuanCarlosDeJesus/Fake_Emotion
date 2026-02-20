import Img_Jersey from "../../img/backgroundBoy.png";

export function Hero() {
  return (
    <section className="relative w-full min-h-125 md:h-150 flex items-center overflow-hidden">
      

      <img
        src={Img_Jersey}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-right"
      />

      <div className="absolute inset-0 bg-black/40 md:bg-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-md text-white ">

          <span className="block text-base md:text-xl text-gray-300 mb-2 italic">
            Nova Coleção
          </span>

          <h1 className="
            text-4xl sm:text-4xl md:text-5xl
            font-semibold italic m-3
            bg-linear-to-r from-pink-300 via-pink-400 to-purple-400
            bg-clip-text text-transparent
            drop-shadow-[0_0_8px_rgba(255,182,193,0.6)]
          ">
            Fake Emotion
          </h1>

          <p className="text-sm md:text-base text-gray-300 mb-5">
            Moda premium inspirada pelos sentimentos intensos e profundos do universo Fake Love.
          </p>

          <button className="
            px-5 md:px-6 py-2 md:py-3
            rounded-full text-white text-sm md:text-base
            bg-linear-to-r from-pink-500 to-purple-600
            hover:scale-105
            transition-all duration-300
            cursor-pointer
          ">
            Comprar Agora
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;