onetype.AddonReady('admin.layouts', (layouts) =>
{
    layouts.Item({
        id: 'developer-addons-sidebar',
        isActive: true,
        condition: { app: ['developer'], mode: ['addons'] },
        zone: 'root',
        slot: 'left',
        render: function()
        {
            this.Compute(() =>
            {
                this.tree = developer.Fn('addons.list').map((group) => ({
                    label: group.group,
                    items: group.items.map((item) => ({ icon: 'extension', label: item.name, value: item.id }))
                }));
            });

            this.pick = ({ value }) =>
            {
                value.value && $ot.admin.screens.open('developer.addon', { id: value.value });
            };

            return `<e-admin-navigation-sidebar title="Addons" :search="true" :items="tree" :active="developerAddon ? developerAddon.Get('id') : ''" :_click="pick"></e-admin-navigation-sidebar>`;
        }
    });
});
