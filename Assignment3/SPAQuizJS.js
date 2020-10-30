var viewSource= [
{
  welcomeText: "Select a Quiz!",
  startButton1: "HTML Quiz",
  startButton2: "Java Quiz"
},


]


async function get_quiz1(){
  const response= await fetch('https://my-json-server.typicode.com/brianso217/CUS1172/db');

const data= await response.json();


console.log(data.question_list1);
updateQuestion(data);
// this.onclick()={
//   return render_view("#mult_choice", 1)
// }

}
 async function get_quiz2(){
   const response= await fetch('https://my-json-server.typicode.com/brianso217/CUS1172/db');

   const data= await response.json();
   console.log(data.question_list2);
   // this.onclick()=>{
   //   return render_view("#fill_blank_text", 2)
   // }

 }
function updateQuestion(data){
  let question= data.question_list1[0].question;
  let answer1= data.question_list1[0].answers[0];
  let answer2= data.question_list1[0].answers[1];
  let answer3= data.question_list1[0].answers[2];
  let answer4= data.question_list1[0].answers[3];
  let htmlString= `Question: ${question} <br> Answer1: ${answer1} <br> Answer2: ${answer2}
  <br> Answer3: ${answer3} <br> Answer4: ${answer4}`;
  document.querySelector("#showQuestion").innerHTML= htmlString;
}


var render_view = (type_id, source_index)=> {
  console.log("Rendering View");
  var source= document.querySelector(type_id).innerHTML;
  var template= Handlebars.compile(source);
  var html= template(viewSource[source_index]);

  document.querySelector("#beginningView").innerHTML= html;
  return false;
};
