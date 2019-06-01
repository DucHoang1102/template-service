var mongoose        = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');

var TemplatesSchema = new mongoose.Schema({
}, {timestamps: true});

TemplatesSchema.plugin(uniqueValidator, 'is already exist.');

TemplatesSchema.methods.getDoSomething = function() {
}

mongoose.model('Templates', TemplatesSchema);