<?php
	$images = isset($_GET['images']) ? $_GET['images'] : false;
	$genres = isset($_GET['genres']) ? $_GET['genres'] : false;

	if(! $images || ! $genres) {
		return;
	}

	$data['images'] = $images;
	$data['genres'] = $genres;
	$data['date'] = time();

	$file = fopen('data.js', 'w');

	fwrite($file, json_encode($data));

	fclose($file);
?>
