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
var format_VI_0 = new ol.format.GeoJSON();
var features_VI_0 = format_VI_0.readFeatures(json_VI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VI_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_VI_0.addFeatures(features_VI_0);var lyr_VI_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VI_0, 
                style: style_VI_0,
                title: '<img src="styles/legend/VI_0.png" /> VI'
            });var format_V_Erased_1 = new ol.format.GeoJSON();
var features_V_Erased_1 = format_V_Erased_1.readFeatures(json_V_Erased_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_V_Erased_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_V_Erased_1.addFeatures(features_V_Erased_1);var lyr_V_Erased_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_V_Erased_1, 
                style: style_V_Erased_1,
                title: '<img src="styles/legend/V_Erased_1.png" /> V_Erased'
            });var format_IV_Erase_F_2 = new ol.format.GeoJSON();
var features_IV_Erase_F_2 = format_IV_Erase_F_2.readFeatures(json_IV_Erase_F_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IV_Erase_F_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_IV_Erase_F_2.addFeatures(features_IV_Erase_F_2);var lyr_IV_Erase_F_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IV_Erase_F_2, 
                style: style_IV_Erase_F_2,
                title: '<img src="styles/legend/IV_Erase_F_2.png" /> IV_Erase_F'
            });var format_III_Erase1_F_3 = new ol.format.GeoJSON();
var features_III_Erase1_F_3 = format_III_Erase1_F_3.readFeatures(json_III_Erase1_F_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_III_Erase1_F_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_III_Erase1_F_3.addFeatures(features_III_Erase1_F_3);var lyr_III_Erase1_F_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_III_Erase1_F_3, 
                style: style_III_Erase1_F_3,
                title: '<img src="styles/legend/III_Erase1_F_3.png" /> III_Erase1_F'
            });var format_II_Erase_F_4 = new ol.format.GeoJSON();
var features_II_Erase_F_4 = format_II_Erase_F_4.readFeatures(json_II_Erase_F_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_II_Erase_F_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_II_Erase_F_4.addFeatures(features_II_Erase_F_4);var lyr_II_Erase_F_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_II_Erase_F_4, 
                style: style_II_Erase_F_4,
                title: '<img src="styles/legend/II_Erase_F_4.png" /> II_Erase_F'
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

lyr_VI_0.setVisible(true);lyr_V_Erased_1.setVisible(true);lyr_IV_Erase_F_2.setVisible(true);lyr_III_Erase1_F_3.setVisible(true);lyr_II_Erase_F_4.setVisible(true);lyr_Levels_5.setVisible(true);
var layersList = [baseLayer,lyr_VI_0,lyr_V_Erased_1,lyr_IV_Erase_F_2,lyr_III_Erase1_F_3,lyr_II_Erase_F_4,lyr_Levels_5];
lyr_VI_0.set('fieldAliases', {'Id': 'Id', });
lyr_V_Erased_1.set('fieldAliases', {'Id': 'Id', });
lyr_IV_Erase_F_2.set('fieldAliases', {'Id': 'Id', });
lyr_III_Erase1_F_3.set('fieldAliases', {'Id': 'Id', });
lyr_II_Erase_F_4.set('fieldAliases', {'Id': 'Id', 'Level': 'Level', });
lyr_Levels_5.set('fieldAliases', {'Id': 'Id', 'Level': 'Level', });
lyr_VI_0.set('fieldImages', {'Id': 'TextEdit', });
lyr_V_Erased_1.set('fieldImages', {'Id': 'TextEdit', });
lyr_IV_Erase_F_2.set('fieldImages', {'Id': 'TextEdit', });
lyr_III_Erase1_F_3.set('fieldImages', {'Id': 'TextEdit', });
lyr_II_Erase_F_4.set('fieldImages', {'Id': 'TextEdit', 'Level': 'TextEdit', });
lyr_Levels_5.set('fieldImages', {'Id': 'TextEdit', 'Level': 'TextEdit', });
lyr_VI_0.set('fieldLabels', {'Id': 'no label', });
lyr_V_Erased_1.set('fieldLabels', {'Id': 'no label', });
lyr_IV_Erase_F_2.set('fieldLabels', {'Id': 'no label', });
lyr_III_Erase1_F_3.set('fieldLabels', {'Id': 'no label', });
lyr_II_Erase_F_4.set('fieldLabels', {'Id': 'no label', 'Level': 'no label', });
lyr_Levels_5.set('fieldLabels', {'Id': 'no label', 'Level': 'no label', });
lyr_Levels_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});