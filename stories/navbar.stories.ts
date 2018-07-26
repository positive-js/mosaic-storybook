import { storiesOf } from '@storybook/angular';
import { McNavbarModule, McIconModule } from '@ptsecurity/mosaic';


storiesOf('Navbar', module)
    .add('navbar', () => ({
        template: `
            <style>
                mc-navbar > nav {
                    margin-top: -8px;
                    margin-left: -8px;
                    margin-right: -8px;
                    min-width: 800px;
                }
                
                mc-navbar.small-navbar > .mc-navbar {
                    min-width: 300px;
                }
                
                [mc-dropdown] > [mc-icon^='mc-angle'] {
                    margin-left: 8px;
                }
                
                .logo {
                    margin-top: 5px;
                }
                
                /* we hope to have it implemented in dropdown component*/
                .dropdown-text {
                    font: normal 15px/20px Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif;
                    letter-spacing: 0.15px;
                }
            </style>
            <div>
                <mc-navbar>
                    <mc-navbar-container position="left">
                        <mc-navbar-item>
                            <i mc-icon="mc-hamburger_16"></i>
                        </mc-navbar-item>
                        <mc-navbar-brand>
                            <mc-navbar-logo>
                                <svg class="logo" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m0 32h32v-32h-32z" fill="#c00"/><path d="m11.7013126 2.13713398h3.4056699v5.22500971c.0083884 1.2815534 1.0494758 2.31984466 2.3304078 2.32543689v-1.89825242c-.2370486-.00528156-.4296699-.19231068-.432466-.42718447v-5.22500971h3.4050485v-1.89794175h-8.7086602zm-3.29065629-1.89806602h-5.95976699-.0167767c-1.28062136.00590291-2.3192233 1.04978641-2.32481553 2.33351456h1.89794174c.00590292-.23735922.19262136-.42407767.42687379-.43557281h5.97654369c.24295146 0 .44054369.19821359.44054369.44427184v.97646602c0 .23735923-.19759223.43867961-.44054369.43867961l-5.97654369.00248544c-1.28062136.01118447-2.3192233 1.04667961-2.32481553 2.33071845v3.35782524h1.89794174v-3.35782524c.00590292-.23207767.19262136-.42438835.42687379-.42718447h5.97654369c1.28932039 0 2.34190289-1.05227184 2.34190289-2.34469903v-.97646602c0-1.29242718-1.0525825-2.34221359-2.34190289-2.34221359" fill="#fff" transform="translate(5.592 10.889)"/></g></svg>
                            </mc-navbar-logo>
                            <mc-navbar-title>Brand</mc-navbar-title>
                        </mc-navbar-brand>
                        <mc-navbar-item class="mc-navbar-item-active">
                            <i mc-icon="mc-info_16"></i>
                            <mc-navbar-title>Left icon</mc-navbar-title>
                        </mc-navbar-item>
                        <mc-navbar-item>
                            <mc-navbar-title>No icon</mc-navbar-title>
                        </mc-navbar-item>
                        <mc-navbar-item class="mc-progress">
                            <mc-navbar-title>In-progress</mc-navbar-title>
                        </mc-navbar-item>
                        <mc-navbar-item class="mc-progress" disabled>
                            <mc-navbar-title>Disabled in-progress</mc-navbar-title>
                        </mc-navbar-item>
                        <mc-navbar-item disabled>
                            <mc-navbar-title>Right Icon</mc-navbar-title>
                            <i mc-icon="mc-search_16"></i>
                        </mc-navbar-item>
                        <mc-navbar-item>
                            <div mc-dropdown>
                                <span class="dropdown-text">mc-dropdown</span>
                                <i mc-icon="mc-angle-M_16"></i>
                            </div>
                        </mc-navbar-item>
            
                        <mc-navbar-item>
                            <i mc-icon="mc-gear_16"></i>
                        </mc-navbar-item>
                    </mc-navbar-container>
            
                    <mc-navbar-container position="right">
                        <mc-navbar-item [collapsedTitle]="'custom title'">
                            <mc-navbar-title>Right Icon</mc-navbar-title>
                            <i mc-icon="mc-search_16"></i>
                        </mc-navbar-item>
                        <mc-navbar-item class="cdk-focused">
                            <div mc-dropdown>
                                <span class="dropdown-text">focused</span>
                                <i mc-icon="mc-angle-M_16"></i>
                            </div>
                        </mc-navbar-item>
            
                        <mc-navbar-item>
                            <i mc-icon="mc-gear_16"></i>
                        </mc-navbar-item>
                    </mc-navbar-container>
                </mc-navbar>
            </div>
        `,
        props: {},
        moduleMetadata: {
            imports: [McNavbarModule, McIconModule]
        }
    }));
