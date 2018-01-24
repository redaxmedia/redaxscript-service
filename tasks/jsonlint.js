module.exports = () =>
{
	'use strict';

	const config =
	{
		dependency:
		{
			src:
			[
				'composer.json',
				'package.json'
			]
		},
		news:
		{
			src:
			[
				'news/*.json'
			]
		},
		version:
		{
			src:
			[
				'version/*.json'
			]
		}
	};

	return config;
};