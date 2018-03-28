$(document).ready(function(){
    $('form button').click(function(){
        var firstName = $('#first_name').val();
        var lastName = $('#last_name').val();
        var description = $('#contact_description').val();
        console.log(firstName, lastName, description);
        $('#rightCards').append('<div class="contact_card borderBox inBlock verTop textCenter"><h4>'+firstName+' '+lastName+'</h4><p class="clickForDescription">Click for description!</p><p class="contactDescription" style="display: none;">'+description+'</p>');
        return false;
    })
    $(document).on('click','.contact_card', function() {
        $(this).children('h4, .clickForDescription').slideUp();
        $(this).children('.contactDescription').slideDown();
    })
})