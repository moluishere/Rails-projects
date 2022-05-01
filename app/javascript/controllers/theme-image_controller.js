import { Controller } from "stimulus"

export default class extends Controller {
  // static targets = [ "output" ]

  connect() {
  }

  update(){
    const x = new FileReader;
    document.forms[0].elements[0].onchange=function(){
      x.readAsDataURL(this.files[0]);
    }
    x.onloadend=function(){
      document.images[0].src=this.result;
    }
  }
}