import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import Kawany from "@/images/eu.jpeg";
import Claudia from "@/images/claudia.jpeg";
import Nycole from "@/images/nycole.jpeg";
import Lais from "@/images/lais.jpeg";
import Lilian from "@/images/lilian.jpeg";
import Leo from "@/images/leo.jpeg";
import Geovania from "@/images/geovania.jpeg";
import Post from "@/components/PostComponent";
import FotoNycole from "@/images/post4.jpeg";
import FotoKawany from "@/images/post.jpeg";
import FotoClaudia from "@/images/post1.jpeg";
import FotoLais from "@/images/post2.jpeg";
import FotoLilian from "@/images/post3.jpeg";
import Perfil from "@/images/eu.jpeg";
import Vinicius from "@/images/sugestao1.jpeg";
import Alinny from "@/images/sugestao2.jpeg";
import Helena from "@/images/sugestao3.jpeg";
import Joy from "@/images/sugestao4.jpeg";
import Taennie from "@/images/sugestao5.jpeg";

const listaUsuarios = [
  { nome: "Kawany", foto: Kawany },
  { nome: "Claudia", foto: Claudia },
  { nome: "Nycole", foto: Nycole },
  { nome: "Lais", foto: Lais },
  { nome: "Lilian", foto: Lilian },
  { nome: "Leo", foto: Leo },
  { nome: "Geovania", foto: Geovania },
];

const listaDePosts = [
  {
    nome: "Kawany",
    foto: Kawany,
    elemento: "Faap",
    texto: "With my P.O",
    descricao: "Obrigada por ser persistente e dedicado.",
    fotoPublicacao: FotoKawany,
    comentarios: 5,
    visualizacoes: 200,
    curtidas: 40,
  },
  {
    nome: "Claudia",
    foto: Claudia,
    elemento: "Parque Ibirapuera",
    texto: "Date com as amigas",
    descricao: "Até que enfim um piquenique",
    fotoPublicacao: FotoClaudia,
    comentarios: 10,
    visualizacoes: 210,
    curtidas: 80,
  },
  {
    nome: "Nycole",
    foto: Nycole,
    elemento: "Oracle",
    texto: "Visitamos a Oracle",
    descricao: "Que vista meus amores",
    fotoPublicacao: FotoNycole,
    comentarios: 13,
    visualizacoes: 215,
    curtidas: 91,
  },
  {
    nome: "Lais",
    foto: Lais,
    elemento: "Parque Ibirapuera",
    texto: "Feliz!",
    descricao: "Com as lindas",
    fotoPublicacao: FotoLais,
    comentarios: 20,
    visualizacoes: 230,
    curtidas: 92,
  },
  {
    nome: "Lilian",
    foto: Lilian,
    elemento: "Parque Ibirapuera",
    texto: "Proanas",
    descricao: "Que dia lindo",
    fotoPublicacao: FotoLilian,
    comentarios: 20,
    visualizacoes: 300,
    curtidas: 89,
  },
];

const opcoes = [
  "Sobre",
  "Ajuda",
  "Imprensa",
  "API",
  "Carreiras",
  "Privacidade",
  "Termos",
  "Localizações",
  "Idioma",
  "Meta Verified",
];

const sugestoes = [
  { nome: "Alinny", foto: Alinny },
  { nome: "Taennie", foto: Taennie },
  { nome: "Helena", foto: Helena},
  { nome: "Vinicius", foto: Vinicius },
  { nome: "Joy", foto: Joy },
];

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="grid place-content-center flex-1 p-12 gap-6">
          <div className="flex justify-center gap-6">
            {listaUsuarios.map((usuario) => {
              return (
                <div className="grid justify-items-center rounded-full hover:cursor-pointer">
                  <div className="border-2 border-pink-500 border-spacing-5 rounded-full">
                    <Image
                      src={usuario.foto.src}
                      width={60}
                      height={60}
                      className="rounded-full bg-transparent transition hover:scale-110"
                      alt=""
                    />
                  </div>
                  <p className="text-fuchsia-800 font-bold transition hover:scale-110 hover:text-orange-500 uppercase">
                    {usuario.nome}
                  </p>
                </div>
              );
            })}
          </div>

          {listaDePosts.map((publicacao, index) => {
            return <Post key={index} {...publicacao} />;
          })}
        </div>

        <div className="flex-initial px-6 flex flex-col gap-4 h-screen sticky right-0 top-0">
          <div className="flex gap-2 items-center mt-12">
            <Image
              src={Perfil}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-bold uppercase hover:cursor-pointer text-gray-700 ml-auto transition hover:scale-110 hover:font-bold hover:text-pink-500">
                kaah_frandeol
              </p>
              <p className="text-xs font-bold text-gray-700 ml-auto uppercase">Kawany Oliveira</p>
            </div>
            <button className="text-blue-500 ml-auto text-xs transition hover:scale-110 hover:font-bold uppercase">
              Mudar
            </button>
          </div>
          <div>
            <p className="text-fuchsia-800 text-xl margin-10px font-bold">Sugestões para você</p>
            <div className="flex flex-col gap-4">
              {sugestoes.map((sugestao, index) => {
                return (
                  <div className="flex gap-2 items-center margin-20px">
                    <Image
                      src={sugestao.foto.src}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-bold hover:cursor-pointer text-gray-700 transition hover:scale-110 hover:font-bold hover:text-pink-500">
                        {sugestao.nome}
                      </p>
                    </div>

                    <button className="text-blue-500 ml-auto text-xs transition hover:scale-110 hover:font-bold uppercase">
                      Seguir
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <ul className="grid grid-cols-2 mb-6">
            {opcoes.map((opcao, index) => {
              return (
                <li
                  key={index}
                  className="hover:cursor-pointer hover:underline before:content-['\00B7'] before:mx-1 text-gray-500 text-sm"
                >
                  {opcao}
                </li>
              );
            })}
          </ul>
          <p className="text-gray-500 text-xs">
            © 2023 INSTAGRAM FROM KAWANY F. D' OLIVEIRA
          </p>
        </div>
      </div>
    </>
  );
}
