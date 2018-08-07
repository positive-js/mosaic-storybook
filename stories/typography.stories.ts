import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';


storiesOf('Styles|Typography', module)
    .add('Display and Headers', () => ({
        template: `
            <style>
                small {
                    color: rgba(0, 0, 0, 0.3);
                }
                
                .text-block {
                    margin-bottom: 16px;
                }
            </style>
            
            <div class="text-block">
                <small>mc-display-3</small>
                <div class="mc-display-3">Display 3</div>
            </div>
            
            <div class="text-block">
                <small>mc-display-2</small>
                <div class="mc-display-2">Display 2</div>
            </div>
            
            <div class="text-block">
                <small>mc-display-1</small>
                <div class="mc-display-1">Display 1</div>
            </div>
        
            <br>
        
            <div class="text-block">
                <small>mc-headline</small>
                <div class="mc-headline">Headline</div>
            </div>
            <div class="text-block">
                <small>mc-title</small>
                <div class="mc-title">Title</div>
            </div>
            <div class="text-block">
                <small>mc-subheading</small>
                <div class="mc-subheading">Subheading</div>
            </div>
            
            <br>
        
            <div class="mc-body">Body</div>
        
            <br>
        
            <div class="mc-body_strong">Body strong</div>
            <div class="mc-body_caps">BODY CAPS</div>
            <div class="mc-body_mono">Body mono</div>
        
            <br>
        
            <div class="mc-caption">Caption</div>
            <div class="mc-caption_caps">CAPTION CAPS</div>
            <div class="mc-caption_mono">Caption mono</div>
        
            <br>
        
            <div class="mc-small-text">Small text</div>
            <div class="mc-extra-small-text">Extra Small text</div>
        `
    }));
