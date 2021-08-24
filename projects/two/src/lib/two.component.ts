import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'lib-two',
  template: `
    <p>
      change in main repo project two
    </p>
  `,
  styles: []
})
export class TwoComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}
}
