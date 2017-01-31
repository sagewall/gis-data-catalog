import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let datasets = [
      {
        'id': 1,
        'name': 'Parcels',
        'date': '1/1/2017',
        'about': 'Robot ipsum datus scan amet, constructor ad ut splicing elit, sed do errus mod tempor in conduit ut ' +
        'laboratory et deplore electromagna aliqua. Ut enim ad minimum veniam, quis no indestruct exoform ullamco ' +
        'laboris nisi ut alius equip ex ea commando evaluant. Duis ex machina aute ire dolorus in scan detectus an ' +
        'voluptate volt esse cesium dolore eu futile nulla parameter. Execute primus sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui technia deserunt mondus anim id est proceus.',

        'thumbnailUrl': 'assets/images/parcels.png',
        'downloadUrl': '//www.denvergov.org/media/gis/DataCatalog/parcels/shape/parcels.zip',
        'previewUrl': '//maps.jeffco.us/arcgis/rest/services/jMap/Parcel/MapServer?f=jsapi'
      }, {
        'id': 2,
        'name': 'Zoning',
        'date': '1/1/2017',
        'about': 'Robot ipsum datus scan amet, constructor ad ut splicing elit, sed do errus mod tempor in conduit ut ' +
        'laboratory et deplore electromagna aliqua. Ut enim ad minimum veniam, quis no indestruct exoform ullamco ' +
        'laboris nisi ut alius equip ex ea commando evaluant. Duis ex machina aute ire dolorus in scan detectus an ' +
        'voluptate volt esse cesium dolore eu futile nulla parameter. Execute primus sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui technia deserunt mondus anim id est proceus.',

        'thumbnailUrl': 'assets/images/parcels.png',
        'downloadUrl': '//www.denvergov.org/media/gis/DataCatalog/zoning/shape/zoning.zip',
        'previewUrl': '//maps.jeffco.us/arcgis/rest/services/jMap/Zoning/MapServer?f=jsapi'
      }
    ];
    return {datasets};
  }
}
