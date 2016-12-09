$("button") .click(function() {
  var $this =$(this);
  console.log($this);
  $this.toggleClass ('button');
  if ($this.hasClass('button')) {
    $this.text('ADDED TO CART');
  } else {
    $this.text('BUY NOW!')
  }
})
$(function() {
  $("#tabs").tabs({active:0});
  console.log(tabs);
});
