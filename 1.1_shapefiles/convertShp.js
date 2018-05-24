const shp = require('shapefile')
const shpPath = 'data/shp/'
const geojsonPath = 'data/geojson/'
const jf = require('jsonfile')



shp.read(shpPath + 'ne_110m_admin_0_countries', function(err,json) {
	console.log(json)
})