Mosaic buttons are available using native `<button>` or `<a>` elements. 

### Variants
There are two button variants, each applied as an attribute:  
+ basic buttons without icons (`mc-button`)
+ icon buttons (`mc-icon-button`)

#### Basic buttons

Basic `mc-button` buttons are rectangular buttons containing text only.
```
<button mc-button>Save</button>
```
`<Example>`

#### Icon buttons
Icon buttons consist of an icon and can contain text.
To create an icon button, add the `<i mc-icon="icon_name"></i>` element within `<button c-icon-button>` where `"icon_name"` is the name of a [Mosaic icon](https://github.com/positive-js/mosaic-icons). For example:

```
<button mc-icon-button>
        <i mc-icon="mc-close-S_16"></i>
    </button>
```
`<Example>`   

Add any text before or after the `<i>` element to place a button label to the right or to the left of the icon.

```
<button mc-icon-button>
        <i mc-icon="mc-play_16"></i>
        Click me
    </button>
```
`<Example>`

### Colors

Mosaic provides three button colors, applied using the `color` property with possible values `primary`, `second`, and `error`. (про темы добавить)

| Example          |  Property value  | Description |
|--------------------|-------------|---------|
| [Save] | `primary` | Primary action buttons indicate the main action of the window (save a setting, launch a process). A window or a dialog box usually contains no more than one primary button.  |
|  [Cancel] | `second` | Default color. Applied if `color` is not specified. Indicate a secondary action (if there are several buttons on a window) or the cancellation of an action. **Cancel** is usually a secondary action button.|
|  [Delete]    | `error` | Error action buttons indicate a potentially dangerous action. Can be used while deleting an important system object.

### Progress indication
If processing an action takes more than 1-2 seconds, the progress indication ("loading") can be used. This shows that the system takes action, and the user won't wonder whether the button is working or not.
To enable the button progress indication, use `class="mc-progress"` which can be combined with other properties.   
`<Example>`


### States
Buttons are available in multiple states using the `class` property.

| Value          | Description | Example |
|--------------------|-------------|---------|
| `normal`        | Default state, the button is not clicked or hovered over |
| `mc-hover`   | State on hover |
| `cdk-focused`        | State on focus |


### Disabled buttons

You can use the native `disabled` attribute to make a button look unclickable.   
`<Example>`

### Capitalization

The Mosaic styles *do not* automatically capitalize text in buttons. Select the capitalization style appropriate to your application.

### Installation

Import `McButtonModule` and `McIconModule` to your component module.
```
import { McButtonModule } from '...';
import { McIconModule } from '...';

@NgModule({

    imports: [
        McButtonModule,
        McIconModule
    ],
})
export class McButtonModule {}
```
