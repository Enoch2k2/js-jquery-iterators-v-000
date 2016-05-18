function listIterate(){
  return $('li').map(function(index, item){
    return item.innerHTML;
  });
}

$(document).ready(function(){
  $('div').each(function(index, div){
  $(this).append("this is div number " + (index + 1));
  });
});
