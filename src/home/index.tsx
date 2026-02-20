import { useState } from "react";
import imagesData from "../data/img.json";

import { Hero } from "./hero";
import { X, Menu, Heart, ShoppingCart, Search } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
interface ImageItem {
  id: number;
  file: string;
  name: string;
  category: string;
}

export function Home() {
  const [open, setOpen] = useState(false);
  const navLinksOne = [
    { href: "#home", label: "Home" },
    { href: "#collection", label: "Colecao" },
    { href: "#sobre", label: "Sobre" },
  ];

  const navLinksTwo = [
    { href: "#search", label: <Search /> },
    { href: "#save", label: <Heart /> },
    { href: "#cart", label: <ShoppingCart /> },
  ];
  const allLinks = [...navLinksOne, ...navLinksTwo];

  return (
    <div className="min-h-screen flex justify-center selection:bg-fuchsia-500 ">
      <div className="w-full md:max-w-[45%] flex flex-col md:shadow-[0_10px_40px_rgba(0,0,0,0.90)]">
        <header className="mt-3 md:sticky top-0 z-50 w-full shadow-[0_10px_40px_rgba(0,0,0,0.90)] border-b border-white/10">
          <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
            <div className="flex items-center gap-10">
              <div>
                <h1 className="text-white text-xl font-semibold tracking-wide">
                  <a href="#">Fake Emotion</a>
                </h1>
                <span className="text-white/60 text-md tracking-[0.3em]">
                  CLOTHING
                </span>
              </div>

              <nav className="hidden md:flex gap-6 text-white/80 items-center">
                {navLinksOne.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="hover:text-purple-500/90 transition"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            <nav className="hidden md:flex gap-6 text-white/80 items-center">
              {navLinksTwo.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-purple-500/90 transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5 text-white" />
            </button>
          </div>
          {open && (
            <div className="md:hidden ">
              <div
                className="fixed inset-0 bg-black/60"
                onClick={() => setOpen(false)}
              />

              <div className="fixed right-0 top-0 h-full w-80  border-l border-white/10 p-6 flex flex-col">
                <div className="flex justify-end">
                  <button
                    className="p-2 rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5 text-white" />
                  </button>
                </div>
                <div className="flex flex-col gap-4  text-white shadow-[0_10px_40px_rgba(0,0,0,0.90)] p-9 text-xl">
                  {allLinks.map((l) => (
                    <a key={l.href} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </header>
        <main className="bg-[radial-gradient(circle,rgba(0,0,0,0)_40%,rgba(0,0,0,0.7)_100%)]">
          <Hero />
          <h2
            className="
  relative
  text-3xl md:text-4xl
  text-white
  font-semibold
  text-center
  my-10
  before:content-['']
  before:absolute
  before:top-1/2
  before:left-0
  before:w-1/3
  before:h-1.5
  before:bg-linear-to-r
  before:from-transparent
  before:via-purple-600
  before:to-transparent
  before:-translate-y-1/2
  after:content-['']
  after:absolute
  after:top-1/2
  after:right-0
  after:w-1/3
  after:h-1.5
  after:bg-linear-to-l
  after:from-transparent
  after:via-purple-600
  after:to-transparent
  after:-translate-y-1/2
"
          >
            Destaques
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
            {imagesData.images.map((item: ImageItem) => (
              <div
                key={item.id}
                className="relative w-[90] rounded-2xl overflow-hidden
                 border border-pink-500/40
                 bg-white/5 backdrop-blur-md
                 shadow-[0_0_40px_rgba(236,72,153,0.3)]
                 hover:scale-105 transition duration-500 "
              >
                <img
                  src={`/img/${item.file}`}
                  alt={item.name}
                  className="w-full h-100 object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 w-full p-6 text-center">
                  <h2 className="text-white text-xl font-semibold">
                    {item.name}
                  </h2>

                  <button
                    className="mt-4 px-6 py-2 rounded-lg cursor-pointer
                           bg-linear-to-r from-fuchsia-600 to-pink-500 
                           text-white shadow-lg"
                  >
                    VER
                  </button>
                </div>
              </div>
            ))}
          </div>
          <section className="relative w-full h-250flex items-center justify-center px-6 overflow-hidden p-10">
            <div className="absolute inset-0 "></div>

            <div className="relative z-10 max-w-4xl w-full text-white ">
              <h2 className="text-4xl font-semibold mb-6 relative">
                Sobre nós
                <span className="absolute left-0 -bottom-2 w-24 h-0.5 bg-linear-to-r from-pink-500 to-purple-500 rounded-full"></span>
              </h2>

              <h3 className="text-2xl font-medium text-white/90 mb-6">
                Sombras, sentimentos reais
              </h3>

              <p className="text-white/70 leading-relaxed mb-10 text-xl">
                Inspirada pela arte do BTS, a Fake Emotion nasceu para aqueles
                que buscam expressar sentimentos profundos através da moda. Cada
                peça reflete a dualidade entre a dor e a beleza, extraindo a
                essência da estética artística e emocional de "Fake Love".
                Explore nossas coleções exclusivas e descubra uma moda que fala
                diretamente ao coração.
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/RuanCarlosDeJesus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl
               bg-gray-900 hover:bg-black
               text-white font-medium
               transition duration-300 shadow-lg"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/ruan-carlos-de-jesus-8ba175272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl
               bg-[#0A66C2] hover:bg-[#084d91]
               text-white font-medium
               transition duration-300 shadow-lg"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
           <footer className="flex justify-center items-center w-full bg-linear-to-t from-black/80 via-black/30 to-transparent">Desenvolvido por @ruan__cr</footer>
        </main>
       
      </div>
    </div>
  );
}

export default Home;
