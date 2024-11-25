$.ajax({
    type: 'get',
    url: 'https://api.rootnet.in/covid19-in/stats/latest',
    success: function(response){
        // console.log(response.data.regional)

        for(var i=0; i<response.data.regional.length; i++){
            var tablerow = `<tr> <td> ${response.data.regional[i].loc} </td>  <td> ${response.data.regional[i].confirmedCasesIndian} </td>  <td> ${response.data.regional[i].discharged} </td> <td> ${response.data.regional[i].deaths} </td> </tr>`

            $(`#tbody`).append(tablerow)

        }
        $('#covidtable').DataTable()
    }, 
    error: function(error){
        console.log(error)
    }
})