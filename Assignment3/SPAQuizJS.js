async function get_quizzes(){

  try{
    const response= await fetch('SPAQuiz1.json')


    const result= await response.json()

    console.log(result);
  } catch(err){
    console.error(err);
  }
}


get_quizzes();
