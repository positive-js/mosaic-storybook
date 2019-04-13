### Installation

Note that Mosaic Icons is optional package and it should be installed manually.

##### NPM
```shell
npm install @ptsecurity/mosaic-icons --save
```
##### Yarn
```shell
yarn add @ptsecurity/mosaic-icons
```

Then you should add icons styles

```css
@import "~@ptsecurity/mosaic-icons/dist/styles/mc-icons.css";
```

And finally import McIconModule to your component module.

```ts
import { McIconModule } from '@ptsecurity/mosaic';

@NgModule({
    imports: [
        McIconModule,
        ...
    ],
})
export class AppModule {}
```

### Variants
There are two icon usage variants:

```html
<i mc-icon="mc-gear_16"></i>
```
In this case you can provide **[color]** attribute.
It can have following values: *primary*, *second*, *error*.


or simply

```html
<i class="mc mc-gear_16"></i>
```
