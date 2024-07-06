import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class GeminiNanoService {

  #system_prompt = 'answer in plain text without markdown style'

 async generateText(question: string): Promise<string> {
   try {
     const textSession = await window.ai.createTextSession();
      const prompt_question = `${question} ${this.#system_prompt}`;
     return await textSession.prompt(prompt_question);
   }
   catch (err){
     return 'Ups! please use chrome canary and enable IA features'
   }

  }
}
