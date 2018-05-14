window.onload=function() {

    var select = document.getElementById('months');
    select.addEventListener('change', createCalendar);
    var pcpmtext = document.querySelector('h1');

    function createCalendar() {
        var choice = select.value;

         switch (choice) {
           case '1':
             pcpmtext.textContent = 'This is january month';
             break;
           case '2':
             pcpmtext.textContent = 'This is faubruary month';
             break;
           case '3':
             pcpmtext.textContent = 'This is march month';
             break;
           case '4':
             pcpmtext.textContent = 'This is april month';
             break;
           case '5':
             pcpmtext.textContent = 'This is may month';
             break;
           default:
             pcpmtext.textContent = '';
         }
    }

}
