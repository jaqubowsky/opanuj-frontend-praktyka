type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

type NameInputProps = {
  name: string;
  setName: (name: string) => void;
};

type GenderInputProps = {
  gender: string;
  setGender: (gender: string) => void;
};

type SortInputProps = {
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function NameInput({ name, setName }: NameInputProps) {
  return (
    <label className="flex flex-col">
      Name
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
}

function GenderInput({ gender, setGender }: GenderInputProps) {
  return (
    <label className="flex flex-col">
      Gender
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Any Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </label>
  );
}

function SortInput({ sortOption, setSortOption }: SortInputProps) {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value="name">Name</option>
        <option value="created">Created Date</option>
      </select>
    </label>
  );
}

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <NameInput name={name} setName={setName} />
      <GenderInput gender={gender} setGender={setGender} />
      <SortInput sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
