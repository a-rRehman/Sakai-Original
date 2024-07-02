import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

declare var tinymce: any;

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(
        private productService: ProductService,
        public layoutService: LayoutService
    ) {
        this.subscription = this.layoutService.configUpdate$
            .pipe(debounceTime(25))
            .subscribe((config) => {
                this.initChart();
            });
    }

    ngOnInit() {
        this.initChart();
        this.productService
            .getProductsSmall()
            .then((data) => (this.products = data));

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' },
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue(
            '--text-color-secondary'
        );
        const surfaceBorder =
            documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    tension: 0.4,
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: 0.4,
                },
            ],
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    initialValue = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Photography Website</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            header {
                background-color: #333;
                color: white;
                padding: 1em 0;
                text-align: center;
            }
            nav ul {
                list-style: none;
                padding: 0;
                text-align: center;
            }
            nav ul li {
                display: inline;
                margin: 0 1em;
            }
            nav ul li a {
                color: white;
                text-decoration: none;
            }
            .hero {
                background: url('https://via.placeholder.com/1200x600') no-repeat center center/cover;
                height: 600px;
                text-align: center;
                color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .hero h1 {
                font-size: 3em;
                margin: 0;
            }
            .section {
                padding: 4em 2em;
            }
            .gallery {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            .gallery img {
                max-width: 30%;
                margin-bottom: 1em;
            }
            footer {
                background-color: #333;
                color: white;
                text-align: center;
                padding: 1em 0;
                position: fixed;
                bottom: 0;
                width: 100%;
            }
        </style>
    </head>
    <body>

    <header>
        <h1>Photography</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <div class="hero" id="home">
        <h1>Capture the Moment</h1>
        <p>Beautiful photos from around the world</p>
    </div>

    <div class="section" id="gallery">
        <h2>Gallery</h2>
        <div class="gallery">
            <img src="https://via.placeholder.com/400x300" alt="Gallery Image 1">
            <img src="https://via.placeholder.com/400x300" alt="Gallery Image 2">
            <img src="https://via.placeholder.com/400x300" alt="Gallery Image 3">
            <img src="https://via.placeholder.com/400x300" alt="Gallery Image 4">
            <img src="https://via.placeholder.com/400x300" alt="Gallery Image 5">
            <img src="https://via.placeholder.com/400x300" alt="Gallery Image 6">
        </div>
    </div>

    <div class="section" id="about">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi vel consectetur euismod, nisl nunc tincidunt mauris, et volutpat odio turpis non leo. Nullam id eros vitae lacus laoreet facilisis. Proin id ligula eu mauris bibendum convallis nec nec ipsum.</p>
    </div>

    <div class="section" id="contact">
        <h2>Contact</h2>
        <p>If you would like to get in touch, please email us at <a href="mailto:info@photography.com">info@photography.com</a>.</p>
    </div>

    <footer>
        <p>&copy; 2024 Photography. All rights reserved.</p>
    </footer>

    </body>
    </html>
    `;

    editorConfig = {
        selector: 'textarea#default',
        width: 950,
        height: 450,
        plugins: [
            'advlist',
            'anchor',
            'autolink',
            'autosave',
            'bbcode',
            'charmap',
            'code',
            'codesample',
            'directionality',
            'emoticons',
            'fullpage',
            'fullscreen',
            'help',
            'hr',
            'image',
            'imagetools',
            'importcss',
            'insertdatetime',
            'legacyoutput',
            'link',
            'lists',
            'media',
            'nonbreaking',
            'noneditable',
            'pagebreak',
            'paste',
            'preview',
            'print',
            'quickbars',
            'save',
            'searchreplace',
            'spellchecker',
            'tabfocus',
            'table',
            'template',
            'textpattern',
            'toc',
            'visualblocks',
            'visualchars',
            'wordcount',
        ],
        toolbar:
            'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' +
            'bullist numlist outdent indent | link image | print preview media fullscreen |' +
            'forecolor backcolor emoticons | code',
        menu: {
            favs: {
                title: 'Menu',
                items: 'code visualaid | searchreplace | emoticons',
            },
        },
        menubar: 'favs file edit view insert format tools table',
        content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
        image_title: true,
        automatic_uploads: true,
        file_picker_types: 'image',
        file_picker_callback: function (cb: any, value: any, meta: any) {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            input.addEventListener('change', (e) => {
                const file = (e.target as HTMLInputElement).files[0];

                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    const id = 'blobid' + new Date().getTime();
                    const blobCache =
                        tinymce.activeEditor.editorUpload.blobCache;
                    const base64 = (reader.result as string).split(',')[1];
                    const blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);

                    /* call the callback and populate the Title field with the file name */
                    cb(blobInfo.blobUri(), { title: file.name });
                });
                reader.readAsDataURL(file);
            });

            input.click();
        },
        setup: (editor) => {
            editor.on('init', () => {
                editor.setContent(this.initialValue);
            });
        },
    };
}
