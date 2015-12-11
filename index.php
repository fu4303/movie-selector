<!DOCTYPE html>

<html lang="nl">

	<head>
		<meta charset="utf-8">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

		<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arimo:400,700">
		<link rel="stylesheet" type="text/css" href="dist/all.min.css">

		<title>Movie</title>
	</head>

	<body>

		<div id="app" v-bind:class="{'result': result}">

			<?php require_once('templates/movie.html'); ?>

			<?php require_once('templates/filter.html'); ?>

		</div>

		<script type="text/javascript" src="node_modules/vue/dist/vue.js"></script>
		<script type="text/javascript" src="node_modules/vue-resource/dist/vue-resource.js"></script>
		<script type="text/javascript" src="dist/all.min.js"></script>

	</body>

</html>
