import type { ReactElement } from 'react';
import type { Character } from '../types/Character';

type CharacterListProps = {
  characters: Character[];
  renderFunc: (character: Character) => ReactElement;
};

export function CharacterList({ characters, renderFunc }: CharacterListProps) {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character) => renderFunc(character))}
    </ol>
  );
}
