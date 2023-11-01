import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "output" ]
  static values = {
    greet: String
  }

  greet(event) {
    this.outputTarget.value =
      `${this.greetValue}, ${event.params.name}!`;
  }
}
