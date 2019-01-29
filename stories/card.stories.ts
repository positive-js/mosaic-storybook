import { storiesOf } from '@storybook/angular';
import { boolean, text } from '@storybook/addon-knobs';

import { withAnyInfo } from '../.storybook/addons/ng-info';
import { ThemePalette } from '@ptsecurity/mosaic/core';

import * as markdown from './card.stories.md';
import { McCardModule } from "@ptsecurity/mosaic";


storiesOf('Layout|Card', module)
    .addDecorator(withAnyInfo)

    .addParameters({
        anyinfo: {
            markdown
        }
    })
    .add('Cards', () => ({
        template: `
            <style>
            .mc-card {
                margin-right: 1rem;
                margin-bottom: 0.5rem;
                padding: 0.3rem;
                width: 180px;
                display: block;
            }
            </style>
            <div class="layout-row layout-wrap block">
                <mc-card class="mc-card_info"
                    [selected]="selected"
                    [readonly]="readonly">
                        <div class="mc-title">Info</div>
                        <div class="mc-body"><span class="mc-caption_mono">mc-card_info</span></div>
                </mc-card>
                <mc-card class="mc-card_warning"
                    [selected]="selected"
                    [readonly]="readonly">
                        <div class="mc-title">Warning</div>
                        <div class="mc-body"><span class="mc-caption_mono">mc-card_warning</span></div>
                </mc-card>
                <mc-card class="mc-card_success"
                    [selected]="selected"
                    [readonly]="readonly">
                        <div class="mc-title">Success</div>
                        <div class="mc-body"><span class="mc-caption_mono">mc-card_success</span></div>
                </mc-card>
                <mc-card class="mc-card_error"
                    [selected]="selected"
                    [readonly]="readonly">
                        <div class="mc-title">Error</div>
                        <div class="mc-body"><span class="mc-caption_mono">mc-card_error</span></div>
                </mc-card>
                <mc-card class="mc-card_white"
                    [selected]="selected"
                    [readonly]="readonly">
                        <div class="mc-title">White</div>
                        <div class="mc-body"><span class="mc-caption_mono">mc-card_white</span></div>
                </mc-card>
            </div>
        `,
        props: {
            themePalette: ThemePalette,
            selected: boolean('selected', false),
            readonly: boolean('readonly', false),
        },
        moduleMetadata: {
            imports: [McCardModule]
        }
    }));
