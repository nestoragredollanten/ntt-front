import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-customer-consult',
  templateUrl: './customer-consult.component.html',
  styleUrl: './customer-consult.component.css'
})
export class CustomerConsultComponent {
  documentTypes: string[] = [
    'Cédula de ciudadanía',
    'Pasaporte'
  ];
  documentNumber: string = '';
  selectedDocumentType: string = '';
  formattedDocumentNumber: string = '';
  isValid: boolean = false;
  private readonly router: Router

  constructor(router: Router) {
    this.router = router;
  }

  // Método de búsqueda (ejemplo)
  search() {
    console.log('Searching for document number:', this.documentNumber);
    console.log('Searching for document type:', this.selectedDocumentType);

    // Navegar a CustomerSummaryComponent con los datos
    this.router.navigate(['/customer-summary'], {
      state: {
        documentType: this.selectedDocumentType,
        documentNumber: this.documentNumber
      },
    });
  }

  // Método de validación
  validate() {
    const numberRegex = /^[0-9]+$/;

    // Validación para asegurarse de que los dos campos estén completos y sean correctos
    this.isValid = this.documentNumber.length >= 8 && this.documentNumber.length <= 11
      && numberRegex.test(this.documentNumber)
      && this.selectedDocumentType.trim() !== '';

    if (this.isValid) {
      // Si es válido, formateamos el número
      this.formattedDocumentNumber = this.formatNumberWithSeparators(this.documentNumber);
      this.documentNumber = this.formattedDocumentNumber;  // Asignamos el valor con formato
    } else {
      this.formattedDocumentNumber = "";  // Limpiamos si es inválido
    }
  }

  // Función para dar formato al número con separadores de miles
  formatNumberWithSeparators(num: string): string {
    // Eliminamos cualquier formato previo (si el usuario estaba escribiendo)
    const cleanNumber = num.replace(/\D/g, '');

    // Si el número es válido, formateamos con separadores de miles
    if (cleanNumber.length > 0) {
      return formatNumber(Number(cleanNumber), 'es-CO', '1.0-0');
    }
    return '';
  }
}
