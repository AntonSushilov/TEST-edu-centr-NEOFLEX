import React, { useEffect, useMemo, useState } from "react";
import styles from "./HomePage.module.css";
import Card from "components/Products/Card/Card";
import { useAppDispatch } from "hooks/UseAppDispatch";
import { useAppSelector } from "hooks/UseAppSelector";
import Modal from "components/Modal/Modal";
import { getProductInfoList } from "services/ProductInfo/action";
import { TProductInfo, TProductInfoList } from "utils/types";
import Products from "components/Products/Products";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const [modalRender, setModalRender] = useState<boolean>(false);
  // const [selectedPeopleInfo, setSelectedPeopleInfo] = useState<TPeopleInfo | null>(null);


  const productInfoList = useAppSelector(
    (state) => state.productInfoReducer.productInfoList
  );

  // console.log("productInfoList", productInfoList);

  const default_headphones: TProductInfoList = useMemo(
    () => productInfoList.filter((el: TProductInfo) => el.type === "Default"),
    [productInfoList]
  );

  const wireless_headphones: TProductInfoList = useMemo(
    () => productInfoList?.filter((el: TProductInfo) => el.type === "Wireless"),
    [productInfoList]
  );

  // const handleClickOpenModal = (data: TPeopleInfo) => {
  //   console.log(data)
  //   setSelectedPeopleInfo(data)
  //   setModalRender(true)
  // }
  // const handleClickCloseModal = () => {
  //   setModalRender(false)
  // }

  return (
    <>
      <div className={styles.home_page}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Products title="Наушники" products={default_headphones} />
            <Products title="Беспроводные наушники" products={wireless_headphones} />
            {/* {peopleInfoList &&
            peopleInfoList.map((el, index) => <Card key={index} data={el} onClick={() => handleClickOpenModal(el)}/>)} */}
          </div>
        </div>
      </div>
      {/* {modalRender && (
      <Modal onClose={handleClickCloseModal} title={selectedPeopleInfo?.name}>
        <PeopleInfoDetails data={selectedPeopleInfo} />
      </Modal>
    )} */}
    </>
  );
};

export default HomePage;
