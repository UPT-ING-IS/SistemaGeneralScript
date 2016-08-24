function tabla() {
    $(document).ready(
          function () {
              $('#example').DataTable();
          });
}

$(document).ready(function () {
    var table = $('#example').DataTable();

    $('#example tbody').on('click', 'tr', function () {
        var hfValue = document.getElementById('IDValorSeleccionado');
        hfValue.value = table.row(this).index();
   
       
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            
        }
    });

    //$('#button').click(function () {
     
    //    var texto = table.$('tr.selected').ready();
    //    table.$('tr.selected').removeClass('selected');
    //    alert(texto);
    //});
  
   
});


