import { Component } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
})
export class InvestmentComponent {
  investmentData = [
    {
      company: 'Aladin Plc',
      investmentId: 'INV001',
      amount: 1000.0,
      date: '2023-01-15',
    },
    {
      company: 'slodan corporation',
      investmentId: 'INV002',
      amount: 1500.0,
      date: '2023-02-25',
    },
    {
      company: 'XYZ Corporation',
      investmentId: 'INV003',
      amount: 2000.0,
      date: '2023-04-10',
    },
    // Add more investment data as needed
  ];
}
