onetype.AddonReady('ui.screens', (screens) =>
{
	screens.Item({
		id: 'developer',
		route: '/developer',
		app: 'developer',
		metadata: { addon: 'developer' }
	});
});
