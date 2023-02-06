import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  @Input() product: IProduct

  details = false
};
