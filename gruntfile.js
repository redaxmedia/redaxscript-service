module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		jsonlint: require('./tasks/jsonlint')(grunt),
		xml_validator: require('./tasks/xml_validator')(grunt)
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'jsonlint',
		'xml_validator'
	]);
};
