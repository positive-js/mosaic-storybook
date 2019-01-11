import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { FixedSizeVirtualScrollStrategy, ScrollingModule, VIRTUAL_SCROLL_STRATEGY } from '@ptsecurity/cdk/scrolling';
import { DataSource, ICollectionViewer } from '@ptsecurity/cdk/collections';

import { withAnyInfo } from '../.storybook/addons/ng-info';
import * as markdown from './cdk-virtual-scroll.stories.md';


storiesOf('CDK|Virtual Scroll', module)
    .addDecorator(withAnyInfo)

    .addParameters({
        anyinfo: {
            markdown
        }
    })
    .add('Custom Strategy', () => ({
        moduleMetadata: {
            declarations: [ CdkVirtualScrollCustomStrategyComponent ],
            imports: [ ScrollingModule ]
        },
        template: `<cdk-vs-custom-strategy></cdk-vs-custom-strategy>`
    }))

    .addParameters({
        anyinfo: {
            markdown: ""
        }
    })
    .add('Data Source', () => ({
        moduleMetadata: {
            declarations: [ CdkVirtualScrollDataSourceComponent ],
            imports: [ ScrollingModule ]
        },
        template: `<cdk-vs-data-source></cdk-vs-data-source>`
    }));


export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(50, 250, 500);
    }
}

@Component({
    selector: 'cdk-vs-custom-strategy',
    styles: [`
        .example-viewport {
            height: 400px;
            width: 400px;
            border: 1px solid;
            margin: 8px;
        }

        .example-item {
            height: 50px;
            margin: 0 8px;
        }
    `],
    template: `
        <cdk-virtual-scroll-viewport class="example-viewport">
            <div *cdkVirtualFor="let item of items" class="example-item">{{item}}</div>
        </cdk-virtual-scroll-viewport>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy}]
})
export class CdkVirtualScrollCustomStrategyComponent {
    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}


export class MyDataSource extends DataSource<string | undefined> {
    private length = 100000;
    private pageSize = 100;
    private cachedData = Array.from<string>({length: this.length});
    private fetchedPages = new Set<number>();
    private dataStream = new BehaviorSubject<(string | undefined)[]>(this.cachedData);
    private subscription = new Subscription();

    connect(collectionViewer: ICollectionViewer): Observable<(string | undefined)[]> {
        this.subscription.add(collectionViewer.viewChange.subscribe((range) => {
            const startPage = this.getPageForIndex(range.start);
            const endPage = this.getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this.fetchPage(i);
            }
        }));

        return this.dataStream;
    }

    disconnect(): void {
        this.subscription.unsubscribe();
    }

    private getPageForIndex(index: number): number {
        return Math.floor(index / this.pageSize);
    }

    private fetchPage(page: number) {
        if (this.fetchedPages.has(page)) {
            return;
        }
        this.fetchedPages.add(page);

        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {
            this.cachedData.splice(page * this.pageSize, this.pageSize,
                ...Array.from({length: this.pageSize})
                    .map((_, i) => `Item #${page * this.pageSize + i}`));
            this.dataStream.next(this.cachedData);
        }, Math.random() * 1000 + 200);
    }
}


@Component({
    selector: 'cdk-vs-data-source',
    styles: [`
        .example-viewport {
            height: 400px;
            width: 400px;
            border: 1px solid;
            margin: 8px;
        }

        .example-item {
            height: 50px;
            margin: 0 8px;
        }
    `],
    template: `
        <cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
            <div *cdkVirtualFor="let item of ds" class="example-item">{{item || 'Loading...'}}</div>
        </cdk-virtual-scroll-viewport>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CdkVirtualScrollDataSourceComponent {
    ds = new MyDataSource();
}
