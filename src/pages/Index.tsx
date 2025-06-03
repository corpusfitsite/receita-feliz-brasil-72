
import Header from "../components/Header";
import Hero from "../components/Hero";
import RecipeGrid from "../components/RecipeGrid";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      <Hero />
      <RecipeGrid />
      <Footer />
    </div>
  );
};

export default Index;
