<!DOCTYPE html>

<html lang="en">

	<?php require_once('parts/head.html'); ?>

	<body>

		<?php require_once('parts/top.html'); ?>

		<div id="app" v-bind:class="{'ready': ready, 'animate': animate}">

			<?php require_once('parts/loading.html'); ?>

			<?php require_once('parts/movie.html'); ?>

			<?php require_once('parts/filter.html'); ?>

		</div>

		<script type="text/javascript" src="dist/all.min.js"></script>

	</body>

</html>
