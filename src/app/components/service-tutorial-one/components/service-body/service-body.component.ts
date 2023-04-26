import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product } from 'src/app/components/service-tutorial-tree/data/data.api';
@Component({
  selector: 'app-service-body',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './service-body.component.html',
  styleUrls: ['./service-body.component.scss'],
})
export class ServiceBodyComponent implements OnInit {
  result: any;
  product: Product[] = [];
  constructor(private http: HttpClient) {}
  async ngOnInit() {
    // * วิธีเก่า
    // const result = await firstValueFrom(
    //   this.http.get('http://localhost/apache/PHP-Api-Restful/lib/get/get.php')
    // );
    // * วิธีใหม่
    const response = await firstValueFrom(
      this.http.get<{ Message: Product[] }>(
        'http://localhost/apache/PHP-Api-Restful/lib/get/get.php'
      )
    );
    this.product = response.Message;
    this.result = response; // เก็บค่า response ลงในตัวแปร result
    console.log('result -->', this.result);
    console.log('product -->', this.product);
  }
}
