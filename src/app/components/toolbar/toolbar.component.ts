import { Component } from '@angular/core';
import { ToolBarConfig } from 'src/app/interfaces/toolbar-config';
import { ToolbarConfigService } from 'src/app/services/toolbar-config.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  config: ToolBarConfig;

  constructor(
    private toolBarConfigService: ToolbarConfigService
  ) {
    this.config = toolBarConfigService.getConfig();
  }

  sendButton(button: string): void {
    this.toolBarConfigService.clickButton(button);
  }

}
