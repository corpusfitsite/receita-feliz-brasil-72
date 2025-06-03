
import { ChefHat, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-orange-400" />
              <h3 className="text-2xl font-bold">DelíciasKitchen</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Compartilhando receitas deliciosas e momentos especiais ao redor da mesa. 
              Cozinhar é um ato de amor que une famílias e cria memórias.
            </p>
            <div className="flex items-center space-x-1 text-gray-300">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>para todos os amantes da culinária</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Categorias</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Pratos Principais</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobremesas</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Aperitivos</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Bebidas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 DelíciasKitchen. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
