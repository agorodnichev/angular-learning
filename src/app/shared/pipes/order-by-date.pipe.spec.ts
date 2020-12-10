import { OrderByDatePipe } from './order-by-date.pipe';

describe('OrderByDatePipe', () => {

  const mockData = [
    {id: 1,isTopRated: true, name: 'Angular development', date: new Date(2020, 9, 30), length: 148, description: 'test'},
    {id: 2,isTopRated: false, name: 'ReactJs development', date: new Date(2020, 9, 25), length: 2000, description: 'test'},
  ];

  it('create an instance', () => {
    const pipe = new OrderByDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should return data in correct ascending order (by creation date)', () => {
    const pipe = new OrderByDatePipe();
    expect(pipe.transform(mockData)).toEqual(
      [
        {id: 2,isTopRated: false, name: 'ReactJs development', date: new Date(2020, 9, 25), length: 2000, description: 'test'},
        {id: 1,isTopRated: true, name: 'Angular development', date: new Date(2020, 9, 30), length: 148, description: 'test'}
      ]
    );
  });

});
