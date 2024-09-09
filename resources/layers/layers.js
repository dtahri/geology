var wms_layers = [];
var format_DZA_adm1_0 = new ol.format.GeoJSON();
var features_DZA_adm1_0 = format_DZA_adm1_0.readFeatures(json_DZA_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DZA_adm1_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DZA_adm1_0.addFeatures(features_DZA_adm1_0);var lyr_DZA_adm1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DZA_adm1_0, 
                style: style_DZA_adm1_0,
                title: '<img src="styles/legend/DZA_adm1_0.png" /> DZA_adm1'
            });var format_1_1 = new ol.format.GeoJSON();
var features_1_1 = format_1_1.readFeatures(json_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_1_1.addFeatures(features_1_1);var lyr_1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_1, 
                style: style_1_1,
                title: '<img src="styles/legend/1_1.png" /> 1'
            });

lyr_DZA_adm1_0.setVisible(true);lyr_1_1.setVisible(true);
var layersList = [lyr_DZA_adm1_0,lyr_1_1];
lyr_DZA_adm1_0.set('fieldAliases', {'NAME_1': 'NAME_1', });
lyr_1_1.set('fieldAliases', {'Date': 'Date', 'Region': 'Region', 'Magnitude': 'Magnitude', 'Victims': 'Victims', });
lyr_DZA_adm1_0.set('fieldImages', {'NAME_1': 'TextEdit', });
lyr_1_1.set('fieldImages', {'Date': 'TextEdit', 'Region': 'TextEdit', 'Magnitude': 'TextEdit', 'Victims': 'TextEdit', });
lyr_DZA_adm1_0.set('fieldLabels', {'NAME_1': 'no label', });
lyr_1_1.set('fieldLabels', {'Date': 'header label', 'Region': 'header label', 'Magnitude': 'header label', 'Victims': 'header label', });
lyr_1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});