var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_VII_0 = new ol.format.GeoJSON();
var features_VII_0 = format_VII_0.readFeatures(json_VII_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VII_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VII_0.addFeatures(features_VII_0);var lyr_VII_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VII_0, 
                style: style_VII_0,
                title: '<img src="styles/legend/VII_0.png" /> VII'
            });var format_VI_Erased_1 = new ol.format.GeoJSON();
var features_VI_Erased_1 = format_VI_Erased_1.readFeatures(json_VI_Erased_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VI_Erased_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VI_Erased_1.addFeatures(features_VI_Erased_1);var lyr_VI_Erased_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VI_Erased_1, 
                style: style_VI_Erased_1,
                title: '<img src="styles/legend/VI_Erased_1.png" /> VI_Erased'
            });var format_V_Erased_2 = new ol.format.GeoJSON();
var features_V_Erased_2 = format_V_Erased_2.readFeatures(json_V_Erased_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_Erased_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_V_Erased_2.addFeatures(features_V_Erased_2);var lyr_V_Erased_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_V_Erased_2, 
                style: style_V_Erased_2,
                title: '<img src="styles/legend/V_Erased_2.png" /> V_Erased'
            });var format_III_Erase_Final_3 = new ol.format.GeoJSON();
var features_III_Erase_Final_3 = format_III_Erase_Final_3.readFeatures(json_III_Erase_Final_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_III_Erase_Final_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_III_Erase_Final_3.addFeatures(features_III_Erase_Final_3);var lyr_III_Erase_Final_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_III_Erase_Final_3, 
                style: style_III_Erase_Final_3,
                title: '<img src="styles/legend/III_Erase_Final_3.png" /> III_Erase_Final'
            });var format_IV_Erased_4 = new ol.format.GeoJSON();
var features_IV_Erased_4 = format_IV_Erased_4.readFeatures(json_IV_Erased_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IV_Erased_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_IV_Erased_4.addFeatures(features_IV_Erased_4);var lyr_IV_Erased_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IV_Erased_4, 
                style: style_IV_Erased_4,
                title: '<img src="styles/legend/IV_Erased_4.png" /> IV_Erased'
            });var format_Levels_5 = new ol.format.GeoJSON();
var features_Levels_5 = format_Levels_5.readFeatures(json_Levels_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Levels_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Levels_5.addFeatures(features_Levels_5);cluster_Levels_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Levels_5
});var lyr_Levels_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Levels_5, 
                style: style_Levels_5,
                title: '<img src="styles/legend/Levels_5.png" /> Levels'
            });

lyr_VII_0.setVisible(true);lyr_VI_Erased_1.setVisible(true);lyr_V_Erased_2.setVisible(true);lyr_III_Erase_Final_3.setVisible(true);lyr_IV_Erased_4.setVisible(true);lyr_Levels_5.setVisible(true);
var layersList = [baseLayer,lyr_VII_0,lyr_VI_Erased_1,lyr_V_Erased_2,lyr_III_Erase_Final_3,lyr_IV_Erased_4,lyr_Levels_5];
lyr_VII_0.set('fieldAliases', {'Id': 'Id', });
lyr_VI_Erased_1.set('fieldAliases', {'Id': 'Id', });
lyr_V_Erased_2.set('fieldAliases', {'Id': 'Id', });
lyr_III_Erase_Final_3.set('fieldAliases', {'Id': 'Id', });
lyr_IV_Erased_4.set('fieldAliases', {'Id': 'Id', });
lyr_Levels_5.set('fieldAliases', {'Id': 'Id', 'Level': 'Level', });
lyr_VII_0.set('fieldImages', {'Id': 'TextEdit', });
lyr_VI_Erased_1.set('fieldImages', {'Id': 'TextEdit', });
lyr_V_Erased_2.set('fieldImages', {'Id': 'TextEdit', });
lyr_III_Erase_Final_3.set('fieldImages', {'Id': 'TextEdit', });
lyr_IV_Erased_4.set('fieldImages', {'Id': 'TextEdit', });
lyr_Levels_5.set('fieldImages', {'Id': 'TextEdit', 'Level': 'TextEdit', });
lyr_VII_0.set('fieldLabels', {'Id': 'no label', });
lyr_VI_Erased_1.set('fieldLabels', {'Id': 'no label', });
lyr_V_Erased_2.set('fieldLabels', {'Id': 'no label', });
lyr_III_Erase_Final_3.set('fieldLabels', {'Id': 'no label', });
lyr_IV_Erased_4.set('fieldLabels', {'Id': 'no label', });
lyr_Levels_5.set('fieldLabels', {'Id': 'no label', 'Level': 'header label', });
lyr_Levels_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});