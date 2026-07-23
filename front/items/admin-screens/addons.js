onetype.AddonReady('admin.screens', (screens) =>
{
    screens.Item({
        id: 'developer.addons',
        route: '/developer/addons',
        app: 'developer',
        mode: 'addons',
        isDefault: true,
        metadata: { addon: 'developer' }
    });
});
