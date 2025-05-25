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
    { label: "title 1", id: 1, isComplete: false, description: "Hello how are you?" },
    { label: "title 2", id: 2, isComplete: false, description: "I am good" },
    { label: "title 3", id: 3, isComplete: false, description: "Hello how are you?" },
    { label: "title 4", id: 4, isComplete: false, description: "Hello how are you?" },
    { label: "title 5", id: 5, isComplete: false, description: "Hello how are you?" },
    { label: "title 6", id: 6, isComplete: false, description: "Hello how are you?" },
    { label: "title 7", id: 7, isComplete: false, description: "Hello how are you?" },
  ]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const onItemChangeHandler = useCallback((item: any) => {
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
  }, []);

  const onItemDeleteHandler = useCallback(
    (e: React.SyntheticEvent) => {
      setTList((oldState) => [...tList.filter((item: any) => !selectedIds.includes(item.id))]);
      idsRef.current = [];
      setSelectedIds([]);
    },
    [selectedIds]
  );

  const onAddEventHandler = useCallback((item: any) => {
    setTList((prevS) => [...[item], ...prevS]);
  }, []);

  return (
    <>
      <AddListComponent
        titleList={tList}
        selectedList={selectedIds}
        onItemChange={onItemChangeHandler}
        onItemDelete={onItemDeleteHandler}
        onAddEvent={onAddEventHandler}
      />
    </>
  );
};

export default memo(AddListWrapper);
