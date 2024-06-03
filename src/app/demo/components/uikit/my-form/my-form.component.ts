import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-my-form',
    templateUrl: './my-form.component.html',
    styleUrl: './my-form.component.scss',
})
export class MyFormComponent {
    deliveryOrderForm: FormGroup;

    clients = [
        { name: 'Jackson Lewis', code: 'JL' },
        { name: 'Other Client', code: 'OC' },
    ];

    users = [
        { name: 'User 1', code: 'U1' },
        { name: 'User 2', code: 'U2' },
    ];

    addressBook = [
        { name: 'Address 1', code: 'Aa1' },
        { name: 'Address 2', code: 'Aa2' },
    ];

    addressBook1 = [
        { name: 'Address A', code: 'AA1' },
        { name: 'Address B', code: 'AA2' },
    ];

    serviceLevels = [
        { name: 'Standard', code: 'SL1' },
        { name: 'Express', code: 'SL2' },
        { name: 'Overnight', code: 'SL3' },
    ];

    serviceAreas = [
        { name: 'Area 1', code: 'A1' },
        { name: 'Area 2', code: 'A2' },
    ];

    constructor(private fb: FormBuilder) {
        this.deliveryOrderForm = this.fb.group({
            client: [null, Validators.required],
            user: [null, Validators.required],
            firstName: ['', Validators.required],
            firstName1: ['', Validators.required],
            firstName2: ['', Validators.required],
            lastName: ['', Validators.required],
            lastName1: ['', Validators.required],
            lastName2: ['', Validators.required],
            addressBook: ['', Validators.required],
            addressBook1: ['', Validators.required],
            bookEntry: ['', Validators.required],
            bookEntry1: ['', Validators.required],
            companyName: ['', Validators.required],
            companyName1: ['', Validators.required],
            city: ['', Validators.required],
            city1: ['', Validators.required],
            state: ['', Validators.required],
            state1: ['', Validators.required],
            zip: ['', Validators.required],
            zip1: ['', Validators.required],
            phone: ['', Validators.required],
            phone1: ['', Validators.required],
            extension: ['', Validators.required],
            extension1: ['', Validators.required],
            email: ['', Validators.required],
            email1: ['', Validators.required],
            serviceLevel: [null, Validators.required],
            quantity: [1, Validators.required],
            desiredDeliveryDate: ['', Validators.required],
            billingReference: [''],
            description: [''],
            specialInstructions: [''],
            calculatedMiles: [''],
            calculatedServiceArea: [''],
            estimatedCharges: [''],
            total: [{ value: '$0.00', disabled: true }],
            finalMiles: [''],
            overrideServiceArea: [''],
            overrideCalculations: [false],
            manualChargeEntry: [false],
            overrideCharges: [''],
            leaveWithoutSignature: [false],
            returnService: [false],
            residenceOrMedicalCenter: [false],
            processNotification: [false],
            deliveryOver25Lbs: [false],
            notaryService: [false],
            nightWeekendHoliday: [false],
            deliveryNotification: [false],
        });
    }

    onSubmit() {
        if (this.deliveryOrderForm.valid) {
            console.log(this.deliveryOrderForm.value);
        }
    }
}
