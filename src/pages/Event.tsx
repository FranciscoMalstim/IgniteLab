import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import ImgUrl from "../../src/assets/code-mockup.png";
import { Video } from "../components/Video";
import { CaretCircleRight } from "phosphor-react";

export function Event() {

  const {slug} = useParams<{slug:string}>()

  return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-1">
          { slug 
            ? <Video lessonSlug={slug}/> 
            : <div className="flex-1 bg-blur bg-cover bg-no-repeat flex flex-col items-center">
                <div className="flex mt-6 items-center">
                  <div className=" mt-2 max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                      Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>     
                    </h1>
                    <div className="flex items-end">
                      <h1 className="text-[2.5rem] leading-tight">
                        Vamos <strong className="text-blue-500">começar</strong> ? <br/> Só Clicar em  <strong className="text-blue-500"> uma Aula ao lado</strong>  
                      </h1>
                      <CaretCircleRight size={32} className= "ml-3 mb-2" />
                    </div>
                  </div>
                </div>
                <img src={ImgUrl} className="mt-1" alt=""/>
                <div className="w-full flex-1">
                  <Footer />
                </div>
              </div>
          }
          <Sidebar/>
        </main>
      </div>
  )
}
