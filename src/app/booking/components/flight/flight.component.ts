import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { TicketData } from '../../constants/ticket-data';
import {
  selectTicketsFrom,
  selectTicketsTo,
} from '../../../store/tickets.selectors';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent {
  public ticketsTo$ = this.store.select(selectTicketsTo);
  public ticketsFrom$ = this.store.select(selectTicketsFrom);

  public to: TicketData[] = [
    {
      date: new Date('2023-02-27'),
      money: '',
      durationTime: '',
      seats: 0,
      flightTime: '',
      arrivalTime: '',
    },
    {
      date: new Date('2023-02-28'),
      money: '',
      durationTime: '',
      seats: 0,
      flightTime: '',
      arrivalTime: '',
    },

    {
      date: new Date('2023-03-01'),
      money: '146.70',
      durationTime: '2h 30m',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-02'),
      money: '110.61',
      durationTime: '30m',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-03'),
      money: '80.11',
      durationTime: '3h 30m',
      seats: 50,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-04'),
      money: '146.70',
      durationTime: '2h',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-05'),
      money: '146.70',
      durationTime: '3h 30m',
      seats: 30,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
  ];

  public from: TicketData[] = [
    {
      date: new Date('2023-03-16'),
      money: '',
      durationTime: '',
      seats: 0,
      flightTime: '',
      arrivalTime: '',
    },
    {
      date: new Date('2023-03-17'),
      money: '',
      durationTime: '',
      seats: 0,
      flightTime: '',
      arrivalTime: '',
    },

    {
      date: new Date('2023-03-18'),
      money: '116.70',
      durationTime: '2h 30m',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-19'),
      money: '80.61',
      durationTime: '30m',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-20'),
      money: '80.11',
      durationTime: '3h 30m',
      seats: 50,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-21'),
      money: '144.70',
      durationTime: '2h',
      seats: 100,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
    {
      date: new Date('2023-03-22'),
      money: '146.70',
      durationTime: '3h 30m',
      seats: 30,
      flightTime: '8:40',
      arrivalTime: '12:00',
    },
  ];

  public svgFrom = 'assets/images/svg/airplanemode_right.svg';
  public svgTo = 'assets/images/svg/airplanemode_left.svg';
  public svgTimeTo = 'assets/images/svg/Icon_air_right.svg';
  public svgTimeFrom = 'assets/images/svg/Icon_air_left.svg';

  constructor(private location: Location, private store: Store) {}
  public locationBack(): void {
    this.location.back();
  }
}
