import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {SearchOpenLibraryAPIResponse} from './rxjs-examples.model';
import {HttpClient} from '@angular/common/http';
import {defer, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsExamplesService {

  constructor(private http: HttpClient) {
  }

  /**
   * "Search for"/Gets/Returns one or more book.
   * The titles of the books returned needs to fullfill the condition:
   * - titles contains the value of `key`
   *
   * @param key - the value used to search
   * @return an observable list of full titles the meat the above condition
   */
  searchByTitleBooksOpenLibrary(key: string) {
    return this.http.get<SearchOpenLibraryAPIResponse>('http://openlibrary.org/search.json?title=${key}').pipe(
      map(res => defer(() => {
        const length = res.docs.length;
        return length <= 100 ?
          of(res.docs.map(doc => doc.title)) : of(['Cannot display! List too large!']);
      }))
    );
  }
}
