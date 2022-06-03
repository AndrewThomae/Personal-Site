import { Component, OnInit } from '@angular/core';
import { Link } from '../../model/link';
import { OUTS } from '../../../data';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  outs = OUTS;

  constructor() {
   }

  ngOnInit(): void {
  }

}
