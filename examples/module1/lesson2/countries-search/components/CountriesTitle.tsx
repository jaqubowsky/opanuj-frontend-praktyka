export const CountriesTitle = ({
  title = 'World Countries Explorer',
  description = 'Discover information about countries around the world',
}) => {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
        <p className="mt-2 text-blue-100 text-center">{description}</p>
      </div>
    </header>
  );
};
