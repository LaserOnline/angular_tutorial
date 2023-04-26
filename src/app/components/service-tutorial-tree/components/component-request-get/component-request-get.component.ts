import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../data/data.api';
@Component({
  selector: 'app-component-request-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-request-get.component.html',
  styleUrls: ['./component-request-get.component.scss'],
})
export class ComponentRequestGetComponent implements OnInit {
  product: Product[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<{ Message: Product[] }>(
        'http://localhost/apache/PHP-Api-Restful/lib/get/get.php'
      )
      .subscribe((response) => {
        this.product = response.Message;
        console.log(`This Response =>`, response);
        console.log(`This Response =>`, this.product);
      });
  }
}
