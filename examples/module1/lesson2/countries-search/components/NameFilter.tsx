type NameFilterProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const NameFilter = ({ name, setName }: NameFilterProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        id="country-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search by country's name..."
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default NameFilter;
