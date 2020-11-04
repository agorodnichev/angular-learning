import { FilterByTextPipe } from './filter-by-text.pipe';

describe('FilterByTextPipe', () => {

  const mockData = [
    {id: 1, topRated: true, title: 'Angular development', creationDate: new Date(2020, 9, 30), duration: 148, description: 'test'},
    {id: 2, topRated: false, title: 'ReactJs development', creationDate: new Date(2020, 9, 25), duration: 2000, description: 'test'},
    {id: 3, topRated: false, title: 'VueJS development', creationDate: new Date(2020, 10, 19), duration: 3000, description: 'test'},
    {id: 4, topRated: true, title: 'Java development', creationDate: new Date(2020, 11, 20), duration: 4000, description: 'test'},
    {id: 5, topRated: false, title: 'Go development', creationDate: new Date(2020, 8, 1), duration: 50, description: 'test'},
  ];

  it('create an instance', () => {
    const pipe = new FilterByTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should filtered data', () => {
    const pipe = new FilterByTextPipe();
    expect(pipe.transform(mockData, 'GO')).toEqual(
      [{id: 5, topRated: false, title: 'Go development', creationDate: new Date(2020, 8, 1), duration: 50, description: 'test'}]
    );
  });

});
