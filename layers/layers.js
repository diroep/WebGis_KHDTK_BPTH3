var wms_layers = [];

var format_Lautan_0 = new ol.format.GeoJSON();
var features_Lautan_0 = format_Lautan_0.readFeatures(json_Lautan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lautan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lautan_0.addFeatures(features_Lautan_0);
var lyr_Lautan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lautan_0, 
                style: style_Lautan_0,
                popuplayertitle: 'Lautan',
                interactive: true,
                title: '<img src="styles/legend/Lautan_0.png" /> Lautan'
            });
var format_Indonesia_1 = new ol.format.GeoJSON();
var features_Indonesia_1 = format_Indonesia_1.readFeatures(json_Indonesia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia_1.addFeatures(features_Indonesia_1);
var lyr_Indonesia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indonesia_1, 
                style: style_Indonesia_1,
                popuplayertitle: 'Indonesia',
                interactive: true,
                title: '<img src="styles/legend/Indonesia_1.png" /> Indonesia'
            });
var format_Nusa_Tenggara_2 = new ol.format.GeoJSON();
var features_Nusa_Tenggara_2 = format_Nusa_Tenggara_2.readFeatures(json_Nusa_Tenggara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nusa_Tenggara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nusa_Tenggara_2.addFeatures(features_Nusa_Tenggara_2);
var lyr_Nusa_Tenggara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nusa_Tenggara_2, 
                style: style_Nusa_Tenggara_2,
                popuplayertitle: 'Nusa_Tenggara',
                interactive: true,
                title: '<img src="styles/legend/Nusa_Tenggara_2.png" /> Nusa_Tenggara'
            });
var format_Bali_3 = new ol.format.GeoJSON();
var features_Bali_3 = format_Bali_3.readFeatures(json_Bali_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bali_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bali_3.addFeatures(features_Bali_3);
var lyr_Bali_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bali_3, 
                style: style_Bali_3,
                popuplayertitle: 'Bali',
                interactive: true,
                title: '<img src="styles/legend/Bali_3.png" /> Bali'
            });
var format_Jawa_4 = new ol.format.GeoJSON();
var features_Jawa_4 = format_Jawa_4.readFeatures(json_Jawa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jawa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jawa_4.addFeatures(features_Jawa_4);
var lyr_Jawa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jawa_4, 
                style: style_Jawa_4,
                popuplayertitle: 'Jawa',
                interactive: true,
                title: '<img src="styles/legend/Jawa_4.png" /> Jawa'
            });
var format_LokasiKHDTK_5 = new ol.format.GeoJSON();
var features_LokasiKHDTK_5 = format_LokasiKHDTK_5.readFeatures(json_LokasiKHDTK_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiKHDTK_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiKHDTK_5.addFeatures(features_LokasiKHDTK_5);
var lyr_LokasiKHDTK_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiKHDTK_5, 
                style: style_LokasiKHDTK_5,
                popuplayertitle: 'Lokasi KHDTK',
                interactive: true,
                title: '<img src="styles/legend/LokasiKHDTK_5.png" /> Lokasi KHDTK'
            });

lyr_Lautan_0.setVisible(true);lyr_Indonesia_1.setVisible(true);lyr_Nusa_Tenggara_2.setVisible(true);lyr_Bali_3.setVisible(true);lyr_Jawa_4.setVisible(true);lyr_LokasiKHDTK_5.setVisible(true);
var layersList = [lyr_Lautan_0,lyr_Indonesia_1,lyr_Nusa_Tenggara_2,lyr_Bali_3,lyr_Jawa_4,lyr_LokasiKHDTK_5];
lyr_Lautan_0.set('fieldAliases', {'FID_Admin0': 'Lautan', 'Raster': 'Raster', 'FID_Ocean': 'FID_Ocean', 'Id': 'Id', });
lyr_Indonesia_1.set('fieldAliases', {'Raster': 'Raster', });
lyr_Nusa_Tenggara_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Bali_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jawa_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_LokasiKHDTK_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Lokasi_1': 'Lokasi Pemerintahan', 'LokasiKawa': 'Lokasi Kawasan', 'Nama': 'Nama', 'Koordina_1': 'Koordinat', 'Luas': 'Luas', 'SK_1': 'SK Penetapan', 'Foto': 'Foto', 'Peta': 'Peta', });
lyr_Lautan_0.set('fieldImages', {'FID_Admin0': 'Hidden', 'Raster': 'Hidden', 'FID_Ocean': 'Hidden', 'Id': 'Hidden', });
lyr_Indonesia_1.set('fieldImages', {'Raster': 'Hidden', });
lyr_Nusa_Tenggara_2.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'PROV': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Bali_3.set('fieldImages', {'OBJECTID': 'Hidden', 'PROV': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Jawa_4.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID': 'Hidden', 'PROV': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_LokasiKHDTK_5.set('fieldImages', {'OBJECTID': 'Hidden', 'Id': 'Hidden', 'Lokasi_1': 'TextEdit', 'LokasiKawa': 'TextEdit', 'Nama': 'TextEdit', 'Koordina_1': 'TextEdit', 'Luas': 'TextEdit', 'SK_1': 'TextEdit', 'Foto': 'ExternalResource', 'Peta': 'ExternalResource', });
lyr_Lautan_0.set('fieldLabels', {});
lyr_Indonesia_1.set('fieldLabels', {});
lyr_Nusa_Tenggara_2.set('fieldLabels', {'PROV': 'no label', });
lyr_Bali_3.set('fieldLabels', {});
lyr_Jawa_4.set('fieldLabels', {});
lyr_LokasiKHDTK_5.set('fieldLabels', {'Lokasi_1': 'inline label - always visible', 'LokasiKawa': 'inline label - always visible', 'Nama': 'inline label - always visible', 'Koordina_1': 'inline label - always visible', 'Luas': 'inline label - always visible', 'SK_1': 'inline label - always visible', 'Foto': 'inline label - always visible', 'Peta': 'inline label - always visible', });
lyr_LokasiKHDTK_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});