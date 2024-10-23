import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  primitiveVariable = 0;
  nonPrimitiveVariable = {
    text: 'hello'
  };
  childTextVal = 'child text from parent';
  nonPrimitivePassedFromParent = {
    numberVal: 0
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  updateValues(): void {
    this.primitiveVariable++;
    this.nonPrimitiveVariable.text = 'hello world';

    /** when primitive data input is changed , change is detected in onpush, & view gets updated with all new values
    / but if we comment following line out & update rest of the input values , changes are not detected */
    // this.childTextVal = 'child text updated!!';

    // updating service value, child with onpush will receive an updated data
    // this.dataService.setMyData('service data updated');

    // when changedetection set to onpush in child , it won't be rendering dom for this nonprimitive data updation 
    this.nonPrimitivePassedFromParent.numberVal = 1;

    // when changedetection set to onpush in child , it will render dom for this nonprimitive data updation, beacuse the reference of a variable has been changed
    // this.nonPrimitivePassedFromParent = {
    //   ...this.nonPrimitivePassedFromParent,
    //   numberVal: 1
    // }
  }
}
