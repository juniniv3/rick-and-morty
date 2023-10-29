import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LocationService } from './location.service';
import { Location } from '../models/Location';

describe('LocationService', () => {
  let locationService: LocationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService]
    });

    locationService = TestBed.inject(LocationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(locationService).toBeTruthy();
  });

  it('should get a location by ID', () => {
    const locationID = 1234567;
    const expectedLocation: Location = {
      id: 1234567,
      created: "2023-06-12",
      dimension: "test dimension",
      name: "test location",
      type: "type test",
      url: "test url",
      residents: ["test1","test2","test3"]
    };

    locationService.getLocation(locationID).subscribe((location) => {
      expect(location).toEqual(expectedLocation);
    });

    const req = httpTestingController.expectOne(`${locationService['endPoint']}/${locationID}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedLocation);

    httpTestingController.verify();
  });
});
