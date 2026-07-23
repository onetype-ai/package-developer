onetype.AddonReady('admin.layouts', (layouts) =>
{
    layouts.Item({
        id: 'developer-addons-addon',
        isActive: true,
        condition: { app: ['developer'], mode: ['addons'] },
        zone: 'root',
        slot: 'center',
        render: function()
        {
            this.tabs = [
                { id: 'overview', label: 'Overview', icon: 'info' },
                { id: 'fields', label: 'Fields', icon: 'data_object' },
                { id: 'commands', label: 'Commands', icon: 'terminal' },
                { id: 'emitters', label: 'Emitters', icon: 'sensors' },
                { id: 'middlewares', label: 'Middlewares', icon: 'alt_route' }
            ];

            this.entry = () =>
            {
                return this.developerAddon ? this.developerAddon.Get(['id', 'name', 'description', 'content']) : null;
            };

            this.pick = ({ value }) =>
            {
                $ot.admin.screens.open('developer.addon', { id: this.developerAddon.Get('id'), tab: value });
            };

            this.fields = () =>
            {
                return developer.Fn('addons.fields', this.developerAddon.Get('id'));
            };

            this.commands = () =>
            {
                return developer.Fn('addons.commands', this.developerAddon.Get('id'));
            };

            this.emitters = () =>
            {
                return developer.Fn('addons.emitters', this.developerAddon.Get('id'));
            };

            this.middlewares = () =>
            {
                return developer.Fn('addons.middlewares', this.developerAddon.Get('id'));
            };

            return `
                <div class="ot-flex-vertical ot-gap-m ot-container-m ot-py-l">
                    <e-admin-global-heading :title="entry() ? entry().name : 'Addons'" :description="entry() ? entry().description : 'Pick an addon from the list on the left.'" element="h2"></e-admin-global-heading>

                    <div ot-if="developerAddon">
                        <e-admin-navigation-tabs tone="contained" :items="tabs" :active="developerAddonTab" :_change="pick"></e-admin-navigation-tabs>
                    </div>
                    <div ot-if="developerAddon && developerAddonTab === 'overview'" class="ot-flex-vertical ot-gap-m">
                        <e-admin-global-markdown ot-if="entry().content" :content="entry().content"></e-admin-global-markdown>
                    </div>
                    <div ot-if="developerAddon && developerAddonTab === 'fields'" class="ot-flex-1 ot-scrollbar">
                        <e-admin-global-parameters ot-if="fields().length" :items="fields()"></e-admin-global-parameters>
                        <e-admin-status-empty
                            ot-if="!fields().length"
                            icon="data_object"
                            title="No fields"
                            description="This addon does not declare any fields."
                        ></e-admin-status-empty>
                    </div>
                    <div ot-if="developerAddon && developerAddonTab === 'commands'" class="ot-flex-vertical ot-gap-s ot-flex-1 ot-scrollbar">
                        <e-admin-status-empty
                            ot-if="!commands().length"
                            icon="terminal"
                            title="No commands"
                            description="This addon does not register any commands."
                        ></e-admin-status-empty>
                        <div ot-for="command in commands()" :ot-key="command.id">
                            <e-admin-core-section
                                :title="command.id"
                                :description="command.description"
                                icon="terminal"
                                :collapsible="true"
                                :collapsed="true"
                            >
                                <div slot="content" class="ot-flex-vertical ot-gap-m">
                                    <div ot-if="command.parameters.length" class="ot-flex-vertical ot-gap-s">
                                        <e-admin-global-heading title="Input" element="h3"></e-admin-global-heading>
                                        <e-admin-global-parameters :items="command.parameters" :background="2"></e-admin-global-parameters>
                                    </div>
                                    <div ot-if="command.output.length" class="ot-flex-vertical ot-gap-s">
                                        <e-admin-global-heading title="Output" element="h3"></e-admin-global-heading>
                                        <e-admin-global-parameters :items="command.output" :background="2"></e-admin-global-parameters>
                                    </div>
                                    <span ot-if="!command.parameters.length && !command.output.length">This command takes no parameters and returns no data.</span>
                                </div>
                            </e-admin-core-section>
                        </div>
                    </div>
                    <div ot-if="developerAddon && developerAddonTab === 'emitters'" class="ot-flex-vertical ot-gap-s ot-flex-1 ot-scrollbar">
                        <e-admin-status-empty
                            ot-if="!emitters().length"
                            icon="sensors"
                            title="No emitters"
                            description="This addon does not register any emitters."
                        ></e-admin-status-empty>
                        <div ot-for="emitter in emitters()" :ot-key="emitter.id">
                            <e-admin-core-section
                                :title="emitter.id"
                                :description="emitter.description"
                                icon="sensors"
                                :collapsible="true"
                                :collapsed="true"
                            >
                                <div slot="content" class="ot-flex-vertical ot-gap-m">
                                    <e-admin-global-parameters ot-if="emitter.parameters.length" :items="emitter.parameters" :background="2"></e-admin-global-parameters>
                                    <span ot-if="!emitter.parameters.length">This emitter carries no payload.</span>
                                </div>
                            </e-admin-core-section>
                        </div>
                    </div>
                    <div ot-if="developerAddon && developerAddonTab === 'middlewares'" class="ot-flex-vertical ot-gap-s ot-flex-1 ot-scrollbar">
                        <e-admin-status-empty
                            ot-if="!middlewares().length"
                            icon="alt_route"
                            title="No middlewares"
                            description="This addon does not register any middlewares."
                        ></e-admin-status-empty>
                        <div ot-for="middleware in middlewares()" :ot-key="middleware.id">
                            <e-admin-core-section
                                :title="middleware.id"
                                :description="middleware.description"
                                icon="alt_route"
                                :collapsible="true"
                                :collapsed="true"
                            >
                                <div slot="content" class="ot-flex-vertical ot-gap-m">
                                    <e-admin-global-parameters ot-if="middleware.parameters.length" :items="middleware.parameters" :background="2"></e-admin-global-parameters>
                                    <span ot-if="!middleware.parameters.length">This middleware carries no context values.</span>
                                </div>
                            </e-admin-core-section>
                        </div>
                    </div>
                    <div ot-if="!developerAddon" class="ot-flex-1">
                        <e-admin-status-empty
                            icon="extension"
                            title="No addon selected"
                            description="Pick an addon from the list on the left to inspect it here."
                        ></e-admin-status-empty>
                    </div>
                </div>
            `;
        }
    });
});
