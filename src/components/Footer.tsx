import { LogoFooter } from "./LogoFooter";

export default function Footer() {
  return (
    <footer className="w-[1036] py-5 px-10 flex items-center justify-between bg-gray-700 border-t border-gray-600">
      <div className="flex justify-around items-center">
        <LogoFooter />
        <span className="ml-8 text-gray-200">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <span className="text-gray-200">Políticas de privacidade</span>
    </footer>
  )
}
