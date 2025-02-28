import { useState } from 'react';
import { CharacterList } from '../components/CharacterList';
import { CharacterWithImage } from '../components/CharacterWithImage';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharactersSearch } from '../hooks/useCharactersSearch';
import { sortCharacters } from '../utils/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');

  const characters = useCharactersSearch({ name, gender });
  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka postaci Rick and Morty" />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList
        characters={sortedCharacters}
        renderFunc={(character) => <CharacterWithImage {...character} />}
      />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
