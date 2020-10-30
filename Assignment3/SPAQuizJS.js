var viewSource= [
{
  welcomeText: "Select a Quiz!",
  startButton1: "HTML Quiz",
  startButton2: "Java Quiz"
}

]


async function get_quiz1(){
  const response= await fetch('https://my-json-server.typicode.com/brianso217/CUS1172/db');

const data= await response.json();
console.log(data);
getQuestion1(data);
}
 // async function get_quiz2(){
 //   const response= await fetch('https://my-json-server.typicode.com/brianso217/CUS1172/db');
 //
 //   const data= await response.json();
 //   updateDOM2(data);
 // }
function startQuiz1(data){
  let question1= data.question_list1[currentQuestionIndex].question;
  let htmlString= `Question: ${question1}`;
  document.querySelector("#showQuestion").innerHTML= htmlString;
}


var nextQuestion1= function(data){
  var keys= Object.keys(data.question_list1);
  return data[keys[keys.length * Math.random() << 0]]
};

var render_view= (type_id, source_index)=> {
  console.log("Rendering View");
  var source= document.querySelector(type_id).innerHTML;
  var template= Handlebars.compile(source);
  var html= template(viewSource[source_index]);

  document.querySelector("#showView").innerHTML= html;
}
