onetype.AddonReady('ui.modes', (modes) =>
{
	modes.Item({
		id: 'elements',
		condition: { screen: ['developer'] },
		isDefault: true,
		order: 1,
		icon: 'grid_view',
		name: 'Elements'
	});
});
