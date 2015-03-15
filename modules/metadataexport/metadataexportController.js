appManagerMSF.controller('metadataexportController', ["$scope",'$filter', "MetaDataExport","MetaDataExportZip", function($scope, $filter, MetaDataExport,MetaDataExportZip) {
	var $translate = $filter('translate');
	
	$scope.progressbarDisplayed = false;
	
	$scope.submit=function(){
		//Show progress bar 
		$scope.progressbarDisplayed = true;
		
		if($scope.zipped)
			var result = MetaDataExportZip.get();
		else
			var result = MetaDataExport.get();
		//include current date in the file name, Helder
		var today = new Date();
		var dd = (today.getDate()<10?'0'+today.getDate():today.getDate());
		var mm = (today.getMonth()<9?'0'+(today.getMonth()+1):today.getMonth());
		var yyyy = today.getFullYear();

		//////
		var fileName = this.file_name+"_"+yyyy+mm+dd;
		result.$promise.then(function(data) {
			//Hide progress bar
			$scope.progressbarDisplayed = false;
			
			if($scope.zipped){
				var file = new Blob([JSON.stringify(data)], { type: "octet/stream" });												
				saveAs(file, fileName + '.json.zip');
			}
			else{
				var file = new Blob([JSON.stringify(data)], { type: 'application/json' });												
				saveAs(file, fileName + '.json');
			}
    	});
	};
		
}]);