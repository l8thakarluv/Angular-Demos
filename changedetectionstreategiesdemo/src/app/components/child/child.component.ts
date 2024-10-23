import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() primitiveValFromParent!: string;
  @Input() nonPrimitiveValFromParent!: {[key: string]: string | number};
  primitiveVariableOfChild = 0;
  nonPrimitiveVariableOfChild = {
    text: 'child text'
  };

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  updateValue(): void {
    this.primitiveVariableOfChild++;
    this.nonPrimitiveVariableOfChild.text = 'new child text';
  }
}
