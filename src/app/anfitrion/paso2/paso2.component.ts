import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component implements OnInit {

    id!: any;

    constructor(private route: ActivatedRoute) { 
        this.id = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {

    }

}
