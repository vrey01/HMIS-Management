require('../core/dhis2Api');
require('../services/services.module');
require('../directives/directives.module');

var analytics = require('./analytics/analyticsController');
var availableData = require('./availabledata/availabledataController');
import {dataExport} from './dataexport/dataexportController';

import {dataimport} from './dataimport/dataimportController';


var metadataExport = require('./metadataexport/metadataexportController');
var metadataImport = require('./metadataimport/metadataimportController');
var resetPassword = require('./resetpasswd/resetpasswdController');
import {trackerDataExport} from './trackerdataexport/trackerDataExportController';
import {trackerDataImport} from './trackerdataimport/trackerDataImportController';

var featuresModule = angular.module('Features', ['Dhis2Api', 'Directives', 'Services'])
    .controller('analyticsController', analytics)
    .controller('availabledataController', availableData)
    .controller('dataexportController', dataExport)
     .controller('dataimportController', dataimport)


    .controller('metadataexportController', metadataExport)
    .controller('metadataimportController', metadataImport)
    .controller('resetpasswdController', resetPassword)
    .controller('trackerDataExportController', trackerDataExport)
    .controller('trackerDataImportController', trackerDataImport);

module.exports = featuresModule;