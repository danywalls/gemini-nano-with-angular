import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GeminiNanoService} from "./services/gemini-nano.service";
import {
  AIPromptModule, PromptOutput,
  PromptRequestEvent
} from "@progress/kendo-angular-conversational-ui";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AIPromptModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public view: number = 0;
  public promptOutputs: Array<PromptOutput> = [];

  public suggestions: Array<string> = [
    'Tell me a short joke',
    'Tell me about dominican republic'
  ]
    private nanoService = inject(GeminiNanoService)


  public onPromptRequest(ev: PromptRequestEvent): void {
    this.nanoService.generateText(ev.prompt).then((v) => {
      const output: PromptOutput = {
        id: Math.random(),
        prompt: ev.prompt,
        output: v,
      }
      this.promptOutputs.unshift(output);
      this.view = 1;
    }

  )
  }

}
