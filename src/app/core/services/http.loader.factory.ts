import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  const url = `http://localhost/mtf/mtf.php` +
              `?class=translation` +
              `&columns=${encodeURIComponent('label,translation')}` +
              `&mtf=Y` +
              `&iso_639_1=`;
  return new TranslateHttpLoader(http, url, '');
}
