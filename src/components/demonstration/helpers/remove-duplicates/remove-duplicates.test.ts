import { IPortalContentPage, removeDuplicates } from "./remove-duplicates";

const expectData1: IPortalContentPage[] = [
  {
    sys: {
      id: "id-45",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-45",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-45",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-34",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-87",
      data: 45,
    },
  },
];

const expectResult1: IPortalContentPage[] = [
  {
    sys: {
      id: "id-45",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-34",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-87",
      data: 45,
    },
  },
];

const expectUnigueData2: IPortalContentPage[] = [
  {
    sys: {
      id: "id-25",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-245",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-45",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-34",
      data: 45,
    },
  },
  {
    sys: {
      id: "id-87",
      data: 45,
    },
  },
];

describe("remove duplictes function", () => {
  test("should remove duplicates", () => {
    expect(removeDuplicates(expectData1)).toEqual(expectResult1);
    expect(removeDuplicates(expectUnigueData2)).toEqual(expectUnigueData2);
    expect(removeDuplicates([])).toEqual([]);
  });
});
