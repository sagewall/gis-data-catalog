import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let datasets = [
      {
        'id': 1,
        'name': 'Address',
        'date': '1/1/2017',
        'about': 'Robot ipsum datus scan amet, constructor ad ut splicing elit, sed do errus mod tempor in conduit ut ' +
        'laboratory et deplore electromagna aliqua. Ut enim ad minimum veniam, quis no indestruct exoform ullamco ' +
        'laboris nisi ut alius equip ex ea commando evaluant. Duis ex machina aute ire dolorus in scan detectus an ' +
        'voluptate volt esse cesium dolore eu futile nulla parameter. Execute primus sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui technia deserunt mondus anim id est proceus.',

        'downloadUrl': 'https://www.denvergov.org/media/gis/DataCatalog/addresses/shape/addresses.zip',
        'dynamicMapLayer': '//mapservices2.jeffco.us/arcgis/rest/services/jMap/Address/MapServer',
        'lat': 39.728,
        'lon': -105.202,
        'zoom': 16
      }, {
        'id': 2,
        'name': 'Street',
        'date': '1/1/2017',
        'about': 'Robot ipsum datus scan amet, constructor ad ut splicing elit, sed do errus mod tempor in conduit ut ' +
        'laboratory et deplore electromagna aliqua. Ut enim ad minimum veniam, quis no indestruct exoform ullamco ' +
        'laboris nisi ut alius equip ex ea commando evaluant. Duis ex machina aute ire dolorus in scan detectus an ' +
        'voluptate volt esse cesium dolore eu futile nulla parameter. Execute primus sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui technia deserunt mondus anim id est proceus.',

        'downloadUrl': 'https://www.denvergov.org/media/gis/DataCatalog/street_centerline/shape/street_centerline.zip',
        'dynamicMapLayer': '//mapservices1.jeffco.us/arcgis/rest/services/jMap/Street/MapServer',
        'lat': 39.728,
        'lon': -105.202,
        'zoom': 13
      }
    ];
    return {datasets};
  }
}
