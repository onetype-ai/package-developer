onetype.AddonReady('ui.modes', (modes) =>
{
	modes.Item({
		id: 'styles',
		condition: { screen: ['developer'] },
		order: 3,
		icon: 'palette',
		name: 'Styles'
	});
});
