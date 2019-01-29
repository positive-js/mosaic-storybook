Mosaic cards are controls to display statuses/states/messages.

#### Basic usage

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. They have no margin by default, so use spacing utilities as needed.
```
<mc-card>Text</mc-card>
```
`<Example>`


##### Properties
There are four properties to interact with control:

| Property           | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `[readonly]`        |  When set to 'true' control is switched to not interactive mode. It can't be focused or selected |
| `[selected]`        |  It switch control to the selected visual state. |

##### Events
There is one output event:

| Event           | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `(selectedChange)`        |  It happens when user click on control and and [readonly] set to 'false'|

##### Content
It is possible to add additional content on the left and on the right side from main content by using attributes 'content-left' and 'content-right'.


### Colors

Mosaic provides 5 card colors, applied using the `class` property with possible values:

* `mc-card_info`
* `mc-card_warning`
* `mc-card_success`
* `mc-card_error`
* `mc-card_white`

```
<mc-card class="mc-card_info">Text</mc-card>
```
`<Example>`
