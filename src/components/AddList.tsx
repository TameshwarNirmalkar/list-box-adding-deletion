import { memo, useCallback } from "react";

interface TitleI {
  id: number;
  label: string;
  isComplete: boolean;
  description: string;
}

interface AddListI {
  onItemDelete: (item: any) => void;
  onItemChange: (item: any) => void;
  titleList: TitleI[];
  selectedList: number[];
}

const AddListComponent = ({ titleList, onItemChange, onItemDelete, selectedList }: AddListI) => {
  const onItemChangeHandler = useCallback(
    (item: any) => {
      onItemChange(item);
    },
    [onItemDelete]
  );

  const onItemDeleteHandler = useCallback(
    (item: any) => {
      onItemDelete(item);
    },
    [onItemDelete]
  );

  return (
    <div>
      {/* <div className=" bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold flex justify-between">
            <span>Event Name</span>
            <span>{selectedList.length}</span>
          </div>
          <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {titleList.map((title: TitleI) => {
              return (
                <li
                  key={title.id}
                  className="flex justify-between hover:bg-gray-600 rounded hover:text-white-700 w-full px-4 py-2 border-gray-200 dark:border-gray-600"
                >
                  <span
                    className={`text-sm cursor-pointer ${selectedList.includes(title.id) ? "text-red-500" : ""}`}
                    onClick={() => onItemChangeHandler(title)}
                  >
                    {title.label}
                  </span>
                  <span
                    className="cursor-pointer rounded-full border-solid border border-red-500 bg-red-800 flex w-5 justify-center text-sm"
                    onClick={() => onItemDeleteHandler(title)}
                  >
                    D
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}

      <div className="flex h-screen w-full flex-col justify-center gap-y-2">
        <div className="w-[300px] rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100">
          <div className="flex items-center justify-between px-2 text-base font-medium text-gray-700">
            <div>Event List</div>
            <div>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white">
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex max-h-[400px] w-full flex-col overflow-y-auto">
              {titleList.map((title: TitleI) => (
                <button
                  key={title.id}
                  className={`group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-orange-100 ${
                    selectedList.includes(title.id) ? "bg-orange-200" : ""
                  }`}
                  onClick={() => onItemChangeHandler(title)}
                >
                  <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-orange-200">
                    <span className="tag w-full text-center text-2xl font-medium text-orange-600 group-hover:text-orange-600 uppercase">
                      {title.label.charAt(0)}
                    </span>
                  </div>
                  <div className="flex flex-col items-start justify-between font-light text-gray-600">
                    <p className="text-[15px] text-black-600 capitalize">{title.label}</p>
                    <span className="text-xs font-light text-orange-400">{title.description}</span>
                  </div>
                </button>
              ))}
              {/* <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                  <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">
                    <svg
                      className="mx-auto h-6 w-6"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                  <p className="text-[15px]">Checklist</p>
                  <span className="text-xs font-light text-gray-400">create a to-do or checklist</span>
                </div>
              </button>
              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                  <span className="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"> H1 </span>
                </div>
                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                  <p className="text-[15px]">Heading 1</p>
                  <span className="text-xs font-light text-gray-400">Big section heading</span>
                </div>
              </button>
              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                  <span className="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"> H2 </span>
                </div>
                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                  <p className="text-[15px]">Heading 2</p>
                  <span className="text-xs font-light text-gray-400">Medium section heading</span>
                </div>
              </button>
              <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100">
                <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                  <span className="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"> H3 </span>
                </div>
                <div className="flex flex-col items-start justify-between font-light text-gray-600">
                  <p className="text-[15px]">Heading 3</p>
                  <span className="text-xs font-light text-gray-400">small section heading</span>
                </div>
              </button> */}
            </div>
          </div>
        </div>

        <div className="flex w-[300px] justify-start gap-x-3 rounded-lg border border-gray-700 bg-gray-700 px-4 py-2">
          <p className="text-sm text-white">Add +</p>
        </div>
      </div>
    </div>
  );
};

AddListComponent.displayName = "AddListComponent";

export default memo(AddListComponent);
