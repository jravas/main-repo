import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'lib-one',
  template: `
    <p>
      another change in main repo project one
    </p>
  `,
  styles: []
})
export class OneComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}
}
