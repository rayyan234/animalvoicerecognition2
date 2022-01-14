function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('httpsteachablemachine.withgoogle.commodelsNDYHOPSJX/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    

}

function gotResults(error,results){
console.log('gotResult');
}