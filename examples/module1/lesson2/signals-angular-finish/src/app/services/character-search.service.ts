import { HttpClient } from '@angular/common/http';
import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map, of, switchMap } from 'rxjs';
import { Character } from '../types/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterSearchService {
  private charactersSource: Signal<Character[]> = signal([]);

  characters: Signal<Character[]> = signal([]);
  private nameField: WritableSignal<string> = signal('');
  private genderField: WritableSignal<string> = signal('');
  private sortOptionField: WritableSignal<string> = signal('');

  private apiBaseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {
    const name$ = toObservable(this.nameField);
    const gender$ = toObservable(this.genderField);

    this.charactersSource = toSignal(
      combineLatest([name$, gender$]).pipe(
        switchMap(([name, gender]) => {
          if (name !== '' || gender !== '') {
            return this.http
              .get<{
                results: Character[];
              }>(`${this.apiBaseUrl}?name=${name}&gender=${gender}`)
              .pipe(map((response) => response.results || []));
          } else {
            return of([]);
          }
        })
      ),
      { initialValue: [] }
    );

    this.characters = computed(() => {
      return this.sortCharacters(
        this.charactersSource(),
        this.sortOptionField()
      );
    });
  }

  get name(): string {
    return this.nameField();
  }

  get gender(): string {
    return this.genderField();
  }

  get sortOption(): string {
    return this.sortOptionField();
  }

  setName(name: string) {
    this.nameField.set(name);
  }

  setGender(gender: string) {
    this.genderField.set(gender);
  }

  setSortOption(sortOption: string) {
    this.sortOptionField.set(sortOption);
  }

  sortCharacters(characters: Character[], sortOption: string): Character[] {
    return [...characters].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'created') {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      }
      return 0;
    });
  }
}
