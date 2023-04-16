import { Injectable } from '@angular/core';
import { ToolBarConfig } from '../interfaces/toolbar-config';
import { TOOLBAR_CONFIG_BUTTONS, TOOLBAR_CONFIG_ICONS, TOOLBAR_CONFIG_IMAGE, TOOLBAR_CONFIG_SPAN } from '../data/toolbar-config';
import { LoginDialogComponent } from '../components/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
/* 
  Service to configurate the toolbar.
  The config is defined with the interface ToolBarConfigInt.
  The function set...() add the element that is nedded.
  The data to change is in data file.
*/
export class ToolbarConfigService {

    config: ToolBarConfig;

    constructor(public dialog: MatDialog) {
        this.config =  this.setConfig();
    }

    /* 
      Set config adding value or using a method
    */
    private setConfig() {
        let config: ToolBarConfig = {
            image: TOOLBAR_CONFIG_IMAGE,
            span: TOOLBAR_CONFIG_SPAN,
            buttons: this.setButtons(),
            icons: this.setIcons()
        };
        return config;
    }

    /* 
        Set buttons config, is possible to add
        more buttons
    */
    private setButtons(): string[] {
        return TOOLBAR_CONFIG_BUTTONS;
    }

    /* 
        Set icons config, is possible to add
        more icons
    */
    private setIcons(): string[] {
        return TOOLBAR_CONFIG_ICONS;
    }

    /* 
        Public function to get the config an assign
        to the property
    */
    getConfig(): ToolBarConfig {
        return this.config;
    }

    /* 
        Function to add the functionality of buttons
    */
    clickButton(button: string): void {
        switch (button.toLowerCase()) {
            case 'login':
                this.dialog.open(LoginDialogComponent, {
                    width: '40%',
                })
                break;
        
            default:
                break;
        }
    }
}
