developer.Fn('addons.middlewares', function(id)
{
	return Object.values(onetype.Middlewares())
		.filter((middleware) => middleware.name.startsWith(id + '.'))
		.map((middleware) => ({
			id: middleware.name,
			description: middleware.description,
			parameters: onetype.DataDescribe(middleware.config)
		}))
		.sort((left, right) => left.id.localeCompare(right.id));
});
