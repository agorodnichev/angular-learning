import { FilterByTextPipe } from './filter-by-text.pipe';

describe('FilterByTextPipe', () => {

  const mockData = [
    {id: 1,isTopRated: true, name: 'Angular development', date: new Date(2020, 9, 30), length: 148, description: 'test'},
    {id: 2,isTopRated: false, name: 'ReactJs development', date: new Date(2020, 9, 25), length: 2000, description: 'test'},
    {id: 3,isTopRated: false, name: 'VueJS development', date: new Date(2020, 10, 19), length: 3000, description: 'test'},
    {id: 4,isTopRated: true, name: 'Java development', date: new Date(2020, 11, 20), length: 4000, description: 'test'},
    {id: 5,isTopRated: false, name: 'Go development', date: new Date(2020, 8, 1), length: 50, description: 'test'},
  ];

  it('create an instance', () => {
    const pipe = new FilterByTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should filtered data', () => {
    const pipe = new FilterByTextPipe();
    expect(pipe.transform(mockData, 'GO')).toEqual(
      [{id: 5,isTopRated: false, name: 'Go development', date: new Date(2020, 8, 1), length: 50, description: 'test'}]
    );
  });

});
