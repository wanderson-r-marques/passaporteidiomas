var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;
    matches = [];

    substrRegex = new RegExp(q, 'i');

    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};
setAutoComplite([]);

$("#estado1").change(function () {
    $("#estado").val($("#estado1").val());
    $("#estado").trigger("change");    
    $("#estado").trigger("change");
});

$("#estado").change(function () {
    var cities = [];
    $("#cidade option").each(function (index) {        
        cities.push($(this).val());
    });
    $('#regiao').val(getRegion());
    $('#city').attr('id', 'city1');
    setAutoComplite(cities);
});

$( "#the-basics" ).click(function(){
  if(!$( "#estado" ).val()) {
    $( "#estado" ).focus();
  }
});

function setAutoComplite(cities) {
  $('#the-basics').html('<input id="city" class="typeahead padrao" type="text" name="cidade" placeholder="Cidade" required>');
  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'cities',
    source: substringMatcher(cities)
  });
}

var centro_oeste = ['Goiás', 'Mato Grosso', 'Mato Grosso do Sul', 'Distrito Federal'];
var nordeste     = ['Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia'];
var norte        = ['Roraima', 'Acre', 'Amapá', 'Amazonas', 'Pará', 'Rondônia', 'Tocantins'];
var sudeste      = ['Espírito Santo', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro'];
var sul          = ['Santa Catarina', 'Paraná', 'Rio Grande do Sul'];

function getRegion() {
  var estado = $('#estado :selected').text();
  if (strInArr(centro_oeste, estado)) {
    return 'Centro-Oeste'
  }
  else if (strInArr(nordeste, estado)) {
    return 'Nordeste'
  }
  else if (strInArr(norte, estado)) {
    return 'Norte'
  }
  else if (strInArr(sudeste, estado)) {
    return 'Sudeste'
  }
  else{
    return 'Sul'
  }

}

function strInArr(arr, str) {
  var equal = false;
  arr.forEach(function(state) {
    if (state == str) {
      equal = true;
    }
  });
  return equal;
}

window.onDomReady(function() {
  new dgCidadesEstados( 
    document.getElementById('estado'), 
    document.getElementById('cidade'), 
    true
  );
});

//$("#phone").inputmask({ 
//  mask: ['(99) 9999-9999', '(99) 99999-9999'], 
//  keepStatic: true,
//  autoUnmask: true
//});
