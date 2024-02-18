import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  
  transactionData = [
    {
      transaction_id: '143',
      description: 'Groceries',
      amount: 50.0,
      transaction_type:'inflow',
      transaction_date: '2024-02-01',
    },
    {
      transaction_id: '2432',
      description: 'Gas station',
      amount: 30.0,
      transaction_type:'inflow',
    transaction_date: '2024-02-02',
    },
    
    {
      transaction_id: '8789',
      description: 'Car payment',
      amount: -300.0,
      transaction_type:'outflow',
      transaction_date: '2024-02-08',
    },
    {
      transaction_id: '9789',
      description: 'Health insurance',
      amount: -150.0,
      transaction_type:'outflow',
      transaction_date: '2024-02-09',
    },
    {
      transaction_id: '1056',
      description: 'Phone bill',
      amount: -50.0,
      transaction_type:'outflow',
      transaction_date: '2024-02-10',
    },
    {
      transaction_id: '1156',
      description: 'Groceries',
      amount: 40.0,
      transaction_type:'inflow',
      transaction_date: '2024-02-11',
    },
  ];

}
