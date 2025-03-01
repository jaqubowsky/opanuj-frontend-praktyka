export const CountriesError = ({
  title = 'Error loading countries',
  error = 'Something went wrong!',
}) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
      <p className="font-medium">{title}</p>
      <p className="text-sm">{error}</p>
    </div>
  );
};
