/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

const path = require('path');

const WebpackConfigFactory = require('./webpack-config-factory').WebpackConfigFactory;


class KarmaConfigFactory {

    config({projectPath, specBundleRelativeFilePath}) {

        return {

            browsers: ['PhantomJS'],
            frameworks: ['jasmine'],
            reporters: ['mocha', 'coverage', 'remap-coverage'],

            files: [
                specBundleRelativeFilePath
            ],

            preprocessors: {
                [specBundleRelativeFilePath]: ['coverage', 'webpack', 'sourcemap']
            },

            coverageReporter: {
                type: 'in-memory'
            },

            remapCoverageReporter: {
                'text-summary': null,
                json: './coverage/coverage.json',
                html: './coverage/html'
            },

            webpack: new WebpackConfigFactory().testConfig({
                projectPath: projectPath
            })
        };

    }

}

module.exports.KarmaConfigFactory = KarmaConfigFactory;