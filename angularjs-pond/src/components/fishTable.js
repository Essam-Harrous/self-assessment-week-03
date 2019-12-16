angular.module('fish-pond')
.component('fishTable', {
  controller: 'fishCtrl',
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});