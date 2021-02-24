///task1



$("a[href^= 'https:']").attr('target', '_blank')


//task2


$('h2.head').css("background-color", "green");

$('h2.head > span.inner').css("font-size", "35px");


// //task3


let divREf = $('h3').next('div');
let h3Ref = $('h3');


for(const h of h3Ref){
    h3Ref = $('h3');

    for(const div of divREf){
        divREf = $('h3').next('div')
        h.before(div)

    }

    // divREf = $(h).next('div')[0];
    // // console.log(h)
    // // console.log(divREf)
    // // console.log(Object.values(divREf))
    // if(divREf !== undefined || divREf !== null){
    //     h.before(divREf)
    // }
}



//task4




    const inputItems = $('form > input');

    let inputChecked = [];

    for(let i = 0; i < inputItems.length; i+=1){
        inputItems[i].addEventListener('change', (e)=>{
            $(e.currentTarget).attr("checked", "true")
        
                if(inputItems[i].checked === true){
                    inputChecked.push(inputItems[i])

                    if(inputChecked.length >= 3 ){
                        $(inputItems[i]).attr("disabled", "true")
                    }
                }  

            }
        )
            
    }

