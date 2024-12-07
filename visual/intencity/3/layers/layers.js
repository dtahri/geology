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
var format_V_Erase_F_0 = new ol.format.GeoJSON();
var features_V_Erase_F_0 = format_V_Erase_F_0.readFeatures(json_V_Erase_F_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_Erase_F_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_V_Erase_F_0.addFeatures(features_V_Erase_F_0);var lyr_V_Erase_F_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_V_Erase_F_0, 
                style: style_V_Erase_F_0,
                title: '<img src="styles/legend/V_Erase_F_0.png" /> V_Erase_F'
            });var format_VI_Erase_F_1 = new ol.format.GeoJSON();
var features_VI_Erase_F_1 = format_VI_Erase_F_1.readFeatures(json_VI_Erase_F_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VI_Erase_F_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VI_Erase_F_1.addFeatures(features_VI_Erase_F_1);var lyr_VI_Erase_F_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VI_Erase_F_1, 
                style: style_VI_Erase_F_1,
                title: '<img src="styles/legend/VI_Erase_F_1.png" /> VI_Erase_F'
            });var format_VII_Erase_2 = new ol.format.GeoJSON();
var features_VII_Erase_2 = format_VII_Erase_2.readFeatures(json_VII_Erase_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VII_Erase_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VII_Erase_2.addFeatures(features_VII_Erase_2);var lyr_VII_Erase_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VII_Erase_2, 
                style: style_VII_Erase_2,
                title: '<img src="styles/legend/VII_Erase_2.png" /> VII_Erase'
            });var format_VIII_Erase_3 = new ol.format.GeoJSON();
var features_VIII_Erase_3 = format_VIII_Erase_3.readFeatures(json_VIII_Erase_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIII_Erase_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VIII_Erase_3.addFeatures(features_VIII_Erase_3);var lyr_VIII_Erase_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIII_Erase_3, 
                style: style_VIII_Erase_3,
                title: '<img src="styles/legend/VIII_Erase_3.png" /> VIII_Erase'
            });var format_IX_4 = new ol.format.GeoJSON();
var features_IX_4 = format_IX_4.readFeatures(json_IX_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IX_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_IX_4.addFeatures(features_IX_4);var lyr_IX_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IX_4, 
                style: style_IX_4,
                title: '<img src="styles/legend/IX_4.png" /> IX'
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

lyr_V_Erase_F_0.setVisible(true);lyr_VI_Erase_F_1.setVisible(true);lyr_VII_Erase_2.setVisible(true);lyr_VIII_Erase_3.setVisible(true);lyr_IX_4.setVisible(true);lyr_Levels_5.setVisible(true);
var layersList = [baseLayer,lyr_V_Erase_F_0,lyr_VI_Erase_F_1,lyr_VII_Erase_2,lyr_VIII_Erase_3,lyr_IX_4,lyr_Levels_5];
lyr_V_Erase_F_0.set('fieldAliases', {'Id': 'Id', });
lyr_VI_Erase_F_1.set('fieldAliases', {'Id': 'Id', });
lyr_VII_Erase_2.set('fieldAliases', {'Id': 'Id', });
lyr_VIII_Erase_3.set('fieldAliases', {'Id': 'Id', });
lyr_IX_4.set('fieldAliases', {'Id': 'Id', });
lyr_Levels_5.set('fieldAliases', {'Id': 'Id', 'Level': 'Level', });
lyr_V_Erase_F_0.set('fieldImages', {'Id': 'TextEdit', });
lyr_VI_Erase_F_1.set('fieldImages', {'Id': 'TextEdit', });
lyr_VII_Erase_2.set('fieldImages', {'Id': 'TextEdit', });
lyr_VIII_Erase_3.set('fieldImages', {'Id': 'TextEdit', });
lyr_IX_4.set('fieldImages', {'Id': 'TextEdit', });
lyr_Levels_5.set('fieldImages', {'Id': 'TextEdit', 'Level': 'TextEdit', });
lyr_V_Erase_F_0.set('fieldLabels', {'Id': 'no label', });
lyr_VI_Erase_F_1.set('fieldLabels', {'Id': 'no label', });
lyr_VII_Erase_2.set('fieldLabels', {'Id': 'no label', });
lyr_VIII_Erase_3.set('fieldLabels', {'Id': 'no label', });
lyr_IX_4.set('fieldLabels', {'Id': 'no label', });
lyr_Levels_5.set('fieldLabels', {'Id': 'no label', 'Level': 'no label', });
lyr_Levels_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});