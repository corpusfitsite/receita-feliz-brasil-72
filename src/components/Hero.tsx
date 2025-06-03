
const Hero = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Receitas que
          <span className="text-orange-600 block">Aquecem o Coração</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Descubra sabores únicos e prepare pratos deliciosos com nossas receitas 
          cuidadosamente selecionadas para toda a família.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg">
            Ver Receitas
          </button>
          <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Receita do Dia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
