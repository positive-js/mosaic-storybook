### Virtual scrolling

The `<cdk-virtual-scroll-viewport>` displays large lists of elements performable by only
rendering the items that fit on-screen.

Loading hundreds of elements can be slow in any browser;
virtual scrolling enables a performance way to simulate all items being rendered by making the
height of the container element the same as the height of total number of elements to be rendered,
and then only rendering the items in view.

Virtual scrolling is different from strategies like infinite scroll where it renders a set amount of elements and
then when you hit the end renders the rest.

#### Creating items in the viewport
`*cdkVirtualFor` replaces `*ngFor` inside of a `<cdk-virtual-scroll-viewport>`, supporting the exact
same API as [`*ngFor`](https://angular.io/api/common/NgForOf).

```
<cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
    <div *cdkVirtualFor="let item of items" class="example-item">{{item}}</div>
</cdk-virtual-scroll-viewport>
```

`*cdkVirtualFor` makes the following context variables available to the template:

| Context variable | Description                                        |
|------------------|----------------------------------------------------|
| `index`          | The index of the item in the data source.          |
| `count`          | The total number of items in the data source.      |
| `first`          | Whether this is the first item in the data source. |
| `last`           | Whether this is the last item in the data source.  |
| `even`           | Whether the `index` is even.                       |
| `odd`            | Whether the `index` is odd.                        |
