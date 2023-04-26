import { HttpClient } from '@angular/common/http';
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHttpBook]',
  standalone: true,
})
export class HttpBookDirective {
  constructor(private http: HttpClient) {}
  @Output() appHttpBook = new EventEmitter();
  @HostListener('input', ['$event']) loadBook(event: any) {
    console.log(event);
    const inputTextElement: HTMLInputElement = event.target;
    this.http
      .get<any>(
        `https://www.anapioficeandfire.com/api/books?name=` + inputTextElement
      )
      .subscribe((response) => {
        this.appHttpBook.emit(response);
      });
  }
}
