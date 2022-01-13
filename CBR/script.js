


const $ = document.querySelector.bind(document);


const leftList = document.querySelectorAll('.left');
const rightList =document.querySelectorAll('.msgCon')

const inputContent = $('#msg_send')
const btnSend = $('#reply');
const chatArea = $('#msg');
const first = $('.first');

const genderGroup = $('.gender-group');
const ageGroup = $('.age-group');
const heightGroup = $('.height-group');
const weightGroup = $('.weight-group');
const targetGroup = $('.target-group');
const stageGroup = $('.stage-group');

const output1 = $('.result1');
const output2 = $('.result2');
const repeat = $('.repeat');



 const gender = [
     [1, 0],
     [0, 1],
 ];
const age = [
    [1, 0.5, 0, 0],
    [0.5, 1, 0.5, 0],
    [0, 0.5, 1, 0.5],
    [0, 0, 0.5, 1]
]
const height = [
    [1, 0.5, 0, 0],
    [0.5, 1, 0.5, 0],
    [0, 0.5, 1, 0.5],
    [0, 0, 0.5, 1]
]
const weight = [
    [1, 0.5, 0, 0, 0, 0],
    [0.5, 1, 0.5, 0, 0, 0],
    [0, 0.5, 1, 0.5, 0, 0],
    [0, 0, 0.5, 1, 0.5, 0],
    [0, 0, 0, 0.5, 1, 0.5],
    [0, 0, 0, 0, 0.5, 1],
]
 const target = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0.5, 0.5],
    [0, 0, 1, 0.5, 0],
    [0, 0.5, 0.5, 1, 0],
    [0, 0.5, 0, 0, 1],
 ];
const stage = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0.5],
    [0, 0, 0.5, 1]
]

const casesAPI = "http://localhost:3000/cases";
const newCaseAPI = "http://localhost:3000/newCase";


function getCases(callback1, callback2) {
    fetch(casesAPI)
            .then(function(response){
                return response.json();
            })
            .then(callback1)
            .then(callback2)
}

  function handleData(cases){
    cases.forEach(caseCBR=>{
        switch(caseCBR.gender){
            case "nam": 
                caseCBR.gender = 1;
                break;
            case "nữ": 
                caseCBR.gender = 0;
                break;    
        };
        switch(caseCBR.age){
            case "14-18": 
                caseCBR.age = 0;
                break;
            case "19-30": 
                caseCBR.age = 1;
                break;
            case "31-50": 
                caseCBR.age = 2;
                break;
            case "trên 50": 
                caseCBR.age = 3;
                break;    
        };
        switch(caseCBR.height){
            case "dưới 1m6": 
                caseCBR.height = 0;
                break;
            case "1m6-1m7": 
                caseCBR.height = 1;
                break;
            case "1m7-1m8": 
                caseCBR.height = 2;
                break;
            case "trên 1m8": 
                caseCBR.height = 3;
                break;    
        };
        switch(caseCBR.weight){
            case "dưới 40": 
                caseCBR.weight = 0;
                break;
            case "40-50": 
                caseCBR.weight = 1;
                break;
            case "50-60": 
                caseCBR.weight = 2;
                break;
            case "60-70": 
                caseCBR.weight = 3;
                break;
            case "70-80": 
                caseCBR.weight = 4;
                break;
            case "trên 80": 
                caseCBR.weight = 5;
                break;        
        };
        switch(caseCBR.stage){
            case "sắp thi đấu": 
                caseCBR.stage = 0;
                break;
            case "đang thi đấu": 
                caseCBR.stage = 1;
                break;
            case "sau thi đấu": 
                caseCBR.stage = 2;
                break;
            case "tập luyện": 
                caseCBR.stage = 3;
                break;    
        };
        switch(caseCBR.target){
            case "duy trì thể trạng": 
                caseCBR.target = 0;
                break;
            case "tăng cơ giảm mỡ": 
                caseCBR.target = 1;
                break;
            case "tăng cơ tăng cân": 
                caseCBR.target = 2;
                break;
            case "tăng cơ": 
                caseCBR.target = 3;
                break;
            case "giảm mỡ": 
                caseCBR.target = 4;
                break;        
        };
    })
    return cases;
}

function handleDateToAPI(obj){
    switch(obj.gender){
        case "1": 
            obj.gender = "nam";
            break;
        case "0": 
            obj.gender = "nữ";
            break;    
    };
    switch(obj.age){
        case "0" : 
            obj.age = "14-18";
            break;
        case "1": 
            obj.age = "19-30";
            break;
        case "2": 
            obj.age = "31-50";
            break;
        case "3": 
            obj.age = "trên 50";
            break;    
    };
    switch(obj.height){
        case "0": 
            obj.height = "dưới 1m6";
            break;
        case "1": 
            obj.height = "1m6-1m7";
            break;
        case "2": 
            obj.height = "1m7-1m8";
            break;
        case "3": 
            obj.height = "trên 1m8";
            break;    
    };
    switch(obj.weight){
        case "0": 
            obj.weight = "dưới 40";
            break;
        case "1": 
            obj.weight = "40-50";
            break;
        case "2": 
            obj.weight = "50-60";
            break;
        case "3": 
            obj.weight = "60-70";
            break;
        case "4": 
            obj.weight = "70-80";
            break;
        case "6": 
            obj.weight = "trên 80";
            break;        
    };
    switch(obj.stage){
        case "0": 
            obj.stage = "sắp thi đấu";
            break;
        case "1": 
            obj.stage =  "đang thi đấu";
            break;
        case "2": 
            obj.stage = "sau thi đấu";
            break;
        case "3": 
            obj.stage = "tập luyện";
            break;    
    };
    switch(obj.target){
        case "0": 
            obj.target = "duy trì thể trạng";
            break;
        case "1": 
            obj.target = "tăng cơ giảm mỡ";
            break;
        case "2": 
            obj.target = "tăng cơ tăng cân";
            break;
        case "3": 
            obj.target = "tăng cơ";
            break;
        case "4": 
            obj.target = "giảm mỡ";
            break;        
    };
}

function handleCBR(cases){
    const result = [];
    const dataInput = {};

    genderGroup.onclick = function(e){
        const input = e.target.closest('.gender');
        if(input){
            if(dataInput.gender==undefined){   
                setTimeout(function(){
                    ageGroup.classList.toggle('none');
                    ScrollIntoView(ageGroup);
                }, 500);
            }
            dataInput.gender = input.value;
            // console.log( dataInput.gender);
        }
    };
    ageGroup.onclick = function(e){
        const input = e.target.closest('.age');
        if(input){
            if(dataInput.age==undefined){
                setTimeout(function(){
                    heightGroup.classList.toggle('none');
                    ScrollIntoView(heightGroup);
                }, 500);
            }
            dataInput.age = input.value;
            // console.log( dataInput.age);
        }
       
    };
    heightGroup.onclick = function(e){
        const input = e.target.closest('.height');
        if(input){
            if(dataInput.height==undefined){
                setTimeout(function(){
                    weightGroup.classList.toggle('none');
                    ScrollIntoView(weightGroup);
                }, 500);
            }
            dataInput.height = input.value;
            // console.log(dataInput.height);
        }
    };
    weightGroup.onclick = function(e){
        const input = e.target.closest('.weight');
        if(input){
            if(dataInput.weight==undefined){
                setTimeout(function(){
                    targetGroup.classList.toggle('none');
                    ScrollIntoView(targetGroup);
                }, 500);
            }
            dataInput.weight = input.value;
            // console.log(dataInput.weight);
        }
    };
    targetGroup.onclick = function(e){
        const input = e.target.closest('.target');
        if(input){
            if(dataInput.target==undefined){
                setTimeout(function(){
                    stageGroup.classList.toggle('none');
                    ScrollIntoView(stageGroup);
                }, 500);
            }
            dataInput.target = input.value;
            // console.log(dataInput.target);
        }
    }
    stageGroup.onclick = function(e){
        const input = e.target.closest('.stage');
        var notHaveValue = false;
        var haveCase = false;
        if(input){
            if(dataInput.stage==undefined){notHaveValue = true;}
            dataInput.stage = input.value;
            // console.log(dataInput.stage);
        }
        var final = 0;
        var indexValue;
            // console.log(cases.length);
            cases.forEach((caseCBR, index)=>{
                result[index] = 6*target[dataInput.target][caseCBR.target] 
                                + 5*stage[dataInput.stage][caseCBR.stage] 
                                + 4*gender[dataInput.gender][caseCBR.gender]
                                + 3*age[dataInput.age][caseCBR.age] 
                                + 3*height[dataInput.height][caseCBR.height] 
                                + 3*weight[dataInput.weight][caseCBR.weight];
                result[index] /=24;   
                if(result[index]==1) {haveCase = true;}             
                if(final<result[index]) {
                    final = result[index];
                    indexValue = index;
                }
                // console.log(caseCBR);
                // console.log(result[index]);
            })
            // console.log(cases[indexValue]);
            // console.log(indexValue);
            // console.log(final);
            // console.log(cases[indexValue].conclude1)
            // console.log(cases[indexValue].conclude2)
            output1.textContent = `${cases[indexValue].conclude1}`;
            output2.textContent = `${cases[indexValue].conclude2}`;

           if(notHaveValue){
            output1.classList.toggle('none');
            output2.classList.toggle('none');
            setTimeout(function(){
                $('.final').classList.toggle('none');
                // ScrollIntoView($('.final'));
            }, 500)
           }
           ScrollIntoView(output1);

           
            // console.log(haveCase)

       if(!haveCase){
           dataInput.conclude1 = cases[indexValue].conclude1;
           dataInput.conclude2 = cases[indexValue].conclude2;
            handleDateToAPI(dataInput);
           createCase(dataInput);
        //    console.log(dataInput)
       }
    };
   
}

function handleBotchat(){
    btnSend.onclick = function(e){
        e.preventDefault();
        var req = inputContent.value ;
     
        if (req == undefined || req== "") {
     
        }
        else{
            let data_req = document.createElement('div');
            let container = document.createElement('div');
            let continueChat = document.createElement('div');
            continueChat.innerHTML = `<div class="left">Vui lòng click chọn 1 trong các phương án trên để tiếp tục</div>`
            container.setAttribute("class","msgCon");
            data_req.innerHTML = req ;
            container.appendChild(data_req);
            data_req.setAttribute("class","right");
            var haveNoneClass = false; 
            for(var i=0; i<leftList.length;i++){
                if(leftList[i].classList.contains('none')){
                    haveNoneClass = true;
                    if(i==0){
                        leftList[i].before(container);
                        setTimeout(function(){
                            first.classList.toggle('none');
                            setTimeout(function(){
                               genderGroup.classList.toggle('none');
                            }, 500)
                           }, 500);
                    }
                    else{
                        leftList[i].before(container);
                        setTimeout(function(){
                        container.after(continueChat);
                        ScrollIntoView(continueChat);
                        }, 500)
                    }
                    break;
                }
            }
            if(!haveNoneClass){
                chatArea.append(container);
                setTimeout(function(){
                    continueChat.innerHTML = `<div class="left">Vui lòng kéo lên chọn lại nếu bạn muỗn tư vấn lại</div>`
                    container.after(continueChat);
                    ScrollIntoView(continueChat);
                }, 500)
                // if(req == 'có'){
                //     $('.right').scrollIntoView(true);
                //     console.log( $('.right'))
                // }
            }
            ScrollIntoView(container);
            inputContent.value = "";
        }
    };
        getCases(handleData, handleCBR);
}


handleBotchat();

function ScrollIntoView(element){
    setTimeout(() =>{
        element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    },100)
}


function createCase(data){
    var options ={
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
    }
    fetch(newCaseAPI, options)
}