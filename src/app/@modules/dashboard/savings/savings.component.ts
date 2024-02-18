import { Component } from '@angular/core';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent {


  savingsData = [
    {
      transactionId: 'TRX001',
      amount: 5000.00,
      date: '2023-01-10'
    },
    {
      transactionId: 'TRX002',
      amount: 5500.00,
      date: '2023-02-15'
    },
    {
      transactionId: 'TRX003',
      amount: 6000.00,
      date: '2023-03-20'
    },
    // Add more savings data as needed
  ];

}
