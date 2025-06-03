
import RecipeCard from "./RecipeCard";

const recipes = [
  {
    id: 1,
    title: "Lasanha Clássica",
    description: "Uma deliciosa lasanha com molho de tomate caseiro e queijo derretido",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop",
    cookTime: "45 min",
    difficulty: "Médio",
    rating: 4.8
  },
  {
    id: 2,
    title: "Bolo de Chocolate",
    description: "Bolo fofinho de chocolate com cobertura cremosa",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    cookTime: "60 min",
    difficulty: "Fácil",
    rating: 4.9
  },
  {
    id: 3,
    title: "Salada Caesar",
    description: "Salada fresca com molho caesar tradicional e croutons crocantes",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    cookTime: "15 min",
    difficulty: "Fácil",
    rating: 4.6
  },
  {
    id: 4,
    title: "Pizza Margherita",
    description: "Pizza tradicional italiana com molho de tomate, mozzarella e manjericão",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    cookTime: "30 min",
    difficulty: "Médio",
    rating: 4.7
  },
  {
    id: 5,
    title: "Cookies de Aveia",
    description: "Cookies caseiros crocantes por fora e macios por dentro",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
    cookTime: "25 min",
    difficulty: "Fácil",
    rating: 4.5
  },
  {
    id: 6,
    title: "Sopa de Legumes",
    description: "Sopa nutritiva e reconfortante com legumes frescos da estação",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=300&fit=crop",
    cookTime: "40 min",
    difficulty: "Fácil",
    rating: 4.4
  }
];

const RecipeGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Receitas Populares</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de receitas mais amadas pela comunidade
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeGrid;
