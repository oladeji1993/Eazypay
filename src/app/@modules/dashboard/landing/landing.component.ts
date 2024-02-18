import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { MessengerService } from 'src/app/@core/services/messenger.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private route: Router, private messenger: MessengerService) {}
  transactionHistory = [
    {
      date: '2024-02-17',
      description: 'Deposit',
      amount: 1000.0,
      type: 'credit',
    },
    {
      date: '2024-02-15',
      description: 'Withdrawal',
      amount: -500.0,
      type: 'debit',
    },
    {
      date: '2024-02-10',
      description: 'Payment',
      amount: -200.0,
      type: 'debit',
    },
    {
      date: '2024-02-05',
      description: 'Deposit',
      amount: 1500.0,
      type: 'credit',
    },
  ];

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.userData);
  }

  private userData = [
    { category: '2024-02-01', inflow: 20000.0 },
    { category: '2024-02-02', inflow: 50000.0 },
    { category: '2024-02-03', inflow: 150000.0 },
  ];
  private svg: any;
  private margin = 50;
  private width = 600 - this.margin * 2;
  private height = 300 - this.margin * 2;

  private createSvg(): void {
    this.svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(this.userData.map((d) => d.category))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, 200000]).range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(this.userData)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.category))
      .attr('y', (d: any) => y(d.inflow))
      .attr('width', x.bandwidth())
      .attr('height', (d: any) => this.height - y(d.inflow))
      .attr('fill', '#d04a35');
  }
  viewDetails(routePath: string) {
    if (routePath == '/dashboard/transaction') {
      this.route.navigate(['/dashboard/transaction']);
      this.messenger.emitValue.next('Transaction');
      localStorage.setItem('navPath', 'transaction');
    } else {
    }
  }
}
