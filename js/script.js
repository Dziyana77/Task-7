$('.btn').on('click',function(e){

    e.preventDefault();

    var input = $('#name').val();

    if(!input){
        alert('enter something');
    }

    $('#task').append(input);
  
});