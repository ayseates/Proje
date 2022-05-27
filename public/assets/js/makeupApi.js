var makeupApi = {

    Init:() => {
        makeupApi.Events.Init();
        makeupApi.getApi();
    },

    getApi:() => {
        const base_url = window.location.origin;

        $.post(base_url + "/getApi",null , function(json) {
            $('#makeupContainer').html("");
            $.each(json, function( index, value ) {
                // if(value.product_type=="eyeshadow")
                // {
                $('#makeupContainer').append(`<div class="makyaj-resim">
                <div class="makyaj-baslik"> 
                    <a href="../views/urunsitesi.html"   rel="noopener noreferrer">${value.name}</a>
                </div>
                <a href="../views/urunsitesi.html"   rel="noopener noreferrer">
                    <img src="${value.image_link}">
                </a>
            </div>`);
        // }
    });


    
        });
    },

    Events : {
        Init:() => {},
    }
}