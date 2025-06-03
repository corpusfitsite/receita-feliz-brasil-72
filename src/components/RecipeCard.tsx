
import { Clock, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  difficulty: string;
  rating: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-orange-600">
          {recipe.difficulty}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h4>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{recipe.cookTime}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">{recipe.rating}</span>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
          Ver Receita
        </button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
