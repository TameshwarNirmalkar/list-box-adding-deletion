"use client";
import AddListComponent from "@/components/AddList";
import { memo, useCallback, useEffect, useState } from "react";

const AddListWrapper = () => {
  useEffect(() => {
    console.log("Mount component");

    return () => {
      console.log("unmount");
    };
  }, []);

  const [tList, setTList] = useState([
    { label: "title 1", id: 1, isComplete: false },
    { label: "title 2", id: 2, isComplete: false },
    { label: "title 3", id: 3, isComplete: false },
  ]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  //   const tList = useMemo(() => {
  //     return [
  //   { label: "title 1", id: 1, isComplete: false },
  //   { label: "title 2", id: 2, isComplete: false },
  //   { label: "title 3", id: 3, isComplete: false },
  //     ];
  //   }, []);

  const onItemChangeHandler = useCallback(
    (item: any) => {
      //   console.log("onItemChangeHandler", tList);
      //   const newList = tList.map((el) => (el.id === item.id ? { ...el, isComplete: !item.isComplete } : { ...el }));
      //   console.log("newList", newList);
      //   setTList(newList);
      const hasId = selectedIds.includes(item.id);
      if (hasId) {
        setSelectedIds(selectedIds.filter((id: number) => id !== item.id));
      } else {
        setSelectedIds([...selectedIds, item.id]);
      }
    },
    [selectedIds]
  );

  const onItemDeleteHandler = useCallback((item: any) => {
    console.log("onItemDeleteHandler", item);
  }, []);

  return (
    <>
      {JSON.stringify(selectedIds)}
      <AddListComponent titleList={tList} onItemChange={onItemChangeHandler} onItemDelete={onItemDeleteHandler} />
    </>
  );
};

export default memo(AddListWrapper);
