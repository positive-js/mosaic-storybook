import { storiesOf } from '@storybook/angular';
import { boolean } from '@storybook/addon-knobs';

import {
    McAutocompleteModule,
    McInputModule,
    McButtonModule,
    McFormFieldModule,
    McIconModule
} from '@ptsecurity/mosaic';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {startWith, map} from "rxjs/operators";


const options = [
    'Abkhazia', 'Australia', 'Austria', 'Azerbaijan', 'Aland Islands', 'Albania', 'Algeria','Anguilla',
    'Angola', 'Andorra', 'Argentina', 'Armenia', 'Aruba', 'Afghanistan', 'Bahamas', 'Bangladesh', 'Barbados',
    'Bahrain', 'Belarus', 'Belize', 'Belgium', 'Benin', 'Bulgaria', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana',
    'Brazil', 'Brunei Darussalam', 'Burundi', 'Bhutan', 'Vatican City', 'United Kingdom', 'Hungary', 'Venezuela',
    'Timor', 'Viet Nam', 'Gabon', 'Haiti', 'Gambia', 'Ghana', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau',
    'Germany', 'Gibraltar', 'Hong Kong', 'Honduras', 'Grenada', 'Greenland', 'Greece', 'Georgia', 'Guam', 'Denmark',
    'Dominica', 'Dominican Republic', 'Egypt', 'Zambia', 'Western Sahara', 'Zimbabwe', 'Israel', 'India', 'Indonesia',
    'Jordan', 'Iraq', 'Iran', 'Ireland', 'Iceland', 'Spain', 'Italy', 'Yemen', 'Kazakhstan', 'Cambodia', 'Cameroon',
    'Canada', 'Qatar', 'Kenya', 'Cyprus', 'Kyrgyzstan', 'Kiribati', 'China', 'Colombia', 'Korea, D.P.R.', 'Korea',
    'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Kuwait', 'Lao P.D.R.', 'Latvia', 'Lesotho', 'Liberia', 'Lebanon',
    'Libyan Arab Jamahiriya', 'Lithuania', 'Liechtenstein', 'Luxembourg', 'Mauritius', 'Mauritania', 'Madagascar',
    'Macedonia', 'Malawi', 'Malaysia', 'Mali', 'Maldives', 'Malta', 'Morocco', 'Mexico', 'Mozambique', 'Moldova',
    'Monaco', 'Mongolia', 'Namibia', 'Nepal', 'Niger', 'Nigeria', 'Netherlands', 'Nicaragua', 'New Zealand',
    'Norway', 'United Arab Emirates', 'Oman', 'Pakistan', 'Panama', 'Paraguay', 'Peru', 'Poland', 'Portugal','Russia',
    'Romania', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Singapore', 'Syrian Arab Republic', 'Slovakia',
    'Slovenia', 'Somalia', 'Sudan', 'USA', 'Tajikistan', 'Thailand', 'Tanzania', 'Togo', 'Tunisia', 'Turkmenistan',
    'Turkey', 'Uganda', 'Uzbekistan', 'Ukraine', 'Uruguay', 'Micronesia', 'Fiji', 'Philippines', 'Finland', 'France',
    'Croatia', 'Chad', 'Montenegro', 'Czech Republic', 'Chile', 'Switzerland', 'Sweden', 'Sri Lanka', 'Ecuador',
    'Eritrea', 'Estonia', 'Ethiopia', 'South Africa', 'Jamaica', 'Japan'
];

const filter = (value) => {
    const filterValue = value.toLowerCase();

    return options.filter((option) => option.toLowerCase().includes(filterValue));
};

const getProps = () => {
    const res: any = {
        required: boolean('required', false)
    };

    res.formControl = new FormControl('', res.required ? Validators.required : null);
    res.filteredOptions = res.formControl.valueChanges
        .pipe(
            startWith(''),
            map((value) => filter(value))
        );

    return res;
};

storiesOf('Form Controls|Autocomplete', module)
    .add('Autocomplete', () => ({
        template: `
            <div>
                <label>Enter countries to see autocomplete</label>
                <mc-form-field>
                    <input type="text" mcInput [mcAutocomplete]="auto" [formControl]="formControl"/>
                    <mc-autocomplete #auto="mcAutocomplete">
                        <mc-option *ngFor="let option of filteredOptions | async" [value]="option">{{ option }}</mc-option>
                    </mc-autocomplete>
                </mc-form-field>
            </div>

        `,
        props: getProps(),
        moduleMetadata: {
            imports: [
                McAutocompleteModule,
                McInputModule,
                McButtonModule,
                McFormFieldModule,
                McIconModule,
                ReactiveFormsModule
            ]
        }
    }));
