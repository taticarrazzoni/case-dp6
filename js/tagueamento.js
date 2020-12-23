// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

var clickButton = document.querySelector(".menu-lista-contato");

clickButton.addEventListener('click', menuContato, false);

function menuContato(e) {
    gtag('event', 'entre_em_contato', {
        'event_category': 'menu',
        'event_label': 'link_externo'
    });
    console.log('contato-menu');
}


var clickButton = document.querySelector(".menu-lista-download");

clickButton.addEventListener('click', menuDownload, false);

function menuDownload(e) {
    gtag('event', 'download_pdf', {
        'event_category': 'menu',
        'event_label': 'download_pdf'
    });
    console.log('download-menu');
}


jQuery(".card-montadoras").click(function () {
    var data_name = jQuery(this).attr("data-name");
    gtag('event', 'ver_mais', {
        'event_category': 'analise',
        'event_label': data_name
    });
});

jQuery(".contato ul li input").click(function () {
    var campo = jQuery(this).attr('id');
    document.getElementById(campo).addEventListener("change", function myFunction() {
        var x = document.getElementById(campo);
        x.value = x.value.toUpperCase();
        gtag('event', campo, {
            'event_category': 'contato',
            'event_label': 'preencheu'
        });
    });
});

jQuery(".card-montadoras").click(function () {
    var data_name = jQuery(this).attr("data-name");
    gtag('event', 'ver_mais', {
        'event_category': 'analise',
        'event_label': data_name
    });
});


function Envio() {
    gtag('event', 'enviado', {
        'event_category': 'contato',
        'event_label': 'enviado'
    });
    console.log('submit');
}
