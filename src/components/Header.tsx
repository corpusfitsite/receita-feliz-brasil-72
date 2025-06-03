
import { ChefHat, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-800">DelíciasKitchen</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Receitas</a>
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Categorias</a>
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Sobre</a>
            <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">Contato</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Buscar receitas..." 
                className="pl-10 w-64 border-orange-200 focus:border-orange-400"
              />
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Adicionar Receita
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
