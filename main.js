function start(){
        navigator.mediaDevices.getUserMedia({ audio: true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/raMN4kt1o/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
     if(error){
       console.error(error);
     }
     else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;  
        
        document.getElementById("result").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result").style.color = "rgb (" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("accuracy").style.color = "rgb (" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img_1 = document.getElementById('image 1');
        img_2 = document.getElementById('image 2');
        img_3 = document.getElementById('image 3');
        img_4 = document.getElementById('image 4');

        if(results[0].label == "Clap"){
              img_1.src = 'aliens-01.gif';
              img_2.src = 'aliens-02.png';
              img_3.src = 'aliens-03.png';
              img_4.src = 'aliens-04.png';
        }
        else if(results[0].label == "Snap"){
            img_1.src = 'aliens-01.png';
            img_2.src = 'aliens-02.gif';
            img_3.src = 'aliens-03.png';
            img_4.src = 'aliens-04.png';
      }
        else if(results[0].label == "Talk"){
            img_1.src = 'aliens-01.png';
            img_2.src = 'aliens-02.png';
            img_3.src = 'aliens-03.gif';
            img_4.src = 'aliens-04.png';
      }
        else if(results[0].label == "Scream"){
            img_1.src = 'aliens-01.png';
            img_2.src = 'aliens-02.png';
            img_3.src = 'aliens-03.png';
            img_4.src = 'aliens-04.gif';
  }
    }

}