import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-radar-chart',
  templateUrl: './custom-radar-chart.component.html',
  styleUrls: ['./custom-radar-chart.component.css']
})
export class CustomRadarChartComponent implements OnInit {

  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  // tslint:disable-next-line:no-inferrable-types
  public radarChartType: string = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
