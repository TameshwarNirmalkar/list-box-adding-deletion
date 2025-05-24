import { memo, useCallback } from "react";

interface TitleI {
  id: number;
  label: string;
  isComplete: boolean;
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
    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {titleList.map((title: TitleI) => {
        return (
          <li key={title.id} className="flex justify-between hover:bg-gray-600 hover:text-white-700 w-full px-4 py-2 border-gray-200 dark:border-gray-600">
            <span className={`text-sm cursor-pointer ${selectedList.includes(title.id) ? "text-red-500" : ""}`} onClick={() => onItemChangeHandler(title)}>
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
  );
};

AddListComponent.displayName = "AddListComponent";

export default memo(AddListComponent);
