developer.Fn('addons.emitters', function(id)
{
    return Object.values(onetype.Emitters())
        .filter((emitter) => emitter.metadata.addon === id || emitter.name.startsWith(id + '.'))
        .map((emitter) => ({
            id: emitter.name,
            description: emitter.description,
            parameters: onetype.DataDescribe(emitter.config)
        }))
        .sort((left, right) => left.id.localeCompare(right.id));
});
