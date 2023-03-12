import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Script, SCRIPTS } from 'src/app/db/scripts';

@Component({
  selector: 'app-script-detail',
  templateUrl: './script-detail.component.html',
  styleUrls: ['./script-detail.component.scss'],
})
export class ScriptDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  protected script$!: Observable<Script>;

  ngOnInit(): void {
    this.script$ = this.route.paramMap.pipe(
      map((params) => params.get('scriptId')),
      distinctUntilChanged(),
      switchMap((scriptId) => {
        const script = SCRIPTS.find((script) => script.id === scriptId);
        if (!script) {
          throw new Error('script not found');
        }
        return of(script);
      })
    );
  }
}
