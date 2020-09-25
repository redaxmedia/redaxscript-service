module.exports = () =>
{
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
