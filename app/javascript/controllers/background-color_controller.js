// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import e from "turbolinks"

export default class extends Controller {
  // static targets = [ "output" ]

  connect() {
  }

  change(event){
    const main =  document.querySelector("main")
    const value = event.currentTarget.value
    switch(value){
      case "font-serif":
        main.classList.remove("font-mono","font-sans");
        main.classList.add("font-serif");
        break;
      case "font-mono":
        main.classList.remove("font-serif","font-sans");
        main.classList.add("font-mono");
        break;
      case "font-sans":
        main.classList.remove("font-mono","font-serif");
        main.classList.add("font-sans");
        break;
    }
      
  }
}

// if(event.currentTarget.value==="font-serif"){
//   document.querySelector("main").classList.add("font-serif") 
// }if(event.currentTarget.value==="font-mono"){
//   document.querySelector("main").classList.add("font-mono")
// }else{
//   document.querySelector("main").classList.add("font-sans")
// }