import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToolBarConfig } from 'src/app/interfaces/toolbar-config';
import { ToolbarConfigService } from 'src/app/services/toolbar-config.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  config: ToolBarConfig;

  constructor(
    private toolBarConfigService: ToolbarConfigService,
    public dialog: MatDialog
  ) {
    this.config = toolBarConfigService.getConfig();
  }

  sendButton(button: string): void {
    this.toolBarConfigService.clickButton(button);
    if (button === 'Login') {
      this.dialog.open(LoginDialogComponent)
      }
    }


}
