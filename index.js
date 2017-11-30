var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');

var filePath = path.join(__dirname, 'panoview-template.html');

function createpanoview(args, content) {
    var template = fs.readFileSync(filePath).toString(),
        options = {};

    if (content.length) {
        var options = content;
    }

    return _.template(template)({
        id: 'panoview' + ((Math.random() * 9999) | 0),
        image: args[0] || "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
        height: args[1] || 400,
        width: args[2] || 800,
        options: options,
    });
}

hexo.extend.tag.register('panoview', createpanoview, {
    async: true,
    ends: true
});