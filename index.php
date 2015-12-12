<!DOCTYPE html>

<html lang="en">

	<head>
		<meta charset="utf-8">

		<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arimo:400,700">
		<link rel="stylesheet" type="text/css" href="dist/all.min.css">

		<title>Movie</title>
	</head>

	<body>

		<div id="app" v-bind:class="{'result': result, 'ready': ready}">

			<?php require_once('templates/movie.html'); ?>

			<?php require_once('templates/filter.html'); ?>

		</div>

		<script type="text/javascript" src="node_modules/vue/dist/vue.min.js"></script>
		<script type="text/javascript" src="node_modules/vue-resource/dist/vue-resource.min.js"></script>
		<script type="text/javascript" src="dist/all.min.js"></script>

	</body>

</html>
