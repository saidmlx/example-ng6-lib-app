import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sml-example-ng6-lib',
  template: `
    <p>
      example-ng6-lib works!
    </p>
    <sml-foo></sml-foo>
  `,
  styles: []
})
export class ExampleNg6LibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
