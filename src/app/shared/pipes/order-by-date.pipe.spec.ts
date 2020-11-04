import { OrderByDatePipe } from './order-by-date.pipe';

describe('OrderByDatePipe', () => {

  const mockData = [
    {id: 1, topRated: true, title: 'Angular development', creationDate: new Date(2020, 9, 30), duration: 148, description: 'test'},
    {id: 2, topRated: false, title: 'ReactJs development', creationDate: new Date(2020, 9, 25), duration: 2000, description: 'test'},
  ];

  it('create an instance', () => {
    const pipe = new OrderByDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should return data in correct ascending order (by creation date)', () => {
    const pipe = new OrderByDatePipe();
    expect(pipe.transform(mockData)).toEqual(
      [
        {id: 2, topRated: false, title: 'ReactJs development', creationDate: new Date(2020, 9, 25), duration: 2000, description: 'test'},
        {id: 1, topRated: true, title: 'Angular development', creationDate: new Date(2020, 9, 30), duration: 148, description: 'test'}
      ]
    );
  });

});
