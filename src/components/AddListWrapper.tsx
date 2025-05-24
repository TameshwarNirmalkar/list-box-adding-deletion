"use client";
import AddListComponent from "@/components/AddList";
import { memo, useCallback, useEffect, useRef, useState } from "react";

const AddListWrapper = () => {
  const idsRef = useRef<number[]>([]);

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

  const onItemChangeHandler = (item: any) => {
    // const hasId = selectedIds.includes(item.id);
    // console.log(hasId, "selectedIds", selectedIds);
    // if (hasId) {
    //   setSelectedIds((oldState) => [...oldState.filter((id: number) => id !== item.id)]);
    // } else {
    //   setSelectedIds((oldIds) => [...oldIds, item.id]);
    // }
    const hasId = idsRef.current.includes(item.id);
    if (hasId) {
      idsRef.current = idsRef.current.filter((id: number) => id !== item.id);
    } else {
      idsRef.current = [...idsRef.current, item.id];
    }
    setSelectedIds(idsRef.current);
  };

  const onItemDeleteHandler = useCallback((item: any) => {
    console.log("onItemDeleteHandler", item);
  }, []);

  return (
    <>
      <AddListComponent titleList={tList} selectedList={selectedIds} onItemChange={onItemChangeHandler} onItemDelete={onItemDeleteHandler} />
    </>
  );
};

export default memo(AddListWrapper);
