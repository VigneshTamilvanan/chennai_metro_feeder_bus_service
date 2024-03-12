var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_5minWalkableZonefromSmallbusroutesviaMetro_1 = new ol.format.GeoJSON();
var features_5minWalkableZonefromSmallbusroutesviaMetro_1 = format_5minWalkableZonefromSmallbusroutesviaMetro_1.readFeatures(json_5minWalkableZonefromSmallbusroutesviaMetro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5minWalkableZonefromSmallbusroutesviaMetro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5minWalkableZonefromSmallbusroutesviaMetro_1.addFeatures(features_5minWalkableZonefromSmallbusroutesviaMetro_1);
var lyr_5minWalkableZonefromSmallbusroutesviaMetro_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5minWalkableZonefromSmallbusroutesviaMetro_1, 
                style: style_5minWalkableZonefromSmallbusroutesviaMetro_1,
                interactive: false,
                title: '<img src="styles/legend/5minWalkableZonefromSmallbusroutesviaMetro_1.png" /> 5min Walkable Zone from Small bus routes via Metro '
            });
var format_5minWalkableZonefromCMRLFeedersmallbusroutes_2 = new ol.format.GeoJSON();
var features_5minWalkableZonefromCMRLFeedersmallbusroutes_2 = format_5minWalkableZonefromCMRLFeedersmallbusroutes_2.readFeatures(json_5minWalkableZonefromCMRLFeedersmallbusroutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5minWalkableZonefromCMRLFeedersmallbusroutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5minWalkableZonefromCMRLFeedersmallbusroutes_2.addFeatures(features_5minWalkableZonefromCMRLFeedersmallbusroutes_2);
var lyr_5minWalkableZonefromCMRLFeedersmallbusroutes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5minWalkableZonefromCMRLFeedersmallbusroutes_2, 
                style: style_5minWalkableZonefromCMRLFeedersmallbusroutes_2,
                interactive: false,
                title: '<img src="styles/legend/5minWalkableZonefromCMRLFeedersmallbusroutes_2.png" /> 5min Walkable Zone from CMRL Feeder small bus routes'
            });
var format_Roadsaccessiblewithinwalkablezone_3 = new ol.format.GeoJSON();
var features_Roadsaccessiblewithinwalkablezone_3 = format_Roadsaccessiblewithinwalkablezone_3.readFeatures(json_Roadsaccessiblewithinwalkablezone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadsaccessiblewithinwalkablezone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadsaccessiblewithinwalkablezone_3.addFeatures(features_Roadsaccessiblewithinwalkablezone_3);
var lyr_Roadsaccessiblewithinwalkablezone_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roadsaccessiblewithinwalkablezone_3, 
                style: style_Roadsaccessiblewithinwalkablezone_3,
                interactive: false,
                title: '<img src="styles/legend/Roadsaccessiblewithinwalkablezone_3.png" /> Roads accessible within walkable zone'
            });
var format_ChennaiCentraltoStThomasMountGreenLine_4 = new ol.format.GeoJSON();
var features_ChennaiCentraltoStThomasMountGreenLine_4 = format_ChennaiCentraltoStThomasMountGreenLine_4.readFeatures(json_ChennaiCentraltoStThomasMountGreenLine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChennaiCentraltoStThomasMountGreenLine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChennaiCentraltoStThomasMountGreenLine_4.addFeatures(features_ChennaiCentraltoStThomasMountGreenLine_4);
var lyr_ChennaiCentraltoStThomasMountGreenLine_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChennaiCentraltoStThomasMountGreenLine_4, 
                style: style_ChennaiCentraltoStThomasMountGreenLine_4,
                interactive: false,
                title: '<img src="styles/legend/ChennaiCentraltoStThomasMountGreenLine_4.png" /> Chennai Central to St.Thomas Mount- Green Line'
            });
var format_AirporttoWimcoNagarBlueLine_5 = new ol.format.GeoJSON();
var features_AirporttoWimcoNagarBlueLine_5 = format_AirporttoWimcoNagarBlueLine_5.readFeatures(json_AirporttoWimcoNagarBlueLine_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirporttoWimcoNagarBlueLine_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirporttoWimcoNagarBlueLine_5.addFeatures(features_AirporttoWimcoNagarBlueLine_5);
var lyr_AirporttoWimcoNagarBlueLine_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AirporttoWimcoNagarBlueLine_5, 
                style: style_AirporttoWimcoNagarBlueLine_5,
                interactive: false,
                title: '<img src="styles/legend/AirporttoWimcoNagarBlueLine_5.png" /> Airport to Wimco Nagar - Blue Line'
            });
var format_SmallBusRoutesviaMetroStation_6 = new ol.format.GeoJSON();
var features_SmallBusRoutesviaMetroStation_6 = format_SmallBusRoutesviaMetroStation_6.readFeatures(json_SmallBusRoutesviaMetroStation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmallBusRoutesviaMetroStation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmallBusRoutesviaMetroStation_6.addFeatures(features_SmallBusRoutesviaMetroStation_6);
var lyr_SmallBusRoutesviaMetroStation_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SmallBusRoutesviaMetroStation_6, 
                style: style_SmallBusRoutesviaMetroStation_6,
                interactive: true,
                title: '<img src="styles/legend/SmallBusRoutesviaMetroStation_6.png" /> Small Bus Routes via Metro Station'
            });
var format_SmallBusStopsviaMetroStation_7 = new ol.format.GeoJSON();
var features_SmallBusStopsviaMetroStation_7 = format_SmallBusStopsviaMetroStation_7.readFeatures(json_SmallBusStopsviaMetroStation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmallBusStopsviaMetroStation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmallBusStopsviaMetroStation_7.addFeatures(features_SmallBusStopsviaMetroStation_7);
var lyr_SmallBusStopsviaMetroStation_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SmallBusStopsviaMetroStation_7, 
                style: style_SmallBusStopsviaMetroStation_7,
                interactive: true,
                title: '<img src="styles/legend/SmallBusStopsviaMetroStation_7.png" /> Small Bus Stops via Metro Station'
            });
var format_DirectCMRLFeederSmallBusRoutes_8 = new ol.format.GeoJSON();
var features_DirectCMRLFeederSmallBusRoutes_8 = format_DirectCMRLFeederSmallBusRoutes_8.readFeatures(json_DirectCMRLFeederSmallBusRoutes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectCMRLFeederSmallBusRoutes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectCMRLFeederSmallBusRoutes_8.addFeatures(features_DirectCMRLFeederSmallBusRoutes_8);
var lyr_DirectCMRLFeederSmallBusRoutes_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectCMRLFeederSmallBusRoutes_8, 
                style: style_DirectCMRLFeederSmallBusRoutes_8,
                interactive: true,
                title: '<img src="styles/legend/DirectCMRLFeederSmallBusRoutes_8.png" /> Direct CMRL Feeder Small Bus Routes'
            });
var format_DirectCMRLFeederSmallBusStops_9 = new ol.format.GeoJSON();
var features_DirectCMRLFeederSmallBusStops_9 = format_DirectCMRLFeederSmallBusStops_9.readFeatures(json_DirectCMRLFeederSmallBusStops_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DirectCMRLFeederSmallBusStops_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DirectCMRLFeederSmallBusStops_9.addFeatures(features_DirectCMRLFeederSmallBusStops_9);
var lyr_DirectCMRLFeederSmallBusStops_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DirectCMRLFeederSmallBusStops_9, 
                style: style_DirectCMRLFeederSmallBusStops_9,
                interactive: true,
                title: '<img src="styles/legend/DirectCMRLFeederSmallBusStops_9.png" /> Direct CMRL Feeder Small Bus Stops'
            });
var format_GreenLineMetroStations_10 = new ol.format.GeoJSON();
var features_GreenLineMetroStations_10 = format_GreenLineMetroStations_10.readFeatures(json_GreenLineMetroStations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenLineMetroStations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenLineMetroStations_10.addFeatures(features_GreenLineMetroStations_10);
var lyr_GreenLineMetroStations_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GreenLineMetroStations_10, 
                style: style_GreenLineMetroStations_10,
                interactive: true,
                title: '<img src="styles/legend/GreenLineMetroStations_10.png" /> Green Line Metro Stations'
            });
var format_BlueLineMetroStations_11 = new ol.format.GeoJSON();
var features_BlueLineMetroStations_11 = format_BlueLineMetroStations_11.readFeatures(json_BlueLineMetroStations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueLineMetroStations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueLineMetroStations_11.addFeatures(features_BlueLineMetroStations_11);
var lyr_BlueLineMetroStations_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BlueLineMetroStations_11, 
                style: style_BlueLineMetroStations_11,
                interactive: true,
                title: '<img src="styles/legend/BlueLineMetroStations_11.png" /> Blue Line Metro Stations'
            });

lyr_Basemap_0.setVisible(true);lyr_5minWalkableZonefromSmallbusroutesviaMetro_1.setVisible(true);lyr_5minWalkableZonefromCMRLFeedersmallbusroutes_2.setVisible(true);lyr_Roadsaccessiblewithinwalkablezone_3.setVisible(true);lyr_ChennaiCentraltoStThomasMountGreenLine_4.setVisible(true);lyr_AirporttoWimcoNagarBlueLine_5.setVisible(true);lyr_SmallBusRoutesviaMetroStation_6.setVisible(true);lyr_SmallBusStopsviaMetroStation_7.setVisible(true);lyr_DirectCMRLFeederSmallBusRoutes_8.setVisible(true);lyr_DirectCMRLFeederSmallBusStops_9.setVisible(true);lyr_GreenLineMetroStations_10.setVisible(true);lyr_BlueLineMetroStations_11.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_5minWalkableZonefromSmallbusroutesviaMetro_1,lyr_5minWalkableZonefromCMRLFeedersmallbusroutes_2,lyr_Roadsaccessiblewithinwalkablezone_3,lyr_ChennaiCentraltoStThomasMountGreenLine_4,lyr_AirporttoWimcoNagarBlueLine_5,lyr_SmallBusRoutesviaMetroStation_6,lyr_SmallBusStopsviaMetroStation_7,lyr_DirectCMRLFeederSmallBusRoutes_8,lyr_DirectCMRLFeederSmallBusStops_9,lyr_GreenLineMetroStations_10,lyr_BlueLineMetroStations_11];
lyr_5minWalkableZonefromSmallbusroutesviaMetro_1.set('fieldAliases', {'Stop Name': 'Stop Name', 'contour': 'contour', 'profile': 'profile', 'options': 'options', 'metric': 'metric', });
lyr_5minWalkableZonefromCMRLFeedersmallbusroutes_2.set('fieldAliases', {'Stop Name': 'Stop Name', 'contour': 'contour', 'profile': 'profile', 'options': 'options', 'metric': 'metric', 'layer': 'layer', 'path': 'path', });
lyr_Roadsaccessiblewithinwalkablezone_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_ChennaiCentraltoStThomasMountGreenLine_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_AirporttoWimcoNagarBlueLine_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Shape_Leng': 'Shape_Leng', });
lyr_SmallBusRoutesviaMetroStation_6.set('fieldAliases', {'ROUTE': 'ROUTE', 'FROM': 'FROM', 'TO': 'TO', 'TOTAL': 'TOTAL', 'ROUTE LENG': 'ROUTE LENG', 'FREQUENCY': 'FREQUENCY', 'PASSENGER/': 'PASSENGER/', 'Route_id': 'Route_id', 'Metro': 'Metro', 'metro_feed': 'metro_feed', });
lyr_SmallBusStopsviaMetroStation_7.set('fieldAliases', {'Stop Id': 'Stop Id', 'Stop Name': 'Stop Name', 'Stop lat': 'Stop lat', 'Stop lon': 'Stop lon', });
lyr_DirectCMRLFeederSmallBusRoutes_8.set('fieldAliases', {'ROUTE': 'ROUTE', 'FROM': 'FROM', 'TO': 'TO', 'TOTAL': 'TOTAL', 'ROUTE LENG': 'ROUTE LENG', 'FREQUENCY': 'FREQUENCY', 'PASSENGER/': 'PASSENGER/', 'Route_id': 'Route_id', 'Metro': 'Metro', 'metro_feed': 'metro_feed', });
lyr_DirectCMRLFeederSmallBusStops_9.set('fieldAliases', {'Stop Id': 'Stop Id', 'Stop Name': 'Stop Name', 'Stop lat': 'Stop lat', 'Stop lon': 'Stop lon', });
lyr_GreenLineMetroStations_10.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Ridership_': 'Ridership_', });
lyr_BlueLineMetroStations_11.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'Ridership_': 'Ridership_', });
lyr_5minWalkableZonefromSmallbusroutesviaMetro_1.set('fieldImages', {'Stop Name': 'TextEdit', 'contour': 'TextEdit', 'profile': 'TextEdit', 'options': 'TextEdit', 'metric': 'TextEdit', });
lyr_5minWalkableZonefromCMRLFeedersmallbusroutes_2.set('fieldImages', {'Stop Name': '', 'contour': '', 'profile': '', 'options': '', 'metric': '', 'layer': '', 'path': '', });
lyr_Roadsaccessiblewithinwalkablezone_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', });
lyr_ChennaiCentraltoStThomasMountGreenLine_4.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_AirporttoWimcoNagarBlueLine_5.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_SmallBusRoutesviaMetroStation_6.set('fieldImages', {'ROUTE': 'TextEdit', 'FROM': 'TextEdit', 'TO': 'TextEdit', 'TOTAL': 'TextEdit', 'ROUTE LENG': 'TextEdit', 'FREQUENCY': 'TextEdit', 'PASSENGER/': 'TextEdit', 'Route_id': 'TextEdit', 'Metro': 'TextEdit', 'metro_feed': 'TextEdit', });
lyr_SmallBusStopsviaMetroStation_7.set('fieldImages', {'Stop Id': 'TextEdit', 'Stop Name': 'TextEdit', 'Stop lat': 'TextEdit', 'Stop lon': 'TextEdit', });
lyr_DirectCMRLFeederSmallBusRoutes_8.set('fieldImages', {'ROUTE': 'TextEdit', 'FROM': 'TextEdit', 'TO': 'TextEdit', 'TOTAL': 'TextEdit', 'ROUTE LENG': 'TextEdit', 'FREQUENCY': 'TextEdit', 'PASSENGER/': 'TextEdit', 'Route_id': 'TextEdit', 'Metro': 'TextEdit', 'metro_feed': 'TextEdit', });
lyr_DirectCMRLFeederSmallBusStops_9.set('fieldImages', {'Stop Id': 'TextEdit', 'Stop Name': 'TextEdit', 'Stop lat': 'TextEdit', 'Stop lon': 'TextEdit', });
lyr_GreenLineMetroStations_10.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Ridership_': 'TextEdit', });
lyr_BlueLineMetroStations_11.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'Ridership_': 'TextEdit', });
lyr_5minWalkableZonefromSmallbusroutesviaMetro_1.set('fieldLabels', {'Stop Name': 'no label', 'contour': 'no label', 'profile': 'no label', 'options': 'no label', 'metric': 'no label', });
lyr_5minWalkableZonefromCMRLFeedersmallbusroutes_2.set('fieldLabels', {'Stop Name': 'no label', 'contour': 'no label', 'profile': 'no label', 'options': 'no label', 'metric': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Roadsaccessiblewithinwalkablezone_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_ChennaiCentraltoStThomasMountGreenLine_4.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_AirporttoWimcoNagarBlueLine_5.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'Shape_Leng': 'no label', });
lyr_SmallBusRoutesviaMetroStation_6.set('fieldLabels', {'ROUTE': 'inline label - always visible', 'FROM': 'inline label - always visible', 'TO': 'inline label - always visible', 'TOTAL': 'hidden field', 'ROUTE LENG': 'hidden field', 'FREQUENCY': 'hidden field', 'PASSENGER/': 'hidden field', 'Route_id': 'hidden field', 'Metro': 'hidden field', 'metro_feed': 'hidden field', });
lyr_SmallBusStopsviaMetroStation_7.set('fieldLabels', {'Stop Id': 'hidden field', 'Stop Name': 'inline label - always visible', 'Stop lat': 'hidden field', 'Stop lon': 'hidden field', });
lyr_DirectCMRLFeederSmallBusRoutes_8.set('fieldLabels', {'ROUTE': 'inline label - always visible', 'FROM': 'inline label - always visible', 'TO': 'inline label - always visible', 'TOTAL': 'hidden field', 'ROUTE LENG': 'hidden field', 'FREQUENCY': 'hidden field', 'PASSENGER/': 'hidden field', 'Route_id': 'hidden field', 'Metro': 'hidden field', 'metro_feed': 'hidden field', });
lyr_DirectCMRLFeederSmallBusStops_9.set('fieldLabels', {'Stop Id': 'hidden field', 'Stop Name': 'inline label - always visible', 'Stop lat': 'hidden field', 'Stop lon': 'hidden field', });
lyr_GreenLineMetroStations_10.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'Ridership_': 'hidden field', });
lyr_BlueLineMetroStations_11.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'Ridership_': 'hidden field', });
lyr_BlueLineMetroStations_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});