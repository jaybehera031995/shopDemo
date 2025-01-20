import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SortPopupComponent } from '../sort-popup/sort-popup.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  readonly panelOpenState = signal(false);

  products: any[] = [
    {
    "pk": 987,
    "name": "Damayanti",
    "points": 150,
    "display_img_url": "assets/jug.jpg",
    "quantity": 14,
    "valid_until": "2024-12-31T00:00:00",
    "low_quantity": 10,
    },{
      "pk": 987,
      "name": "Jayshankar",
      "points": 150,
      "display_img_url": "assets/tv.jpg",
      "quantity": 14,
      "valid_until": "2024-12-31T00:00:00",
      "low_quantity": 10,
      },{
        "pk": 987,
        "name": "parbati",
        "points": 150,
        "display_img_url": "assets/cycle.png",
        "quantity": 14,
        "valid_until": "2024-12-31T00:00:00",
        "low_quantity": 10,
        },{
          "pk": 987,
          "name": "Janardan",
          "points": 150,
          "display_img_url": "assets/scooter.jpg",
          "quantity": 14,
          "valid_until": "2024-12-31T00:00:00",
          "low_quantity": 10,
          },{
            "pk": 987,
            "name": "Harish",
            "points": 150,
            "display_img_url": "assets/sscooter.jpeg",
            "quantity": 14,
            "valid_until": "2024-12-31T00:00:00",
            "low_quantity": 10,
            },
            {
              "pk": 987,
              "name": "Sonu",
              "points": 150,
              "display_img_url": "assets/jug.jpg",
              "quantity": 14,
              "valid_until": "2024-12-31T00:00:00",
              "low_quantity": 10,
              },{
                "pk": 987,
                "name": "Mira",
                "points": 150,
                "display_img_url": "assets/tv.jpg",
                "quantity": 14,
                "valid_until": "2024-12-31T00:00:00",
                "low_quantity": 10,
                },{
                  "pk": 987,
                  "name": "Babu",
                  "points": 150,
                  "display_img_url": "assets/cycle.png",
                  "quantity": 14,
                  "valid_until": "2024-12-31T00:00:00",
                  "low_quantity": 10,
                  },{
                    "pk": 987,
                    "name": "Until",
                    "points": 150,
                    "display_img_url": "assets/scooter.jpg",
                    "quantity": 14,
                    "valid_until": "2024-12-31T00:00:00",
                    "low_quantity": 10,
                    },{
                      "pk": 987,
                      "name": "Leenu",
                      "points": 150,
                      "display_img_url": "assets/sscooter.jpeg",
                      "quantity": 14,
                      "valid_until": "2024-12-31T00:00:00",
                      "low_quantity": 10,
                      }];
  filters: any[] = [];
  category: any[] =["EVoucher", "Products", "Evergreen", "Fashion & Retail"]
  filter: any = '';
  openSort(){

  }

  constructor(private dialog: MatDialog) {}
  isPopupVisible = false;

  openSortDialog(result: any) {
  
      if (result === 'asc') {
        this.products.sort((a, b) => a.name.localeCompare(b.name));
      } else if (result === 'desc') {
        this.products.sort((a, b) => b.name.localeCompare(a.name));
      }
  }
  
  clearFilter(){
    this.filter = '';
    console.log(this.filter);
  }

  catchCategory(x: any){
    //this.filters.push(x);
    this.filter = x;
    console.log(this.filter);
  }

  resetAll(){
    
  }
  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  ortProducts(order: string) {
    this.products.sort((a, b) =>
      order === 'asc' ? a.points - b.points : b.points - a.points
    );
  }
}
