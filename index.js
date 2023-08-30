let dados = []

function inputTable() {
    if(Array.isArray(data)) {
        
        $("#tabledata tbody".html(""))

        data.forEach(function (item) {
            //template string
            $("tabledata tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Name}</td>
                <td>${item.LastName}</td>
                <td>${item.CollegeEducation}</td>
            </tr>`)  
        })
    }
}

$(function () {
    //executa ao carregar da tela -> no load da tela
    data = JSON.parse(localStorage.getItem("_data_"))

    if(data) {  
        inputTable()
    }

})


