const path = require("path")

module.exports = ({ config }) => {
    /* Manipulate config here */

	config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules|\.spec\.js)/,
        use: [{loader: 'webpack-strip-block'}]
        // use: [{loader: 'babel-loader'}]    
    });

    ['imports', 'client', 'server'].forEach((pathName) => {
		config.resolve.alias['/' + pathName] = path.resolve(__dirname, '../' + pathName)
	})
    config.resolve.modules.push(path.resolve(__dirname, '../'))
    
    // config.resolve.alias['meteor/meteor'] = path.resolve(__dirname, '')
	// config.resolve.alias['meteor/mongo'] = path.resolve(__dirname, './meteor/mongo.js')

    return config;
};



