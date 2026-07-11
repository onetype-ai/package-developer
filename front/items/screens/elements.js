onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'developer.elements',
		route: '/developer/elements',
		app: 'developer',
		mode: 'elements',
		isDefault: true,
		metadata: { addon: 'developer' }
	});
});
