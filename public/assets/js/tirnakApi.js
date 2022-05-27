// var tirnakApi = {
//   Init: () => {
//     tirnakApi.Events.Init();
//     tirnakApi.getApi();
//   },

//   getApi: () => {
//     const base_url = window.location.origin;

//     $.post(base_url + "/getApi", null, function (json) {
//       $("#nailContainer").html("");
//         // if(value.product_type=="eyeshadow")
//         // {
//         $.each(json, function (index, value) {
//           $("#nailContainer").append(`<div class="tırnak-resim">
//                 <div class="tırnak-baslik"> 
//                     <a href="../views/urunsitesi.html"   rel="noopener noreferrer">${value.name}</a>
//                 </div>
//                 <a href="../views/urunsitesi.html"   rel="noopener noreferrer">
//                     <img src="../assets/images/tırnak/pastel.png">
//                 </a>
//             </div>`);
//         });
//         // }
//     });
//   },

//   Events: {
//     Init: () => {},
//   },
// };





var tirnakApi = {

    Init:() => {
        tirnakApi.Events.Init();
        tirnakApi.getApi();
    },

    getApi:() => {
        const base_url = window.location.origin;

        $.post(base_url + "/getApi",null , function(json) {
            $('#nailContainer').html("");
            $.each(json, function( index, value ) {
                if(value.product_type=="nail_polish")
                {
                $('#nailContainer').append(`<div class="tırnak-resim">
                <div class="tırnak-baslik"> 
                    <a href="../views/urunsitesi.html"   rel="noopener noreferrer">${value.name}</a>
                </div>
                <a href="../views/urunsitesi.html"   rel="noopener noreferrer">
                    <img src="${value.image_link}">
                </a>
            </div>`);
        }
    });


    
        });
    },

    Events : {
        Init:() => {},
    }
}
