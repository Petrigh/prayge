import { Component, Input } from '@angular/core';
import { God } from '../../../assets/models/god';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  styleUrl: './god.component.css'
})
export class GodComponent {
  @Input() god!: God;
  @Input() newFace!: string;
}
