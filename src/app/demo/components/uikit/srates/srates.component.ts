import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    selected?: boolean;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}

interface SelectItem<T = any> {
    label?: string;
    value: T;
    styleClass?: string;
    icon?: string;
    title?: string;
    disabled?: boolean;
}

@Component({
    selector: 'app-srates',
    templateUrl: './srates.component.html',
    styleUrl: './srates.component.scss',
})
export class SratesComponent implements OnInit {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                selected: true,
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                selected: true,
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Blue Band',
                description: 'Product Description',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                selected: true,
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Blue T-Shirt',
                description: 'Product Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                selected: false,
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Bracelet',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                selected: false,
            },
        ];
    }
    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }
    onRowEditInit(product: Product) {
        this.clonedProducts[product.id as string] = { ...product };
    }
    onRowEditSave(product: Product) {
        if (product.price > 0) {
            delete this.clonedProducts[product.id as string];
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Product is updated',
            });
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Invalid Price',
            });
        }
    }
    onRowEditCancel(product: Product, index: number) {
        this.products[index] = this.clonedProducts[product.id as string];
        delete this.clonedProducts[product.id as string];
    }

    getSeverity(status: string): string {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'unknown'; // or any other appropriate default value
        }
    }

    products!: Product[];

    statuses!: SelectItem[];

    clonedProducts: { [s: string]: Product } = {};

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.getProductsMini().then((data) => {
            this.products = data;
        });

        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' },
        ];
    }
}
