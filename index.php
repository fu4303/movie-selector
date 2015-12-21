<!DOCTYPE html>

<html lang="en">

	<head>
		<meta charset="utf-8">

		<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Arimo:400,700">
		<link rel="stylesheet" type="text/css" href="dist/all.min.css">

		<script type="text/javascript"><?php require_once('parts/analytics.js'); ?></script>

		<?php require_once('parts/favicon.html'); ?>

		<title>What movie to watch?</title>
	</head>

	<body>

		<?php require_once('parts/logo.html'); ?>

		<div id="app" v-bind:class="{'result': result, 'ready': ready}">

			<?php require_once('parts/movie.html'); ?>

			<?php require_once('parts/filter.html'); ?>

		</div>

		<?php require_once('parts/footer.html'); ?>

		<script type="text/javascript" src="dist/all.min.js"></script>

	</body>

</html>
