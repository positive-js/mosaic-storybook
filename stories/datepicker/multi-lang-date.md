

```js
import { DateAdapter } from '@ptsecurity/cdk/datetime';


export class MultiLangDateComponent implements OnInit {

    constructor(private dateAdapter: DateAdapter<any>) {}

    ngOnInit() {
        this.useLanguage('en');
    }

    useLanguage(language: string): void {
        this.dateAdapter.setLocale(language);
    }
}
```
