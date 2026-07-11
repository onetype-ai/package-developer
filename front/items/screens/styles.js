onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'developer.styles',
		route: '/developer/styles',
		app: 'developer',
		mode: 'styles',
		isDefault: true,
		metadata: { addon: 'developer' }
	});
});
