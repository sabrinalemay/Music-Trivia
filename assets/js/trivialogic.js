    // check duplicate answers for date

    //	select a random question type

    const selectedQuestionType = Math.floor(Math.random() * musicObject.tracks.items.length);
    // console.log(selectedQuestionType, musicObjectArr[selectedQuestionType]);
    var possibleAnswers = [];
    var musicObjectArr = [];
    var correctAnswerIndex = 0;
    var musicAnsKey = [];
    questionTypes = ["artist_name", "song_name", "song_year", "album_name"];
    console.log(musicObjectArr);
    // var objectIndex = musicObjectArr[selectedQuestionType];
    for(let i = 0; i < 5; i++){
        var possibleAnswers = [];
        // console.log(Math.floor(Math.random() * musicObject.tracks.items.length), musicObjectArr[selectedQuestionType]);
        var objectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
        var qType = Math.floor(Math.random() * questionTypes.length);
        var triviaQuestion = "";
        console.log(qType);
        if(qType == 0){
            triviaQuestion = "Who sang this song?";
            for(let i = 0; i < 3; i++){
                var wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                while(wrongObjectIndex == objectIndex){
                    wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                }
                possibleAnswers.push(musicObject.tracks.items[wrongObjectIndex].track.artists[0].name);
            }
            randPositionIndex = Math.floor(Math.random() * 4);
            correctAnswerIndex = randPositionIndex;
            possibleAnswers.splice(randPositionIndex, 0, musicObject.tracks.items[objectIndex].track.artists[0].name)
            // possibleAnswers.push(musicObject.tracks.items[objectIndex].track.artists[0].name);
        }else if(qType == 1){
            triviaQuestion = "What is the name of this song?";
            for(let i = 0; i < 3; i++){
                var wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                while(wrongObjectIndex == objectIndex){
                    wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                }
                possibleAnswers.push(musicObject.tracks.items[wrongObjectIndex].track.name);
            }
            randPositionIndex = Math.floor(Math.random() * 4);
            correctAnswerIndex = randPositionIndex;
            possibleAnswers.splice(randPositionIndex, 0, musicObject.tracks.items[objectIndex].track.name)
            // possibleAnswers.push(musicObject.tracks.items[objectIndex].track.name);
        }else if(qType == 2){
            triviaQuestion = "What year was this song made?"
            for(let i = 0; i < 3; i++){
                var wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                while(wrongObjectIndex == objectIndex){
                    wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                }
                console.log(musicObject.tracks.items[wrongObjectIndex].track.album.release_date.substring(0,4))
                possibleAnswers.push(musicObject.tracks.items[wrongObjectIndex].track.album.release_date.substring(0,4));
            }
            randPositionIndex = Math.floor(Math.random() * 4);
            correctAnswerIndex = randPositionIndex;
            console.log(musicObject.tracks.items[objectIndex].track.album.release_date.substring(0,4))
            possibleAnswers.splice(randPositionIndex, 0, musicObject.tracks.items[objectIndex].track.album.release_date.substring(0,4))
            // possibleAnswers.push(musicObject.tracks.items[objectIndex].track.album.release_date);
        }else if(qType == 3){
            triviaQuestion = "What is the name of this song's album?"
            for(let i = 0; i < 3; i++){
                var wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                while(wrongObjectIndex == objectIndex){
                    wrongObjectIndex = Math.floor(Math.random() * musicObject.tracks.items.length);
                }
                possibleAnswers.push(musicObject.tracks.items[wrongObjectIndex].track.album.name);
            }
            randPositionIndex = Math.floor(Math.random() * 4);
            correctAnswerIndex = randPositionIndex;
            possibleAnswers.splice(randPositionIndex, 0, musicObject.tracks.items[objectIndex].track.album.name)
            // possibleAnswers.push(musicObject.tracks.items[objectIndex].track.album.name);
        }
        var musicAns = {"id":i+1, "correctAnswerIndex":correctAnswerIndex};
        console.log(objectIndex);
        var musicObj = {
            "id": i+1,
            "artist_name": musicObject.tracks.items[objectIndex].track.artists[0].name, // Who is the artist that is featured on this song?
            "song_name": musicObject.tracks.items[objectIndex].track.name, // What is the name of this song?
            "song_year":musicObject.tracks.items[objectIndex].track.album.release_date,
            "album_name":musicObject.tracks.items[objectIndex].track.album.name,
            // "song_genres":[],
            "qType":qType,
            "triviaQ":triviaQuestion,
            "preview_url":musicObject.tracks.items[objectIndex].track.preview_url,
            "possible_answers":possibleAnswers
        };
        musicAnsKey.push(musicAns);
        musicObjectArr.push(musicObj);
    };
    console.log(musicObjectArr);
    console.log(musicAnsKey);
