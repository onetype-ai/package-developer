onetype.AddonReady('admin.screens', (screens) =>
{
    screens.Item({
        id: 'developer.addon',
        route: ['/developer/addons/:id', '/developer/addons/:id/:tab'],
        app: 'developer',
        mode: 'addons',
        metadata: { addon: 'developer' },
        data: function()
        {
            return {
                developerAddon: developer.addons.ItemGet(this.id),
                developerAddonTab: this.tab ? this.tab : 'overview'
            };
        }
    });
});
