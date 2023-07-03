"use client";

import Image from "next/image";

import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { LuClapperboard } from "react-icons/lu";
import { PiMessengerLogoBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import Perfil from "@/images/eu.jpeg";

export default function SideBar() {
  const listas = [
    { nome: "Home", icon: GoHomeFill },
    { nome: "Search", icon: FiSearch },
    { nome: "Explorar", icon: ImCompass2 },
    { nome: "Reels", icon: LuClapperboard },
    { nome: "Mensagem", icon: PiMessengerLogoBold },
    { nome: "Notificação", icon: AiOutlineHeart },
    { nome: "Criar", icon: AiOutlinePlusSquare },
    { nome: "Perfil", foto: CgProfile },
    { nome: "Menu", icon: HiOutlineMenu },
  ];
  return (
    <nav className="border-r flex flex-col h-screen py-2 px-3 pb-5 sticky left-0 top-0">
      <div className="mb-4">
        <BsInstagram
          className="fill-fuchsia-800 align-items-center transition-all hover:cursor-pointer hover:scale-110 hover:fill-pink-500"
          size={90}
        />
      </div>
      <uul className="flex flex-col h-full gap-6">
        {listas.map((lista, index) => {
          return (
            <button
              className={`flex hover:font-bold hover:cursor-pointer gap-2 items-center text-gray-800 transition hover:scale-110 hover:text-orange-500 pr-8 ${
                index === listas.length - 1 && "mt-auto"
              }`}
              key={index}
            >
              {lista.icon && <lista.icon size={26} />}
              {lista.foto && (
                <Image
                  className="rounded-full"
                  src={Perfil}
                  width={26}
                  height={26}
                />
              )}
              <p>{lista.nome}</p>
            </button>
          );
        })}
      </uul>
    </nav>
  );
}
