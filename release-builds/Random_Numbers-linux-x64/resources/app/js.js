$(function(){

	var song1 = "./songs/final_countdown.mp3";
	var song2 = "./songs/saw.mp3";
	var song3 = "./songs/lo_squalo.mp3";
	var song4 = "./songs/introduction.mp3";
	var song5 = "./songs/hearth_of_courage.mp3";


	$("#changeButton").on('click', function(){
		var audio = $('#player');
		var src;
		var curSong = $('.songSelect').val();
		console.log(curSong);
		if (curSong == 1) {
			src = "./songs/final_countdown.mp3";
			console.log(src)
		}
		if (curSong == 2) {
			src = "./songs/saw.mp3";
			console.log(src)
		}
		if (curSong == 3) {
			src = "./songs/lo_squalo.mp3";
			console.log(src)
		}
		if (curSong == 4) {
			src = "./songs/introduction.mp3";
			console.log(src)
		}
		if (curSong == 5) {
			src = "./songs/hearth_of_courage.mp3";
			console.log(src)
		}		
			
		
		$("#audioPlayer").attr('src', src);
		audio[0].pause();
		audio[0].load();
	})


	$(".randomize").on('click', function(){
		var from = $("#randomFrom").val();
		var to = $("#randomTo").val();
		var result = Math.floor((Math.random() * to) + from);
		console.log(result);

		$("#testoFort").removeClass('hide');
		$(".number").html(result);

	})

})