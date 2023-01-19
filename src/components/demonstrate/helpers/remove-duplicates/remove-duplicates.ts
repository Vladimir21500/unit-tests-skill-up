export interface IPortalContentPage {
  sys: {
    id: string;
    data: any;
  };
}

export const removeDuplicates = (array: IPortalContentPage[]) =>
  array.filter((element, index) => {
    const arrayOfIds = array.map((el) => el.sys.id);

    return arrayOfIds.indexOf(element.sys.id) === index;
  });
