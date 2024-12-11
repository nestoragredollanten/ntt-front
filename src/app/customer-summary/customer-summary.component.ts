import {Component} from '@angular/core';
import {Customer} from './Customer';
import {CustomerSummaryService} from './customer-summary.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrl: './customer-summary.component.css'
})
export class CustomerSummaryComponent {
  documentType: string = '';
  documentNumber: string = '';
  customer: Customer = {
    documentType: '',
    documentNumber: '',
    firstName: '',
    middleName: '',
    lastName: '',
    secondLastName: '',
    phone: '',
    address: '',
    cityOfResidence: '',
  };
  private readonly service: CustomerSummaryService;
  private readonly router: Router;

  constructor(service: CustomerSummaryService, router: Router) {
    this.router = router;
    this.service = service;
    console.log('customer' + this.documentType + ' ' + this.documentNumber)

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { documentType: string; documentNumber: string };
    console.log('State:', state);

    if (state) {
      this.documentType = state.documentType;
      this.documentNumber = state.documentNumber;
    } else {
      console.warn('No state data received. Please ensure navigation includes state.');
    }

    this.getCustomer()
  }

  getCustomer() {
    this.service.getCustomer('Cédula de ciudadanía' === this.documentType ? 'C' : 'P', this.documentNumber.replace(/\./g, '')).subscribe({
      next: (data) => {
        this.customer = data;
        console.log('Customer data:', this.customer);
      },
      error: (error) => {
        console.error('Error fetching customer data', error);
      },
      complete: () => {
        console.log('Complete');
      }
    });
  }

  goBack() {
    this.router.navigate(['']);
  }
}
